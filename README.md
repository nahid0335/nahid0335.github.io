# Nahid Tamzid Hasan — Portfolio (React + Vite + TypeScript + Tailwind)

Bilingual (English / 日本語) portfolio designed for both HR/non-IT recruiters and technical hiring managers, optimized for free GitHub Pages hosting and Google Search SEO.

## Features
- **Bilingual i18n (`EN` / `日本語`)**: Clean JSON translation files in `src/locales/`. Add new languages anytime by adding a new JSON file and registering it in `src/locales/index.ts`.
- **Light & Dark Mode Toggle**: Persisted in `localStorage` and respects OS preference.
- **Recruiter-Ready**: Impact metrics strip, interactive Experience tabs, Featured & Engineering Projects, clickable IEEE Xplore publications, and one-click EN/JP CV PDF downloads.
- **SEO Ready**: `Person` JSON-LD structured data (English + Katakana), Open Graph tags, `sitemap.xml`, and `robots.txt`.

## Free Deployment to GitHub Pages
1. Create a public GitHub repository named **`nahid0335.github.io`** (or rename your existing `portfolio` repo to `nahid0335.github.io`).
2. Push this project to the `main` branch:
   ```bash
   npm install
   npm run build   # optional local check
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/nahid0335/nahid0335.github.io.git
   git push -u origin main
   ```
3. In GitHub repo **Settings → Pages → Source**, select **GitHub Actions**.
4. Your site will go live at **`https://nahid0335.github.io/`**.
5. Submit `https://nahid0335.github.io/sitemap.xml` in **Google Search Console** (free) so your name ranks at the top of Google Search.
