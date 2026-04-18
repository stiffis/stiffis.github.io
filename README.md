# Caffeine Overflow

Sitio estático con SvelteKit 2 + Svelte 5 (Runes) y Vite 7. Incluye theming multi‑paleta, componentes estilizados y una status bar interactiva tipo terminal.

## Características

- Temas: Catppuccin (Latte/Mocha), Gruvbox (Light/Dark) y Kanagawa.
- Status Bar fija inferior: ruta actual (copiable), hora, estado de red y cambio rápido de tema.
- Estilos consistentes tipo “terminal” y utilidades de color por tono (`-600/-700/-800`).
- Generación estática con `@sveltejs/adapter-static` lista para hosting estático.

## Requisitos

- `Node.js` ≥ 18 (probado con 22.x)
- `npm` o `pnpm` (cualquiera funciona)

## Instalación

- Clonar el repositorio y entrar al directorio.
- Instalar dependencias: `npm install`

## Desarrollo

- Servidor de desarrollo: `npm run dev`
- Tipos y diagnóstico Svelte: `npm run check`
- Linter + Prettier: `npm run lint`
- Formateo: `npm run format`
- Tests unitarios (Vitest):
  - Ver en modo interactivo: `npm run test:unit`
  - Ejecutar en modo CI: `npm run test`

## Build y Preview

- Construir producción (SSR + client): `npm run build`
- Previsualizar build: `npm run preview`
- Salida estática lista en `build/` (por `adapter-static`). Sirve en cualquier hosting estático.

## Estructura del proyecto (resumen)

- `src/routes/` rutas de la app (SvelteKit).
- `src/lib/components/` componentes compartidos (p. ej. `Navigation`, `ThemeToggle`, `StatusBar`).
- `src/lib/stores/` stores (p. ej. `theme.ts`).
- `src/app.css` estilos globales y temas (variables CSS por paleta).
- `svelte.config.js` configuración SvelteKit (mdsvex y adapter-static).

## Temas

- El tema activo se aplica en `<html data-theme="...">` y se persiste en `localStorage`.
- Store: `theme` en `src/lib/stores/theme.ts` con helpers `setTheme` y `nextTheme`.
- Componente: `ThemeToggle.svelte` (selector) y Status Bar (cambio rápido por clic).

## Status Bar

Componente `src/lib/components/StatusBar.svelte` (fija al fondo):

- Centro: ruta actual; clic para copiar al portapapeles.
- Derecha: estado de red (Online/Offline), tema actual (clic para cambiar) y hora.
- Indicador de navegación (animación) durante transiciones entre rutas.

## Scripts útiles

- `dev`: arranca Vite en modo desarrollo.
- `build`: compila para producción (client + server) y exporta a `build/`.
- `preview`: sirve el build de producción localmente.
- `check`: sincroniza y corre `svelte-check` con `tsconfig` del proyecto.
- `lint`: ESLint + Prettier (solo chequeo).
- `format`: Prettier (escritura).
- `test` / `test:unit`: tests con Vitest.

## Notas de despliegue

- Usa `@sveltejs/adapter-static`, por lo que el contenido de `build/` se puede subir a:
  - GitHub Pages (usuario/organización o proyecto en raíz), Netlify, Vercel (modo estático) u otro hosting estático.
- Si publicas bajo subruta, configura `paths.base` en `svelte.config.js` según tu dominio.

## Deploy en GitHub Pages

- Este repo ya tiene workflow en `.github/workflows/deployment.yml`.
- Como el repositorio se llama `stiffis.github.io`, GitHub lo publica como sitio de usuario en la raíz:
  `https://stiffis.github.io/`
- El deploy se dispara automáticamente con cada push a `main`.
- También puedes lanzarlo manualmente desde la pestaña `Actions` porque el workflow incluye `workflow_dispatch`.
- En GitHub ve a `Settings > Pages` y en `Source` selecciona `GitHub Actions`.
- El build genera la salida estática en `build/`, que es la carpeta que sube el workflow.
- Si en el futuro cambias el nombre del repo y deja de ser `stiffis.github.io`, tendrás que definir `paths.base` en SvelteKit para publicar bajo una subruta.

---

Author: stiffis · License: MIT (ver `package.json`).
