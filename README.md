# Deck Royale 🃏

Une application web permettant d'explorer les cartes Clash Royale, générer des decks aléatoires et rechercher le profil d'un joueur.

---

## Features principales

- 🃏 **Cartes** — Affichage de toutes les cartes Clash Royale avec leur rareté et coût en élixir
- 🎲 **Deck aléatoire** — Génération d'un deck de 8 cartes aléatoires
- 🔍 **Recherche joueur** — Recherche d'un joueur par tag avec affichage de son profil, clan, arène et deck actuel

---

## Technologies utilisées

- [Next.js 14+](https://nextjs.org/) — Framework React (App Router)
- [TypeScript](https://www.typescriptlang.org/) — Typage statique
- [Clash Royale API](https://developer.clashroyale.com/) — Données des cartes et joueurs
- CSS Modules — Styles scopés par composant

---

## Installation & lancement

```bash
# Cloner le projet
git clone https://github.com/maximilien-ilic/Deck-Royale.git
cd Deck-Royale/clash-royal

# Installer les dépendances
npm install

# Créer le fichier .env.local et ajouter la clé API
CLASH_API_KEY=votre_clé_api

# ⚠️ Création de la clé API :
# 1. Aller sur https://developer.clashroyale.com
# 2. Créer un compte et se connecter
# 3. Créer une nouvelle clé API en renseignant son adresse IP publique
#    (disponible sur https://whatismyip.com)
# 4. Copier la clé générée dans le .env.local

# Lancer le serveur de développement
npm run dev


## Membres du groupe

- **Maximilien Ilic**
- **Raphael Vaxelaire**
- **Charles Bauchet**