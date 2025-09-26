# **TP1 - Gestion d'une application de suivi de séries et films**

## Description

Ce projet est une API RESTful permettant aux utilisateurs de gérer leur bibliothèque personnelle de contenus audiovisuels (films, séries et mini-séries). Il permet de suivre la progression de visionnement des utilisateurs, d'ajouter des films ou des séries, de les modifier, de les supprimer, et de lister les contenus en fonction de divers filtres.

Les principales fonctionnalités incluent :

- La gestion des films et des séries.
- La gestion de la progression de visionnement pour les séries (épisodes vus).
- La validation des données avec des expressions régulières.
- La persistance des données dans un fichier JSON (simulant une base de données).
- Des tests via Postman.

## Prérequis

- **Node.js** 
- **TypeScript**
- **Express**
- **Postman** 

## Installation

npm install
npx tsc
npm init -y
npm install express winston
npm install typescript @types/node @types/express --save-dev
