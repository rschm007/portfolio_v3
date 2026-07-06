# Robert Schmahl — Portfolio

Personal portfolio site. Built with [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vite.dev/), styled with [Sass](https://sass-lang.com/) and animated with [Motion](https://motion.dev/).

Live at [robertschmahl.com](https://robertschmahl.com).

## Tech stack

- **Build tool:** Vite 8
- **UI:** React 19 + React DOM
- **Routing:** react-router-dom 7
- **Animation:** framer-motion (Motion) 12
- **Forms:** react-hook-form + EmailJS
- **Styling:** Dart Sass
- **Tooling:** TypeScript 5, ESLint 9 (flat config), Prettier

## Available scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot module replacement.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Type-checks with `tsc` and builds the production bundle to the `build` folder.

### `npm run preview`

Serves the production build locally to preview it before deploying.

### `npm run typecheck`

Runs the TypeScript compiler in no-emit mode to check types.

### `npm run lint` / `npm run lint:fix`

Lints (and optionally auto-fixes) the source with ESLint.

### `npm run format`

Formats the source with Prettier.

## Project structure

```
src/
  @types/       Shared TypeScript prop contracts
  assets/       Images and SVGs
  components/   Feature-grouped components (each with a barrel index.ts)
  pages/        Route-level pages (main, about, work, contact)
  styles/       Sass partials, mixins, and per-component styles
  App.tsx       Route definitions
  index.tsx     App entry (createRoot + BrowserRouter)
```

Path aliases (`components/*`, `pages/*`, `styles/*`, `assets/*`, `types/*`) are defined in `tsconfig.json` and resolved natively by Vite.
