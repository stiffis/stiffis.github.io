<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { language } from '$lib/i18n';

	const content = {
		en: {
			title: 'Tracking Meteorites with NASA Data',
			excerpt: 'An immersive experience focused on orbital trajectories, asteroid impacts, and telemetry in real time.',
			body: `# Developing an Asteroid Impact Simulator for NASA Space Apps Challenge 2025

This page presents the **proposal version** of *Meteor Madness*, a project created for the **NASA Space Apps Challenge 2025**. The idea is to build an **educational web tool** that simulates the impact of near-Earth asteroids and evaluates their environmental consequences using real data.

## Relevant Links

You can find both the project paper and the repository here:

- [GitHub Repository](https://github.com/stiffis/meteor-madness)
- [Project Paper](https://drive.google.com/file/d/1ONS11J5VxZOGDKFcBa9v2NHr3BCBCMbL/view?usp=drive_link)

## Project Motivation

The **risk of asteroid impacts** is rarely discussed, yet its potential consequences are enormous. Although large impacts are uncommon, they could still trigger tsunamis, earthquakes, and atmospheric disruption. The goal of this project is to make those risks more visible through an **interactive** and **educational** experience that can inform both the public and decision-makers.

## Project Goals

### General Goal

Develop an **interactive web application** capable of simulating the impact of near-Earth asteroids, helping users understand environmental consequences and explore mitigation strategies using real data from **NASA** and **USGS** APIs.

### Specific Goals

1. Simulate the trajectories of near-Earth asteroids and visualize potential impacts.
2. Calculate environmental consequences such as craters, tsunamis, and seismic activity.
3. Integrate **NASA** and **USGS** APIs for reliable scientific data.
4. Provide an interactive interface where users can modify asteroid parameters such as size, velocity, and entry angle.
5. Include an educational layer that explains the science behind asteroid impacts and mitigation.

## Project Methodology

### Development Approach

The project follows an **agile** and **iterative** approach so the prototype can evolve quickly. The work is split into two major phases: **trajectory simulation** and **impact effect visualization**.

- **Backend**: Flask processes asteroid data and runs impact simulations, integrating NASA and USGS APIs.
- **Frontend**: React powers the interface, **Three.js** handles 3D visualization, and **D3.js** is used for 2D charts and affected-area views.
- **Interactivity**: Users can change asteroid parameters and immediately observe the simulated results.

### Simulation Design

The system computes an asteroid's **orbital trajectory** using data from the **NASA NEO API**. It also simulates impact effects such as crater formation, tsunamis, and earthquakes using existing scientific models, all presented in an interface accessible to a general audience.

## Expected Results

The aim is to produce a **functional prototype** able to:

- Simulate and visualize asteroid trajectories
- Show impact effects in real time
- Teach users about asteroid science and mitigation strategies

## Conclusions

This project is not only technically interesting because it simulates asteroid impacts; it also has strong educational value. The tool is meant to help both scientists and the general public explore possible consequences and mitigation strategies. Over time, it could expand to cover more impact scenarios and more advanced asteroid deflection approaches.

This proposal is only the **first step** toward a more robust tool for **astronomical risk management**, but it already defines a clear direction for a compelling educational simulator.`
		},
		es: {
			title: 'Rastreando Meteoritos con Datos de la NASA',
			excerpt: 'Una experiencia inmersiva centrada en trayectorias orbitales, impactos de asteroides y telemetría en tiempo real.',
			body: `# Desarrollando un Simulador de Impacto de Asteroides para NASA Space Apps Challenge 2025

Esta página presenta la **versión propuesta** de *Meteor Madness*, un proyecto creado para el **NASA Space Apps Challenge 2025**. La idea es construir una **herramienta web educativa** que simule el impacto de asteroides cercanos a la Tierra y evalúe sus consecuencias ambientales usando datos reales.

## Enlaces Relevantes

Aquí puedes encontrar tanto el documento del proyecto como el repositorio:

- [Repositorio en GitHub](https://github.com/stiffis/meteor-madness)
- [Documento del Proyecto](https://drive.google.com/file/d/1ONS11J5VxZOGDKFcBa9v2NHr3BCBCMbL/view?usp=drive_link)

## Motivación del Proyecto

El **riesgo de impactos de asteroides** rara vez se discute, aunque sus consecuencias potenciales son enormes. Aunque los impactos grandes son poco comunes, aún podrían desencadenar tsunamis, terremotos y disrupción atmosférica. El objetivo de este proyecto es hacer esos riesgos más visibles a través de una experiencia **interactiva** y **educativa** que pueda informar tanto al público como a los tomadores de decisiones.

## Objetivos del Proyecto

### Objetivo General

Desarrollar una **aplicación web interactiva** capaz de simular el impacto de asteroides cercanos a la Tierra, ayudando a los usuarios a entender las consecuencias ambientales y explorar estrategias de mitigación usando datos reales de las APIs de **NASA** y **USGS**.

### Objetivos Específicos

1. Simular las trayectorias de asteroides cercanos a la Tierra y visualizar impactos potenciales.
2. Calcular consecuencias ambientales como cráteres, tsunamis y actividad sísmica.
3. Integrar las APIs de **NASA** y **USGS** para datos científicos confiables.
4. Proporcionar una interfaz interactiva donde los usuarios puedan modificar parámetros de asteroides como tamaño, velocidad y ángulo de entrada.
5. Incluir una capa educativa que explique la ciencia detrás de los impactos de asteroides y la mitigación.

## Metodología del Proyecto

### Enfoque de Desarrollo

El proyecto sigue un enfoque **ágil** e **iterativo** para que el prototipo pueda evolucionar rápidamente. El trabajo se divide en dos fases principales: **simulación de trayectorias** y **visualización de efectos de impacto**.

- **Backend**: Flask procesa los datos de asteroides y ejecuta simulaciones de impacto, integrando las APIs de NASA y USGS.
- **Frontend**: React impulsa la interfaz, **Three.js** maneja la visualización 3D, y **D3.js** se usa para gráficos 2D y vistas de áreas afectadas.
- **Interactividad**: Los usuarios pueden cambiar los parámetros del asteroide y observar inmediatamente los resultados simulados.

### Diseño de la Simulación

El sistema calcula la **trayectoria orbital** de un asteroide usando datos de la **NASA NEO API**. También simula efectos de impacto como formación de cráteres, tsunamis y terremotos usando modelos científicos existentes, todo presentado en una interfaz accesible para el público general.

## Resultados Esperados

El objetivo es producir un **prototipo funcional** capaz de:

- Simular y visualizar trayectorias de asteroides
- Mostrar efectos de impacto en tiempo real
- Enseñar a los usuarios sobre la ciencia de asteroides y estrategias de mitigación

## Conclusiones

Este proyecto no solo es interesante técnicamente porque simula impactos de asteroides; también tiene un fuerte valor educativo. La herramienta está diseñada para ayudar tanto a científicos como al público general a explorar posibles consecuencias y estrategias de mitigación. Con el tiempo, podría expandirse para cubrir más escenarios de impacto y enfoques más avanzados de desviación de asteroides.

Esta propuesta es solo el **primer paso** hacia una herramienta más robusta para la **gestión de riesgos astronómicos**, pero ya define una dirección clara para un simulador educativoconvincente.`
		}
	};

	$: currentContent = content[$language];
</script>

<svelte:head>
	<title>Meteor Madness - Caffeine Overflow</title>
	<meta
		name="description"
		content="A NASA-inspired educational prototype for simulating asteroid impacts, orbital trajectories, and environmental effects."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-blue-800">
			<img src="/images/nasa-logo.svg" alt="NASA logo" class="h-10" />
			Meteor Madness
		</p>
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="text-lg text-gray-600">
			{currentContent.excerpt}
		</p>
	</header>

	<div class="flex flex-wrap justify-center gap-2">
		<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
		<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
		<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
		<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
		<img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
		<img src="https://img.shields.io/badge/D3.js-F9A826?style=for-the-badge&logo=d3.js&logoColor=white" alt="D3.js" />
		<img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="MIT license" />
	</div>

	<MarkdownRenderer content={currentContent.body} />
</div>
