
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

### 2. **Installer les dépendances front**

```bash
npm install
```
ou si tu utilises pnpm :
```bash
pnpm install
```

---

### 3. **Lancer le front en local**

```bash
npm run dev
```
- Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

---

## 🧪 Environnement Data Science/ML (Python)

### **Installer l’environnement IA pour reproduire les notebooks**

#### a. **Aller dans le répertoire sogood-ia**
```bash
cd ..
cd sogood-ia
```

#### b. **Créer un venv Python**
```bash
python -m venv .venv
# Windows :
.venv\Scripts\activate
# Mac/Linux :
source .venv/bin/activate
```

#### c. **Installer les packages Python**
```bash
pip install -r requirements.txt
```

#### d. **Lancer l'api FLASK (IA)**
```bash
python .\api.py
```

## 🧪 Environnement Backend (ExpressJS)

### **Installer l’environnement backend**

#### a. **Aller dans le répertoire sogood-back**
```bash
cd ..
cd sogood-back
```

#### a. **Installer les packages Javascript**
```bash
npm install
```

#### c. **Lancer le backend**
```bash
npm run dev
```

---

**Bon test !**