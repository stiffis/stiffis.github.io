<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { language } from '$lib/i18n';
	import logo from './logo.png';

	const content = {
		en: {
			title: 'Programming III: Final Project (2025-0)',
			excerpt: 'A CLI application for searching movies, reading synopses, browsing genres, and managing personal watch lists.',
			body: `## Introduction

### Goal

The goal of **IMDb--** is to build a movie-focused platform centered on **searching and viewing movie synopses**. Beyond the technical challenge, the project was also used as a workflow exercise, simulating a more realistic development environment with fixed meetings, progress sharing, weekly planning, and feedback sessions.

### Motivation

The team was motivated by the complexity of the problem. The project required data structures, algorithms, parallel programming, and teamwork, which helped improve both technical depth and communication skills.

### Scope

IMDb-- supports searches by prefix or keyword, displays synopses and genres, and lets users keep a **liked movies** list and a **watch later** list.

## Requirements

### Software Requirements

- **C++ compiler**: g++ (GCC) version 11.2.0 or later or clang++ version 13.0.0 or later
- **Operating systems**: Linux (Ubuntu, Fedora, Arch, etc.), macOS, Windows

### Hardware Requirements

No special hardware is required. The program is not especially demanding in terms of resources.

## Installation

If a C++ compiler is not installed yet, it can be installed with: \`sudo apt-get install g++\`

Clone the repository and move into the project directory:

\`\`\`bash
git clone <url>
cd imdb--/
\`\`\`

Compile the project with: \`g++ -o main main.cpp\`

Run it with: \`./main\`

## User Guide

When the program starts, the main menu includes the following options:

\`\`\`
You have no movies in Likes.
You have no movies in Watch Later.

=== Main Menu ===
1. View Watch Later movies
2. View liked movies
3. Search movies
4. View search history
5. Save state
6. Restore state
7. Recommended movies
0. Exit
--------------------------
| Select an option:      |
--------------------------
\`\`\`

### Main Actions

**View Watch Later movies**: Shows the movies saved in the *Watch Later* list. If the list is empty, the program displays a message.

**View liked movies**: Shows the movies saved in the *Likes* list. If the list is empty, the program displays a message.

**Search movies**: The user can search by full title or partial keyword. If there are no matches, the program reports it. If matches are found, the user can optionally filter them by genre.

Results are shown with pagination and extra options: \`n\` (next page), \`g\` (filter by genre), \`r\` (remove filter), \`0\` (exit).

**View search history**: Shows previous searches. If there is no history, the program reports it.

**Save state**: Saves the current application state.

**Restore state**: Restores the previously saved application state.

**Recommended movies**: Displays recommended movies. If there are none, the program shows a message.

**Exit**: Leaves the program.

## Documentation

### Class Diagram

The class diagram shows the program structure and the relationships between its classes: [View Class Diagram](https://drive.google.com/file/d/1_gTeblcuOoYWGjuNLnMBjl0BbXucvRg_/view?usp=sharing)

### Data Cleaning

The dataset was cleaned using **R**. The process included loading libraries, loading the dataset, defining a text-cleaning function to remove non-Latin characters and unnecessary symbols, applying the function, and saving the cleaned data.`
		},
		es: {
			title: 'Programación III: Proyecto Final (2025-0)',
			excerpt: 'Una aplicación CLI para buscar películas, leer sinopsis, explorar géneros y gestionar listas personales de películas para ver.',
			body: `## Introducción

### Objetivo

El objetivo de **IMDb--** es construir una plataforma centrada en películas enfocada en **buscar y ver sinopsis de películas**. Más allá del desafío técnico, el proyecto también se usó como ejercicio de flujo de trabajo, simulando un ambiente de desarrollo más realista con reuniones fijas, compartición de progreso, planificación semanal y sesiones de retroalimentación.

### Motivación

El equipo fue motivado por la complejidad del problema. El proyecto requería estructuras de datos, algoritmos, programación paralela y trabajo en equipo, lo cual ayudó a mejorar tanto la profundidad técnica como las habilidades de comunicación.

### Alcance

IMDb-- soporta búsquedas por prefijo o palabra clave, muestra sinopsis y géneros, y permite a los usuarios mantener una lista de **películas favoritas** y una lista de **ver después**.

## Requisitos

### Requisitos de Software

- **Compilador C++**: g++ (GCC) versión 11.2.0 o posterior o clang++ versión 13.0.0 o posterior
- **Sistemas operativos**: Linux (Ubuntu, Fedora, Arch, etc.), macOS, Windows

### Requisitos de Hardware

No se requiere hardware especial. El programa no es especialmente exigente en términos de recursos.

## Instalación

Si aún no tienes un compilador de C++ instalado, puedes hacerlo con: \`sudo apt-get install g++\`

Clona el repositorio y muévete al directorio del proyecto:

\`\`\`bash
git clone <url>
cd imdb--/
\`\`\`

Compila el proyecto con: \`g++ -o main main.cpp\`

Ejecútalo con: \`./main\`

## Guía de Usuario

Cuando el programa inicia, el menú principal incluye las siguientes opciones:

\`\`\`
No tienes películas en Favoritos.
No tienes películas en Ver Después.

=== Menú Principal ===
1. Ver películas en Ver Después
2. Ver películas favoritas
3. Buscar películas
4. Ver historial de búsqueda
5. Guardar estado
6. Restaurar estado
7. Películas recomendadas
0. Salir
--------------------------
| Selecciona una opción:  |
--------------------------
\`\`\`

### Acciones Principales

**Ver películas en Ver Después**: Muestra las películas guardadas en la lista *Ver Después*. Si la lista está vacía, el programa muestra un mensaje.

**Ver películas favoritas**: Muestra las películas guardadas en la lista *Favoritos*. Si la lista está vacía, el programa muestra un mensaje.

**Buscar películas**: El usuario puede buscar por título completo o palabra clave parcial. Si no hay coincidencias, el programa lo reporta. Si se encuentran coincidencias, el usuario puede opcionalmente filtrarlas por género.

Los resultados se muestran con paginación y opciones extra: \`n\` (siguiente página), \`g\` (filtrar por género), \`r\` (quitar filtro), \`0\` (salir).

**Ver historial de búsqueda**: Muestra búsquedas anteriores. Si no hay historial, el programa lo reporta.

**Guardar estado**: Guarda el estado actual de la aplicación.

**Restaurar estado**: Restaura el estado previamente guardado de la aplicación.

**Películas recomendadas**: Muestra películas recomendadas. Si no hay ninguna, el programa muestra un mensaje.

**Salir**: Sale del programa.

## Documentación

### Diagrama de Clases

El diagrama de clases muestra la estructura del programa y las relaciones entre sus clases: [Ver Diagrama de Clases](https://drive.google.com/file/d/1_gTeblcuOoYWGjuNLnMBjl0BbXucvRg_/view?usp=sharing)

### Limpieza de Datos

El dataset fue limpiado usando **R**. El proceso incluyó cargar librerías, cargar el dataset, definir una función de limpieza de texto para remover caracteres no latinos y símbolos innecesarios, aplicar la función, y guardar los datos limpios.`
		}
	};

	$: currentContent = content[$language];
