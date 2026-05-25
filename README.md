# Italian Caffe

Olivéto is a React landing site for an Italian cafe experience in Florence. The app uses Vite, TanStack Router/Start, React Query, and Tailwind CSS v4.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The local dev server runs at `http://localhost:8080/`.

## Available Scripts

```bash
npm run build
npm run preview
npm run lint
```

## Project Notes & Running

- Global styles live in `src/styles.css`.
- Main routes live in `src/routes/`.
- Shared site components live in `src/components/site/`.

Install dependencies with `bun install` (or `npm install` / `yarn install`).

Start the dev server:

```bash
# with Bun
bun run dev

# with npm
npm run dev
```

Build / preview:

```bash
bun run build
bun run preview
# or with npm
npm run build
npm run preview
```

Format and lint:

```bash
bun run format
bun run lint

# autofix where possible
bun run eslint -- --fix .
```