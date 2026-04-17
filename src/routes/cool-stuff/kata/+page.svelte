<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { language } from '$lib/i18n';

	const content = {
		en: {
			title: 'KATA',
			excerpt: '"Slow is smooth. Smooth is fast." A minimalist typing trainer for the terminal, built for developers.',
			body: `## Overview

KATA is a terminal-based typing trainer inspired by martial arts practice. Instead of only aiming for speed, it focuses on repetition, form, and consistency so typing becomes instinctive during coding sessions.

It is implemented in Go and uses the Charm stack for a responsive TUI experience.

## What is KATA?

From the original README, KATA is explicitly inspired by martial arts "kata" practice: repeating fundamental movements until they become natural and effortless. The same idea is applied to typing for coding, where the goal is not only raw speed, but smooth and accurate execution.

It also borrows visual inspiration from Monkeytype while keeping a terminal-first workflow.

## Features

- Multi-language support (English, Spanish, French, German)
- Developer mode with real code syntax practice (Go, Rust, Python, C++, JavaScript)
- WPM and accuracy tracking
- Weak-key detection and keyboard heatmap
- Theme support (Catppuccin, Nord, Dracula, Rose Pine, and more)
- File loading to practice custom text/code
- Zen mode for distraction-free sessions

## Why it is useful for developers

- It trains muscle memory directly on programming syntax
- It makes accuracy a first-class metric instead of only speed
- It gives practical feedback through weak-key analysis and heatmaps
- It fits terminal-based workflows without context switching

## Installation

\`\`\`bash
git clone https://github.com/stiffis/kata.git
cd kata
chmod +x install.sh
./install.sh
\`\`\`

## Usage

- \`kata\` → opens interactive menu
- \`kata --file <path>\` → practice with a file
- \`kata --stats\` → review progress
- \`kata --theme dracula\` → quick theme switch

## Stack

- Go (1.21+)
- Bubble Tea / Lipgloss (Charm stack)

## License

KATA is released under the GPL-3.0 license.

## Links

- [Repository](https://github.com/stiffis/kata)
- [Go](https://golang.org/)
- [Bubble Tea](https://github.com/charmbracelet/bubbletea)`
		},
		es: {
			title: 'KATA',
			excerpt: '"Lento es suave. Suave es rápido." Un entrenador de escritura minimalista para la terminal, construido para desarrolladores.',
			body: `## Visión General

KATA es un entrenador de escritura basado en terminal inspirado en la práctica de artes marciales. En lugar de solo apuntar a la velocidad, se enfoca en repetición, forma y consistencia para que escribir se vuelvainstintivo durante las sesiones de código.

Está implementado en Go y usa el Charm stack para una experiencia TUI responsiva.

## Qué es KATA?

Según el README original, KATA está explícitamente inspirado en la práctica de "kata" de artes marciales: repetir movimientos fundamentales hasta que se vuelvan naturales y sin esfuerzo. La misma idea se aplica a escribir para programar, donde el objetivo no es solo velocidad bruta, sino ejecución suave y precisa.

También toma inspiración visual de Monkeytype mientras mantiene un flujo de trabajo centrado en la terminal.

## Características

- Soporte multi-idioma (Inglés, Español, Francés, Alemán)
- Modo desarrollador con práctica de sintaxis de código real (Go, Rust, Python, C++, JavaScript)
- Seguimiento de PPM y precisión
- Detección de teclas débiles y mapa de calor del teclado
- Soporte de temas (Catppuccin, Nord, Dracula, Rose Pine, y más)
- Carga de archivos para practicar texto/código personalizado
- Modo Zen para sesiones sin distracciones

## Por qué es útil para desarrolladores

- Entrena la memoria muscular directamente en sintaxis de programación
- Hace de la precisión una métrica de primera clase en lugar de solo la velocidad
- Da retroalimentación práctica a través de análisis de teclas débiles y mapas de calor
- Encaja en flujos de trabajo basados en terminal sin cambiar de contexto

## Instalación

\`\`\`bash
git clone https://github.com/stiffis/kata.git
cd kata
chmod +x install.sh
./install.sh
\`\`\`

## Uso

- \`kata\` → abre menú interactivo
- \`kata --file <ruta>\` → practicar con un archivo
- \`kata --stats\` → revisar progreso
- \`kata --theme dracula\` → cambio rápido de tema

## Stack

- Go (1.21+)
- Bubble Tea / Lipgloss (Charm stack)

## Licencia

KATA está publicado bajo la licencia GPL-3.0.

## Enlaces

- [Repositorio](https://github.com/stiffis/kata)
- [Go](https://golang.org/)
- [Bubble Tea](https://github.com/charmbracelet/bubbletea)`
		}
	};

	$: currentContent = content[$language];
</script>

<svelte:head>
	<title>KATA - Caffeine Overflow</title>
	<meta
		name="description"
		content="KATA is a terminal typing trainer built in Go with Bubble Tea, focused on developer practice, speed, and accuracy."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<img src="/images/kata-logo.png" alt="KATA logo" class="mx-auto h-28 w-28 object-contain" />
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="mx-auto max-w-3xl text-lg text-gray-600">
			{currentContent.excerpt}
		</p>
		<div class="flex flex-wrap justify-center gap-2">
			<a href="https://golang.org/" aria-label="Go website" title="Go website">
				<img
					src="https://img.shields.io/badge/Go-1.21+-00ADD8?style=flat-square&logo=go&logoColor=white"
					alt="Go 1.21+ badge"
				/>
			</a>
			<a
				href="https://github.com/charmbracelet/bubbletea"
				aria-label="Bubble Tea website"
				title="Bubble Tea website"
			>
				<img
					src="https://img.shields.io/badge/UI-Charm%20Stack-FF4A00?style=flat-square"
					alt="Charm Stack badge"
				/>
			</a>
			<a
				href="https://github.com/stiffis/kata/blob/main/LICENSE"
				aria-label="GPL-3.0 license"
				title="GPL-3.0 license"
			>
				<img
					src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=flat-square"
					alt="GPL-3.0 license badge"
				/>
			</a>
		</div>
	</header>

	<MarkdownRenderer content={currentContent.body} />
</div>
