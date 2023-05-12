# Projet Initial

Ce projet initial est un modèle de base pour commencer rapidement la plupart de vos projets de développement. Il inclut un ensemble de dépendances pré-configurées et prêtes à l'emploi pour faciliter la mise en place de nouveaux projets.

## Dépendances incluses

Voici la liste des dépendances incluses dans le projet :

### Dépendances

- @headlessui/react
- @heroicons/react
- @react-firebase/auth
- @react-firebase/database
- @reduxjs/toolkit
- axios
- firebase
- gsap
- gsap-trial
- next
- react
- react-dom
- react-gtm-module
- react-redux
- redux
- redux-thunk

### Dépendances de développement

- autoprefixer
- postcss
- tailwindcss

## Clonage du projet et réinitialisation du nom

### Pour cloner le projet, suivez ces étapes :

1. Ouvrez un terminal et exécutez la commande suivante pour cloner le projet :
   git clone https://github.com/magicniclus/initialproject.git <nom_du_nouveau_projet>

2. Accédez au répertoire du projet cloné :
   cd <nom_du_nouveau_projet>

3. Supprimez le lien avec le dépôt d'origine :
   git remote rm origin

4. Mise à jour des dépendances
   Pour mettre à jour les dépendances à leurs dernières versions, exécutez la commande suivante :
   npm outdated
   Cette commande vous montrera les dépendances obsolètes et les nouvelles versions disponibles.

Pour mettre à jour une dépendance spécifique, utilisez la commande suivante :
npm install <nom_de_la_dependance>@latest

5. Création d'un nouveau dépôt Git
   Pour créer un nouveau dépôt Git indépendant avec le projet cloné, suivez ces étapes :

- Initialisez un nouveau dépôt Git :
  git init

- Ajoutez tous les fichiers du projet au nouveau dépôt :
  git add .

- Validez les modifications :
  git commit -m "Initial commit"

- Créez un nouveau dépôt sur GitHub, puis ajoutez l'URL du dépôt en tant que nouvelle origine :
  git remote add origin <URL_du_nouveau_dépôt>

- Poussez les modifications vers le nouveau dépôt :
  git push -u origin main

Votre projet cloné est maintenant prêt à être utilisé avec un nouveau dépôt Git indépendant et les dernières versions des dépendances.
