# Walkthrough - Developer Portfolio React.js Conversion

We have successfully migrated the static portfolio into a modern React.js web application built with Vite, splitting the monolithic HTML/CSS/JS code into clean, modular, and maintainable component blocks.

---

## 🚀 Accomplished Work

1. **Framework & Configurations (`package.json`, `vite.config.js`)**:
   - Initialized Vite + React package configurations.
   - Configured dev server and production build scripts.
   - Verified that the production build compiles successfully via Vite (`npm run build`).

2. **Folder Reorganization**:
   - Relocated static assets to the `public/` directory so they remain fully accessible at their previous relative paths:
     - Project screenshots: `public/images/`
     - Downloadable resume PDFs: `public/AbhishekTiwari_SoftwareEngineer.pdf`, `public/resume.pdf`
     - Print-friendly layout: `public/resume.html`
   - Created `src/` and `src/components/` folders to host the React application code.

3. **Core Entrypoints (`index.html`, `main.jsx`, `App.jsx`)**:
   - Rewrote `index.html` as the entrypoint container containing `<div id="root"></div>` mounting the React DOM.
   - Wired `main.jsx` to render `<App />` and import global styles.
   - Ported global layout wrappers, status banner, and the scroll reveal animation system into `App.jsx`.

4. **Modular React Components (`src/components/`)**:
   - **`CanvasParticles.jsx`**: Ported the HTML5 canvas background particle script to React, wrapping canvas initialization and animation loop inside a cleanup-safe `useEffect` hook.
   - **`Navbar.jsx`**: Restructured navigation links and mobile toggle states declaratively using React `useState` hooks.
   - **`Hero.jsx`**: Isolated hero tag banner, profile visual tags, download buttons, and fully ported the title scrambled typing animation script.
   - **`Experience.jsx`**: Ported professional employment timelines and tag metrics.
   - **`About.jsx`**: Divided professional overview paragraph columns, key metrics, Pranveer Singh Institute of Technology history, certifications list, and extracurricular captains cards.
   - **`Skills.jsx`**: Isolated capability categories and matrix sliders.
   - **`Projects.jsx`**: Refactored the projects grid to dynamically map and render the 6 active projects, tags, metrics, and source URLs.
   - **`Contact.jsx`**: Integrated direct FormSubmit.co email actions, AJAX posting, validation states, loading submit icons, and simulated feedback overlays.
   - **`Footer.jsx`**: Wrapped footer copyrights and live system operational telemetry.
