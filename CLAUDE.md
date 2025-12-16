# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview production build

### Testing

- `npm test` - Run all Vitest tests (unit + Storybook)
- `npm test -- src/utils/add.test.ts` - Run a single test file
- `npm test -- --project storybook` - Run only Storybook tests (browser-based)
- `npm run coverage` - Run tests with coverage report
- `npx playwright test` - Run Playwright E2E tests (in `tests/` directory)
- `npx playwright test tests/example.spec.ts` - Run a single Playwright test

### Linting & Formatting

- `npm run lint` - ESLint (JS/TS/JSON/CSS)
- `npm run lint:types` - TypeScript type checking
- `npm run lint:styles` - Stylelint for CSS
- `npm run lint:format` - Prettier check
- `npm run lint:all` - Run all linters
- `npm run format` - Auto-format with Prettier

### Storybook

- `npm run storybook` - Start Storybook dev server (port 6006)
- `npm run build-storybook` - Build static Storybook

## Architecture

### Tech Stack

- React 19 with Vite 7
- TypeScript with strict mode enabled
- Vitest for unit testing with jsdom environment
- Playwright for E2E tests
- Storybook 10 with Vitest addon for component testing
- SCSS modules for component styling (using sass-embedded)
- ESLint flat config (eslint.config.ts) with Prettier integration

### Path Aliases

- `@/*` maps to `src/*` (configured in tsconfig.app.json)

### Test Structure

- Unit tests: `*.test.ts` or `*.spec.tsx` files alongside source files
- Component tests: use `@testing-library/react` with `@testing-library/jest-dom` matchers
- Storybook tests: `*.stories.ts` files in `src/stories/` or alongside components
- E2E tests: `tests/` directory using Playwright

### Pre-commit Hooks

Husky runs lint-staged on commit, which applies:

- ESLint + Prettier on JS/TS/JSX/TSX files
- Stylelint + Prettier on CSS files
- Prettier on MD/YAML files
