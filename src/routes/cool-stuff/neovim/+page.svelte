<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { Fa } from 'svelte-fa';
	import { faTerminal } from '@fortawesome/free-solid-svg-icons';
	import { language } from '$lib/i18n';

	const repoUrl = 'https://github.com/stiffis/neovim-config';
	const rawBase = 'https://raw.githubusercontent.com/stiffis/neovim-config/main/screenshots';

	const content = {
		en: {
			title: 'My Neovim Configuration',
			excerpt: 'A modular Neovim setup built on top of AstroNvim v5, tuned for fast startup, language tooling, and a clean daily coding workflow.',
			body: `## Overview

This config lives in <a href="${repoUrl}">stiffis/neovim-config</a> and is one of the tools I use the most every day. It is built around **AstroNvim v5** and extends it with my own plugin choices, custom highlights, language tooling, and workflow improvements for writing code, notes, and technical documents.

## Screenshots

<div class="grid gap-8 md:grid-cols-2">
	<figure class="space-y-3">
		<img src="${rawBase}/dashboard.png" alt="Neovim dashboard screenshot" />
		<figcaption>Dashboard and startup screen.</figcaption>
	</figure>
	<figure class="space-y-3">
		<img src="${rawBase}/coding.png" alt="Neovim coding screenshot" />
		<figcaption>Daily coding setup with completion and syntax tooling.</figcaption>
	</figure>
	<figure class="space-y-3">
		<img src="${rawBase}/debug-dap.png" alt="Neovim debugging screenshot" />
		<figcaption>Debugging session using DAP integration.</figcaption>
	</figure>
	<figure class="space-y-3">
		<img src="${rawBase}/latex-zathura.png" alt="Neovim LaTeX preview screenshot" />
		<figcaption>LaTeX workflow with live PDF preview.</figcaption>
	</figure>
	<figure class="space-y-3 md:col-span-2">
		<img src="${rawBase}/typst-preview.png" alt="Neovim Typst preview screenshot" />
		<figcaption>Typst preview workflow with browser sync.</figcaption>
	</figure>
</div>

## What it focuses on

- **Fast startup** through lazy-loaded plugins
- **Comfortable editing** with a polished UI and solid defaults
- **Strong language tooling** via LSP, Treesitter, Mason, and Conform
- **Daily workflow support** for Go, Python, C/C++, TypeScript, Java, LaTeX, and Typst
- **Practical extras** like debugging, collaborative editing, markdown rendering, and deadline tracking

## Main features

- **70+ plugins** selected around real daily use rather than plugin count
- **Kanagawa** as the main theme, with **Catppuccin** available as an alternative
- **blink.cmp** for autocompletion with LSP integration
- **Conform.nvim** for format-on-save workflows
- **nvim-treesitter** for syntax-aware highlighting and editing
- **nvim-dap** for debugging sessions
- **vimtex** and **typst.vim + tinymist** for document workflows
- **live-share.nvim** for collaborative editing
- A custom **timelimit** plugin for project deadline tracking

## Tooling and language support

The README lists support or ready-to-configure flows for:

- Go
- Python
- C / C++
- TypeScript
- Java
- LaTeX
- Typst

That makes this config useful not only for app development, but also for coursework, technical writing, and systems programming.

## Core plugin stack

### Base framework

- **AstroNvim**
- **lazy.nvim**

### Completion and editing

- **blink.cmp**
- **LuaSnip**

### LSP and formatting

- **mason.nvim**
- **nvim-lspconfig**
- **conform.nvim**
- **nvim-treesitter**

### Language-specific workflow

- **vimtex** for LaTeX with live preview
- **typst.vim** + **tinymist** for Typst editing, formatting, diagnostics, and preview
- **nvim-java** for Java support
- **tailwind-tools.nvim** and **tailwindcss-colorizer-cmp** for Tailwind work

## Installation

\`\`\`bash
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
mv ~/.local/state/nvim ~/.local/state/nvim.bak
mv ~/.cache/nvim ~/.cache/nvim.bak

git clone https://github.com/stiffis/neovim-config ~/.config/nvim
cd ~/.config/nvim
nvim
\`\`\`

On first launch, Lazy.nvim installs the plugin set automatically.

## Requirements

- Neovim >= 0.10.0 (0.11+ recommended)
- Git >= 2.19
- Node.js >= 18
- Python >= 3.10
- A Nerd Font
- ripgrep
- Optional tools like \`lazygit\`, \`zathura\`, and \`typst\`

## Notable workflows

### Coding

This setup is designed to make normal development feel smooth: completion, formatting, LSP navigation, diagnostics, Treesitter, and a UI that stays readable over long sessions.

### LaTeX and Typst

One of the strongest parts of the config is document work:

- LaTeX with **VimTeX + Zathura**
- Typst with **browser preview**, sync support, diagnostics, and formatting

That makes it especially useful for class notes, reports, and technical writeups.

### Debugging and collaboration

- DAP support for debugging sessions
- live-share support for collaborative editing
- custom deadline tracking through \`timelimit.nvim\`

## Project structure

\`\`\`text
~/.config/nvim/
├── init.lua
├── lua/
│   ├── lazy_setup.lua
│   ├── polish.lua
│   ├── community.lua
│   └── plugins/
├── .stylua.toml
└── README.md
\`\`\`

## Links

<ul>
	<li><a href="${repoUrl}">Repository</a></li>
	<li><a href="https://github.com/AstroNvim/AstroNvim">AstroNvim</a></li>
	<li><a href="https://neovim.io">Neovim</a></li>
</ul>`
		},
		es: {
			title: 'Mi Configuración de Neovim',
			excerpt: 'Una configuración modular de Neovim construida sobre AstroNvim v5, optimizada para inicio rápido, herramientas de lenguaje y un flujo de trabajo de código limpio.',
			body: `## Visión General

Esta config vive en <a href="${repoUrl}">stiffis/neovim-config</a> y es una de las herramientas que más uso cada día. Está construida alrededor de **AstroNvim v5** y la extiende con mis propias elecciones de plugins, highlights personalizados, herramientas de lenguaje y mejoras de flujo de trabajo para escribir código, notas y documentos técnicos.

## Capturas de Pantalla

<div class="grid gap-8 md:grid-cols-2">
	<figure class="space-y-3">
		<img src="${rawBase}/dashboard.png" alt="Captura del dashboard de Neovim" />
		<figcaption>Dashboard y pantalla de inicio.</figcaption>
	</figure>
	<figure class="space-y-3">
		<img src="${rawBase}/coding.png" alt="Captura de código en Neovim" />
		<figcaption>Configuración diaria de código con autocompletado y herramientas de sintaxis.</figcaption>
	</figure>
	<figure class="space-y-3">
		<img src="${rawBase}/debug-dap.png" alt="Captura de depuración en Neovim" />
		<figcaption>Sesión de depuración usando integración DAP.</figcaption>
	</figure>
	<figure class="space-y-3">
		<img src="${rawBase}/latex-zathura.png" alt="Captura de vista previa LaTeX en Neovim" />
		<figcaption>Flujo de trabajo LaTeX con vista previa PDF en vivo.</figcaption>
	</figure>
	<figure class="space-y-3 md:col-span-2">
		<img src="${rawBase}/typst-preview.png" alt="Captura de vista previa Typst en Neovim" />
		<figcaption>Flujo de trabajo de vista previa Typst con sincronización de navegador.</figcaption>
	</figure>
</div>

## En qué se enfoca

- **Inicio rápido** a través de plugins cargados perezosamente
- **Edición cómoda** con una UI pulida y valores predeterminados sólidos
- **Herramientas de lenguaje fuertes** via LSP, Treesitter, Mason y Conform
- **Soporte de flujo de trabajo diario** para Go, Python, C/C++, TypeScript, Java, LaTeX y Typst
- **Extras prácticos** como depuración, edición colaborativa, renderizado de markdown y seguimiento de fechas límite

## Características principales

- **70+ plugins** seleccionados alrededor del uso diario real en lugar de la cantidad de plugins
- **Kanagawa** como tema principal, con **Catppuccin** disponible como alternativa
- **blink.cmp** para autocompletado con integración LSP
- **Conform.nvim** para flujos de trabajo de formato al guardar
- **nvim-treesitter** para edición y resaltado de sintaxis consciente
- **nvim-dap** para sesiones de depuración
- **vimtex** y **typst.vim + tinymist** para flujos de trabajo de documentos
- **live-share.nvim** para edición colaborativa
- Un plugin personalizado **timelimit** para seguimiento de fechas límite de proyectos

## Soporte de herramientas y lenguajes

El README lista soporte o flujos listos para configurar para:

- Go
- Python
- C / C++
- TypeScript
- Java
- LaTeX
- Typst

Eso hace esta config útil no solo para desarrollo de aplicaciones, sino también para trabajos de curso, escritura técnica y programación de sistemas.

## Stack de plugins centrales

### Framework base

- **AstroNvim**
- **lazy.nvim**

### Completado y edición

- **blink.cmp**
- **LuaSnip**

### LSP y formateo

- **mason.nvim**
- **nvim-lspconfig**
- **conform.nvim**
- **nvim-treesitter**

### Flujo de trabajo específico por lenguaje

- **vimtex** para LaTeX con vista previa en vivo
- **typst.vim** + **tinymist** para edición, formateo, diagnósticos y vista previa de Typst
- **nvim-java** para soporte de Java
- **tailwind-tools.nvim** y **tailwindcss-colorizer-cmp** para trabajo con Tailwind

## Instalación

\`\`\`bash
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
mv ~/.local/state/nvim ~/.local/state/nvim.bak
mv ~/.cache/nvim ~/.cache/nvim.bak

git clone https://github.com/stiffis/neovim-config ~/.config/nvim
cd ~/.config/nvim
nvim
\`\`\`

En el primer lanzamiento, Lazy.nvim instala el conjunto de plugins automáticamente.

## Requisitos

- Neovim >= 0.10.0 (0.11+ recomendado)
- Git >= 2.19
- Node.js >= 18
- Python >= 3.10
- Una Nerd Font
- ripgrep
- Herramientas opcionales como \`lazygit\`, \`zathura\` y \`typst\`

## Flujos de trabajo notables

### Código

Esta configuración está diseñada para que el desarrollo normal se sienta fluido: completado, formateo, navegación LSP, diagnósticos, Treesitter y una UI que se mantiene legible durante sesiones largas.

### LaTeX y Typst

Una de las partes más fuertes de la config es el trabajo con documentos:

- LaTeX con **VimTeX + Zathura**
- Typst con **vista previa en navegador**, soporte de sincronización, diagnósticos y formateo

Eso lo hace especialmente útil para notas de clase, reportes y escritos técnicos.

### Depuración y colaboración

- Soporte DAP para sesiones de depuración
- Soporte live-share para edición colaborativa
- Seguimiento personalizado de fechas límite a través de \`timelimit.nvim\`

## Estructura del proyecto

\`\`\`text
~/.config/nvim/
├── init.lua
├── lua/
│   ├── lazy_setup.lua
│   ├── polish.lua
│   ├── community.lua
│   └── plugins/
├── .stylua.toml
└── README.md
\`\`\`

## Enlaces

<ul>
	<li><a href="${repoUrl}">Repositorio</a></li>
	<li><a href="https://github.com/AstroNvim/AstroNvim">AstroNvim</a></li>
	<li><a href="https://neovim.io">Neovim</a></li>
</ul>`
		}
	};

	$: currentContent = content[$language];
