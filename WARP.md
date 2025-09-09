# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Caffeine Overflow** is a SvelteKit application configured for static site generation and deployment to GitHub Pages. The project uses modern development tools including TypeScript, Tailwind CSS, Vitest for testing, and comprehensive linting/formatting with ESLint and Prettier.

## Development Commands

### Core Development
```bash
# Start development server
npm run dev

# Start development server and open in browser
npm run dev -- --open

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality & Testing
```bash
# Run type checking
npm run check

# Run type checking in watch mode
npm run check:watch

# Run all tests
npm run test

# Run tests in watch mode
npm run test:unit

# Format code
npm run format

# Lint code (includes Prettier check + ESLint)
npm run lint
```

## Architecture & Structure

### SvelteKit Configuration
- **Static adapter**: Uses `@sveltejs/adapter-static` for GitHub Pages deployment
- **Preprocessing**: Configured with `vitePreprocess()` and `mdsvex()` for enhanced Svelte files
- **Extensions**: Supports both `.svelte` and `.svx` (MDSveX) files
- **Prerendering**: All routes are prerendered (`export const prerender = true` in `+layout.ts`)

### Testing Setup
The project uses a dual testing configuration via Vitest:

1. **Client-side tests**: Browser-based testing with Playwright for `*.svelte.{test,spec}.{js,ts}` files
2. **Server-side tests**: Node environment for regular `*.{test,spec}.{js,ts}` files

Key testing utilities:
- `vitest-browser-svelte` for Svelte component testing
- `@testing-library/svelte` for component interactions
- Playwright browser automation for client tests

### CSS & Styling
- **Tailwind CSS 4.x**: Modern CSS framework with plugins for forms and typography
- **Global styles**: Located in `src/app.css`
- **Tailwind plugins**: `@tailwindcss/forms` and `@tailwindcss/typography` enabled

### Dependencies Architecture
**Key runtime dependencies:**
- **Markdown processing**: `markdown-it` with plugins for anchors, external links, syntax highlighting, figures, and math (`katex`)
- **Utilities**: `dayjs` for dates, `slugify` for URL generation, `reading-time` for blog features
- **Icons**: FontAwesome integration via `svelte-fa`

**Development tooling:**
- **Linting**: ESLint with TypeScript and Svelte support
- **Formatting**: Prettier with Svelte and Tailwind plugins
- **Git hooks**: Husky + lint-staged for pre-commit quality checks
- **Build tools**: Vite with SvelteKit and custom plugins

### Deployment
- **Target**: GitHub Pages static hosting
- **CI/CD**: GitHub Actions workflow in `.github/workflows/deployment.yml`
- **Build output**: Static files generated to `build/` directory
- **Node version**: 22 (specified in deployment workflow)

## File Naming Conventions

### Routes
- `+page.svelte`: Page components
- `+layout.svelte`: Layout components  
- `+layout.ts`: Layout logic and configuration
- `*.svelte.spec.ts`: Component tests (run in browser environment)
- `*.spec.ts` or `*.test.ts`: Server-side tests (run in Node environment)

### Configuration Files
- All major config files use tabs for indentation (per `.prettierrc`)
- TypeScript strict mode enabled across the project
- ESLint configured to work with TypeScript (no-undef rule disabled for TS files)

## Package Management
- Uses npm with engine-strict enforcement (`.npmrc`)
- Lock file: `package-lock.json` (npm)
- Special pnpm configuration for certain dependencies (`@tailwindcss/oxide`, `esbuild`)
