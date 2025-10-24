# **TP2 - Gestion d'une application de suivi de séries et films**

## Description

Ce projet est une API RESTful permettant aux utilisateurs de suivre et de gérer leurs films et séries. Les utilisateurs peuvent consulter des films et des séries, noter les films et épisodes, gérer leurs favoris, et recevoir des recommandations. Les administrateurs peuvent ajouter, modifier et supprimer des films et des séries. L'application est sécurisée avec JWT, et les données sont persistées dans MongoDB.

Les principales fonctionnalités incluent :

- **Versionnement de l'API** : v1 (légacy) et v2 (nouvelle version avec MongoDB et sécurité).
- **Authentification et gestion des utilisateurs** : Inscription, connexion, gestion des favoris.
- **Gestion des films et séries** : Consultation, création, modification, suppression de films et séries.
- **Gestion des saisons et épisodes** : Ajouter des saisons et des épisodes à des séries.
- **Notations et avis** : Notation des films et épisodes avec des scores et des critiques.
- **Recommandations** : Recommandation de films par genre et de séries tendances.
- **Sécurité** : JWT pour l'authentification, gestion des rôles (utilisateur/admin), CORS et rate-limiting.
- **MongoDB** : Persistance des données avec Mongoose.

## Prérequis

- **Node.js**
- **TypeScript**
- **Express**
- **MongoDB** (local ou distant)
- **Swagger/OpenAPI** pour la documentation de l'API
- **Postman** pour tester l'API
- **dotenv** pour gérer les variables d'environnement

## Installation

npm install
npx tsc
npm init -y
npm install express winston
npm install typescript @types/node @types/express --save-dev
npm install mongoose
npm install jsonwebtoken
npm install bcryptjs
npm install dotenv
npm install cors
npm install express-rate-limit