</script>

<svelte:head>
	<title>Neovim Config - Caffeine Overflow</title>
	<meta
		name="description"
		content="My modular Neovim configuration built on AstroNvim v5, with LSP, Tree-sitter, automatic formatting, and lazy-loaded plugins."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-green-600">
			<Fa icon={faTerminal} class="mb-2 text-4xl text-green-600" />
			Neovim
		</p>
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="mx-auto max-w-3xl text-lg text-gray-600">
			{currentContent.excerpt}
		</p>
	</header>

	<div class="flex flex-wrap justify-center gap-2">
		<a href="https://neovim.io" aria-label="Neovim website" title="Neovim website">
			<img
				src="https://img.shields.io/badge/Neovim-0.11+-blueviolet.svg?style=flat-square&logo=Neovim&logoColor=white"
				alt="Neovim 0.11+ badge"
			/>
		</a>
		<a href="https://github.com/AstroNvim/AstroNvim" aria-label="AstroNvim website" title="AstroNvim website">
			<img
				src="https://img.shields.io/badge/AstroNvim-v5-orange?style=flat-square"
				alt="AstroNvim v5 badge"
			/>
		</a>
		<a href={repoUrl} aria-label="neovim-config repository" title="neovim-config repository">
			<img
				src="https://img.shields.io/badge/Made%20with-Lua-2C2D72.svg?style=flat-square&logo=lua&logoColor=white"
				alt="Made with Lua badge"
			/>
		</a>
	</div>

	<MarkdownRenderer content={currentContent.body} />
</div>