</script>

<svelte:head>
	<title>IMDb-- - Caffeine Overflow</title>
	<meta
		name="description"
		content="A university CLI project for searching movies, reading synopses, and filtering by genre."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 font-semibold tracking-wide text-yellow-600 uppercase">
			IMDb--
		</p>
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="text-lg text-gray-600">
			{currentContent.excerpt}
		</p>
	</header>

	<div class="flex flex-wrap justify-center gap-2">
		<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome badge" />
		<img src="https://img.shields.io/badge/os-linux-brightgreen" alt="Linux support badge" />
		<img src="https://img.shields.io/badge/os-mac-brightgreen" alt="macOS support badge" />
		<img src="https://img.shields.io/badge/os-windows-yellowgreen" alt="Windows support badge" />
	</div>

	<div class="flex flex-wrap justify-center gap-2">
		<a href="https://github.com/AntoMGB1" aria-label="Lead marco on GitHub" title="Lead marco on GitHub">
			<img src="https://img.shields.io/badge/lead-marco-lightblue" alt="Lead marco badge" />
		</a>
		<a href="https://github.com/stiffis" aria-label="Maintainer stiffis on GitHub" title="Maintainer stiffis on GitHub">
			<img src="https://img.shields.io/badge/maintainer-stiffis-blue" alt="Maintainer stiffis badge" />
		</a>
		<a href="https://github.com/Vasco2510" aria-label="Maintainer abel on GitHub" title="Maintainer abel on GitHub">
			<img src="https://img.shields.io/badge/maintainer-abel-blue" alt="Maintainer abel badge" />
		</a>
	</div>

	<div class="text-center mb-8">
		<img src={logo} alt="IMDb-- logo" />
	</div>

	<MarkdownRenderer content={currentContent.body} />
</div>
