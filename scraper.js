const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

(async () => {
  const baseUrl = 'https://client-first-128.webflow.io';
  const visited = new Set();
  const queue = [baseUrl];
  const downloadedAssets = new Set();

  // Lancer le navigateur headless
  const browser = await puppeteer.launch({ headless: true });

  // Créer le dossier assets
  const assetsDir = path.join(__dirname, 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
  }

  // Fonction pour télécharger un fichier
  const downloadFile = (url, filepath) => {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https') ? https : http;
      const file = fs.createWriteStream(filepath);
      protocol.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    });
  };

  // Fonction pour obtenir le nom de fichier basé sur le chemin
  const getFilenameFromPath = (pathname) => {
    if (pathname === '/' || pathname === '') return 'index.html';
    return pathname.replace(/^\//, '').replace(/\//g, '-').replace(/[^a-zA-Z0-9._-]/g, '_') + '.html';
  };

  // Fonction pour ajuster les liens internes
  const adjustInternalLinks = (html, currentPath) => {
    return html.replace(/href="([^"]*)"/g, (match, href) => {
      if (href.startsWith('/')) {
        const targetPath = href;
        const filename = getFilenameFromPath(targetPath);
        return `href="${filename}"`;
      } else if (href.startsWith(baseUrl)) {
        const urlObj = new URL(href);
        const targetPath = urlObj.pathname;
        const filename = getFilenameFromPath(targetPath);
        return `href="${filename}"`;
      }
      return match;
    });
  };

  // Fonction pour traiter une page
  const processPage = async (url) => {
    if (visited.has(url)) return;
    visited.add(url);

    console.log(`Visiting: ${url}`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Extraire le HTML
    let html = await page.content();

    // Collecter les liens internes
    const internalLinks = await page.evaluate((base) => {
      const links = [];
      const anchors = document.querySelectorAll('a[href]');
      anchors.forEach(a => {
        const href = a.href;
        if (href.startsWith('/') || href.startsWith(base)) {
          links.push(href.startsWith('/') ? base + href : href);
        }
      });
      return links;
    }, baseUrl);

    // Ajouter les liens à la queue
    internalLinks.forEach(link => {
      if (!visited.has(link) && !queue.includes(link)) {
        queue.push(link);
      }
    });

    // Collecter les assets
    const assets = await page.evaluate(() => {
      const assets = [];
      // Images
      const images = document.querySelectorAll('img[src]');
      images.forEach(img => {
        if (img.src) assets.push({ url: img.src, type: 'image' });
      });
      // Autres assets
      const otherAssets = document.querySelectorAll('[src]');
      otherAssets.forEach(el => {
        if (el.src && !assets.some(a => a.url === el.src)) {
          assets.push({ url: el.src, type: 'other' });
        }
      });
      return assets;
    });

    // Télécharger les assets non téléchargés
    for (const asset of assets) {
      const assetUrl = asset.url;
      if (downloadedAssets.has(assetUrl)) continue;
      downloadedAssets.add(assetUrl);

      let filename = path.basename(new URL(assetUrl).pathname);
      if (!filename || filename === '/') {
        const urlObj = new URL(assetUrl);
        filename = `${urlObj.hostname}${urlObj.pathname.replace(/\//g, '_')}`.replace(/[^a-zA-Z0-9._-]/g, '_');
        if (!filename) filename = `asset_${Date.now()}`;
      }
      const filepath = path.join(assetsDir, filename);
      try {
        await downloadFile(assetUrl, filepath);
        console.log(`Téléchargé: ${filename}`);
      } catch (err) {
        console.error(`Erreur lors du téléchargement de ${assetUrl}: ${err.message}`);
      }
    }

    // Ajuster les liens internes dans le HTML
    html = adjustInternalLinks(html, new URL(url).pathname);

    // Sauvegarder le HTML
    const pathname = new URL(url).pathname;
    const filename = getFilenameFromPath(pathname);
    fs.writeFileSync(filename, html);
    console.log(`Sauvegardé: ${filename}`);

    await page.close();
  };

  // Traiter la queue
  while (queue.length > 0) {
    const currentUrl = queue.shift();
    await processPage(currentUrl);
  }

  // Fermer le navigateur
  await browser.close();

  console.log('Scraping terminé avec succès.');
  console.log(`Pages scrapées: ${visited.size}`);
  console.log(`Fichiers créés: ${Array.from(visited).map(url => getFilenameFromPath(new URL(url).pathname)).join(', ')}`);
})();