# Toomi's Little Kingdom

A magical, funny, and emotional birthday website for Toomi, made by Shaima.

Built with React and Vite. All wishes, quiz answers, and gift copy live in `src/data/content.js`, so you can edit the story without touching the layout.

## Run locally

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To skip the welcome gate while you are editing inner sections, open `http://localhost:5173/?enter=1`.

## Build

```bash
npm run build
npm run preview
```

The production files go in `dist/`.

## Deploy (free)

This is a static site. No backend or database.

### Vercel

1. Push the project to GitHub.
2. Import the repo in [Vercel](https://vercel.com/).
3. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.

### Netlify

1. Drag the `dist` folder into [Netlify Drop](https://app.netlify.com/drop), or connect the GitHub repo.
2. Build command: `npm run build`. Publish directory: `dist`.

### GitHub Pages

This repo deploys automatically from `main` with GitHub Actions.

Live site: https://shaima-alwahaibi.github.io/fatmas-little-kingdom/

## Customize

Edit `src/data/content.js` to change:

- the opening warning
- the birthday letter
- quiz responses
- flower wishes
- the matcha gift message

## Accessibility

Interactive pieces are real buttons with labels, `aria-expanded` / `aria-live` where it helps, and visible keyboard focus. Animations respect `prefers-reduced-motion`.
