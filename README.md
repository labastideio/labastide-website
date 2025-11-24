# Labastide Website

Site web statique pour Labastide, une entreprise spécialisée dans les services professionnels incluant le conseil stratégique, les solutions technologiques, la gestion de projet, et plus encore.

## Description

Ce projet contient le code source du site web de Labastide, construit avec HTML, CSS et JavaScript. Le site présente les services de l'entreprise, les études de cas, l'équipe, et les informations de contact.

## Compatibilité Webflow

Ce projet est optimisé pour la synchronisation avec Webflow via GitHub. La structure statique (HTML/CSS/JS) permet une intégration fluide :

- **Synchronisation automatique** : Les changements poussés sur GitHub sont automatiquement synchronisés avec Webflow Cloud
- **Structure standard** : Organisation des fichiers compatible avec les attentes de Webflow
- **Code statique pur** : Aucun framework ou dépendance Node.js qui pourrait causer des conflits

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

## Intégration Webflow

### Synchronisation GitHub-Webflow

1. **Connectez votre projet Webflow** à ce dépôt GitHub
2. **Activez la synchronisation** dans les paramètres du projet Webflow
3. **Poussez vos changements** sur GitHub - ils seront automatiquement synchronisés

### Structure pour Webflow

- **HTML statique** : Pages prêtes pour l'import ou la synchronisation
- **Assets organisés** : Dossier `assets/` avec toutes les ressources
- **CSS et JS séparés** : Facilite l'intégration dans les sections Custom Code de Webflow
- **Pas de dépendances** : Code pur sans frameworks externes

### Modification dans Webflow

Pour des modifications dans le Designer Webflow :

1. Ouvrez votre projet dans le Designer
2. Utilisez **Site Settings > Custom Code** pour ajouter CSS/JS global
3. Utilisez **Page Settings > Custom Code** pour le code spécifique aux pages
4. Les changements seront synchronisés avec GitHub

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

### Lancement local

Pour visualiser le site localement, ouvrez simplement `index.html` dans votre navigateur web, ou utilisez un serveur local :

```bash
# Avec Python
python3 -m http.server 8000

# Avec Node.js (si installé)
npx serve .

# Ou tout autre serveur HTTP statique
```

## Déploiement

Le site est statique et peut être déployé sur n'importe quel serveur web ou service d'hébergement statique comme :

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Webflow Hosting (via synchronisation GitHub)

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6+)

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