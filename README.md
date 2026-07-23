# 🌍 AfriConnect Summit 2026

**Projet de fin de module - Développement Web L1**

---

## 👤 Auteur

**NIANG Mamadou**  
Classe : L1 Cybersécurité  
Année académique : 2025-2026

---

## 📝 Description du projet

**AfriConnect Summit 2026** est un site vitrine complet pour une conférence tech panafricaine fictive. 
Le site présente l'événement, son programme, ses intervenants et permet aux visiteurs de s'inscrire 
via un formulaire de contact.

Ce projet a été réalisé dans le cadre de l'examen de Développement Web (L1) et intègre les 
technologies fondamentales du web : HTML5, CSS3 et JavaScript vanilla.

---

## 🎯 Objectifs pédagogiques

- Maîtriser la structure sémantique HTML5
- Appliquer des styles CSS modernes (Flexbox, Grid, variables CSS)
- Implémenter des fonctionnalités JavaScript vanilla sans framework
- Assurer la responsivité sur tous les appareils
- Gérer les préférences utilisateur (thème dark/light)
- Déployer un site sur GitHub Pages

---

## 🛠️ Technologies utilisées

| Technologie | Description |
|-------------|-------------|
| **HTML5** | Structure sémantique des pages |
| **CSS3** | Mise en page (Flexbox, Grid), variables CSS, animations |
| **JavaScript** | Vanilla JS (DOM, IntersectionObserver, localStorage) |
| **Font Awesome** | Icônes vectorielles |
| **Google Fonts** | Typographie Space Grotesk |
| **Git & GitHub** | Versionnement et déploiement |

---

## 📄 Pages du site

| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `index.html` | Présentation de l'événement, chiffres clés, intervenants vedettes, sponsors |
| Programme | `programme.html` | Planning détaillé avec onglets (3 jours), thématiques |
| Intervenants | `intervenants.html` | Liste des 9 intervenants avec filtrage dynamique |
| Contact | `contact.html` | Formulaire d'inscription avec validation, FAQ accordéon, carte Google Maps |

---

## ⚡ Fonctionnalités JavaScript implémentées

| # | Fonctionnalité | Description |
|---|----------------|-------------|
| 1 | **Dark Mode** | Bascule via checkbox, sauvegardé dans `localStorage` |
| 2 | **Navbar dynamique** | Changement de fond après 80px de scroll + menu hamburger |
| 3 | **Animations au scroll** | Fade-in des sections via `IntersectionObserver` |
| 4 | **Onglets Programme** | Affichage/masquage des jours au clic (3 onglets) |
| 5 | **Filtrage Intervenants** | Filtrage par thématique sans rechargement (5 catégories) |
| 6 | **Validation formulaire** | Contrôle complet (nom, email, téléphone, message, etc.) |
| 7 | **Retour en haut** | Bouton apparaissant à 300px de scroll, remontée douce |
| 8 | **Année dynamique** | `new Date().getFullYear()` injecté dans le footer |
| 9 | **Compte à rebours** | Jours/heures/minutes/secondes jusqu'au 15 octobre 2026 |

---

## 🗂️ Structure du projet
