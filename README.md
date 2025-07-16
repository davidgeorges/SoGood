
# 🥗 SoGood – Analyse & Cartographie Nutritionnelle

Projet de data science & web app inspiré de la plateforme **Open Food Facts**  
*Analyse, visualisation, prédiction IA du Nutri-Score/NOVA et exploration interactive des produits alimentaires.*

---

## 🚀 Présentation rapide

**SoGood** est un projet d’exploration et de cartographie de la qualité nutritionnelle des produits alimentaires de supermarché.  
Il combine :

- **Un backend IA/ML** (Python) pour l’analyse, le nettoyage et la prédiction automatique du Nutri-Score/NOVA à partir des données Open Food Facts.
- **Un frontend React + Tailwind CSS** sous forme d’une web-app, permettant de rechercher, filtrer et explorer facilement les produits selon leur impact nutritionnel.

---

## 🤖 Composant IA/Data Science

- **Exploration des données Open Food Facts** (pré-traitement, nettoyage, EDA, visualisation).
- **Modélisation (NLP/ML)** pour prédire le Nutri-Score/NOVA à partir de la liste d’ingrédients (TF-IDF + Logistic Regression, ou modèle transformer).
- **Détection automatique** des produits et marques les plus controversés (riches en additifs, Nutri-Score D/E, NOVA 4).
- **Génération de graphiques pour l’analyse exploratoire** : distributions, outliers, corrélations…

---

## 🖥️ Frontend React – Web App Interactive

- **Recherche instantanée** sur tous les produits.
- **Filtres par catégorie** (ex : “All”, “Veggie”, “Chicken”, etc.).
- **Affichage type carte** pour chaque produit (image, nom, rating, description…).
- **Design moderne, responsive** (mobile-first) avec Tailwind CSS.
- **Barre de navigation interactive**.

---

## ⚙️ Installation & Reproduction en Local

### 1. **Cloner le projet**

```bash
git clone https://github.com/davidgeorges/SoGood
cd sogood-front
```

---

### 2. **Installer Node.js et npm (ou pnpm)**
- [Télécharge la version LTS de Node.js](https://nodejs.org/en/download/)
- Vérifie l’installation :
  ```bash
  node -v
  npm -v
  ```

---

### 3. **Installer les dépendances front**

```bash
npm install
```
ou si tu utilises pnpm :
```bash
pnpm install
```

---

### 5. **Lancer le front en local**

```bash
npm run dev
```
- Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

---

## 🧪 Environnement Data Science/ML (Python)

### **Installer l’environnement IA pour reproduire les notebooks**

#### a. **Créer un venv Python**
```bash
python -m venv .venv
# Windows :
.venv\Scripts\activate
# Mac/Linux :
source .venv/bin/activate
```

#### b. **Installer les packages Python**
```bash
pip install -r requirements.txt
```

- Ouvre le notebook d’analyse pour explorer et exécuter les cellules (prétraitement, visualisations, modèles…).

---

**Bon test !**