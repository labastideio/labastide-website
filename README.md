# Labastide Website

Site web statique pour Labastide, une entreprise spécialisée dans les services professionnels incluant le conseil stratégique, les solutions technologiques, la gestion de projet, et plus encore.

## Description

Ce projet contient le code source du site web de Labastide, construit avec HTML, CSS et JavaScript. Le site présente les services de l'entreprise, les études de cas, l'équipe, et les informations de contact.

## Structure du projet

- `index.html` - Page d'accueil
- `about-us.html` - À propos de nous
- `services/` - Pages des services
- `portfolio/` - Études de cas et projets
- `blog/` - Articles de blog
- `career.html` - Carrières
- `contact-us.html` - Contact
- `assets/` - Images, polices et autres ressources
- `styles.css` - Feuilles de style CSS
- `scripts.js` - Scripts JavaScript
- `scraper.js` - Script de scraping (utilise Puppeteer)

## Installation et configuration

### Prérequis

- Navigateur web moderne
- Node.js (version 14 ou supérieure) si vous souhaitez utiliser les scripts

### Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/labastide/labastide-website.git
   cd labastide-website
   ```

2. Installez les dépendances (si nécessaire) :
   ```bash
   npm install
   ```

### Lancement du serveur de développement

Pour visualiser le site localement :

```bash
npm run dev
```

Ou utilisez Python :

```bash
python3 -m http.server 8000
```

Puis ouvrez http://localhost:8000 dans votre navigateur.

### Scripts disponibles

- `npm run dev` - Lance un serveur local sur le port 8000
- `npm start` - Alias pour dev
- `npm test` - Exécute les tests (actuellement aucun test défini)

## Déploiement

Le site est statique et peut être déployé sur n'importe quel serveur web ou service d'hébergement statique comme :

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6+)
- Puppeteer (pour le scraping)

## Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Labastide - contact@labastide.io

Site web : https://labastide.io