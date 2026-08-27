# Portfolio — Nans MOLL

Portfolio one-page (React + Vite + Tailwind) au style cyberpunk / synthwave.

## Lancer le projet

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
├─ data/
│  └─ content.js        → TOUT le texte éditable (infos, compétences, formations,
│                          expériences, projets…). C'est ici qu'on modifie le contenu.
├─ theme.js             → palettes de couleurs (sombre cyberpunk + clair) et fonds
├─ lib/
│  └─ prng.js           → générateur aléatoire déterministe (skyline stable)
├─ hooks/
│  └─ index.js          → section active, progression du scroll, animations réduites
├─ components/
│  ├─ Logo.jsx          → logo (glyphe réseau)
│  ├─ SideCables.jsx    → câbles latéraux (parallaxe au scroll)
│  ├─ Cityscape.jsx     → skyline néon en bas de page
│  ├─ SynthGrid.jsx     → grille en perspective dans le ciel
│  ├─ Background.jsx    → assemble tous les calques de décor
│  ├─ ui.jsx            → briques réutilisables (Section, Pill, Timeline, InfoCard…)
│  ├─ Header.jsx        → barre de nav + réseaux + toggle thème
│  ├─ ProjectCards.jsx  → grille de projets cliquables
│  └─ ProjectModal.jsx  → fenêtre de détail d'un projet
├─ sections/
│  ├─ Hero.jsx          → accueil (plein écran)
│  ├─ About.jsx         → à propos + certif/langues/soft skills/intérêts
│  ├─ Skills.jsx        → compétences groupées
│  ├─ Parcours.jsx      → formations + expériences
│  ├─ Projects.jsx      → projets & articles
│  └─ Contact.jsx       → contact + CV
├─ Portfolio.jsx        → compose header + décor + sections + footer
├─ App.jsx              → point d'entrée applicatif
├─ main.jsx             → montage React
└─ index.css           → directives Tailwind + scroll fluide
```

## À personnaliser

- **`src/data/content.js`** : tes infos, projets, formations, etc.
- **`ME.linkedin`** : remplace le placeholder par ton vrai profil LinkedIn.
- **Photo** : dans `src/sections/About.jsx`, remplace le bloc avec les initiales par une `<img />`.
- **CV** : dans `src/sections/Contact.jsx` (et le bouton du Hero), mets le lien vers ton PDF.
- **Projets** : renseigne le champ `repo` d'un projet dans `content.js` pour afficher le bouton « Voir le code ».
- **Couleurs / intensité du décor** : `src/theme.js` et les composants `Cityscape` / `SynthGrid` / `SideCables`.
```
