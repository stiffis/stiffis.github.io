<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { Fa } from 'svelte-fa';
	import { faSortNumericUp } from '@fortawesome/free-solid-svg-icons';
	import { language } from '$lib/i18n';

	const content = {
		en: {
			title: 'Programming I: Final Project (2024-1)',
			excerpt: 'A first-semester project at UTEC that classifies handwritten digits using the Scikit-Learn Digit dataset.',
			body: `## Installation

1. Clone the project
2. Create a virtual environment in the root directory with: \`python -m venv env\`
3. Activate the virtual environment:
   - Linux/Mac: \`source env/bin/activate\`
   - Windows: \`env\\Scripts\\activate\`
4. Install the dependencies with: \`pip install -r requirements.txt\`

## Main Commands to Navigate Git Bash

- Start the local repository: \`git init\`
- Change the address of the folder/directory you are in: \`cd 'name of the directory'\`
- Changes to the previous folder/directory address: \`cd ...\`
- Check the status of the local repository: \`git status\`
- Start tracking files: \`git add 'filename'\`
- Make a screenshot or a save of what has been done so far: \`git commit -m 'descriptive message'\`
- Push the changes to GitHub: \`git push origin 'name of your branch'\`
- Get changes from GitHub: \`git pull origin 'name of branch'\`
- Create new branch: \`git branch 'name of the branch'\`
- Move between branches: \`git checkout 'name of branch'\`
- List of existing branches: \`git branch\`
- Merge branches with the current branch: \`git merge 'name of branch to be merged'\`
- Fetch all branches from the remote repository: \`git fetch\`
- Remove local branch: \`git branch -d 'name of branch to remove'\`
- Remove a branch from GitHub: \`git push origin --delete 'name of the branch'\`
- Show commit history: \`git log\`
- Show the differences between commits: \`git diff\`
- Deactivate the virtual environment: \`deactivate\`
- Add more dependencies to requirements.txt: \`pip freeze > requirements.txt\``
		},
		es: {
			title: 'Programación I: Proyecto Final (2024-1)',
			excerpt: 'Un proyecto de primer semestre en UTEC que clasifica dígitos escritos a mano usando el dataset de Dígitos de Scikit-Learn.',
			body: `## Instalación

1. Clonar el proyecto
2. Crear un entorno virtual en el directorio raíz con: \`python -m venv env\`
3. Activar el entorno virtual:
   - Linux/Mac: \`source env/bin/activate\`
   - Windows: \`env\\Scripts\\activate\`
4. Instalar las dependencias con: \`pip install -r requirements.txt\`

## Comandos Principales para Navegar Git Bash

- Iniciar el repositorio local: \`git init\`
- Cambiar la dirección de la carpeta/directorio donde estás: \`cd 'nombre del directorio'\`
- Cambiar a la dirección anterior de carpeta/directorio: \`cd ...\`
- Verificar el estado del repositorio local: \`git status\`
- Empezar a rastrear archivos: \`git add 'nombre del archivo'\`
- Hacer una captura de pantalla o guardar lo que se ha hecho hasta ahora: \`git commit -m 'mensaje descriptivo'\`
- Empujar los cambios a GitHub: \`git push origin 'nombre de tu rama'\`
- Obtener cambios de GitHub: \`git pull origin 'nombre de rama'\`
- Crear nueva rama: \`git branch 'nombre de la rama'\`
- Moverse entre ramas: \`git checkout 'nombre de rama'\`
- Listar ramas existentes: \`git branch\`
- Fusionar ramas con la rama actual: \`git merge 'nombre de rama a fusionar'\`
- Traer todas las ramas del repositorio remoto: \`git fetch\`
- Eliminar rama local: \`git branch -d 'nombre de rama a eliminar'\`
- Eliminar una rama de GitHub: \`git push origin --delete 'nombre de la rama'\`
- Mostrar historial de commits: \`git log\`
- Mostrar las diferencias entre commits: \`git diff\`
- Desactivar el entorno virtual: \`deactivate\`
- Agregar más dependencias a requirements.txt: \`pip freeze > requirements.txt\``
		}
	};

	$: currentContent = content[$language];
</script>

<svelte:head>
	<title>Digit Classification - Caffeine Overflow</title>
	<meta
		name="description"
		content="A university project for classifying handwritten digits using Python and the Scikit-Learn dataset."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 text-teal-600 font-semibold uppercase tracking-wide">
			<Fa icon={faSortNumericUp} class="text-teal-600 text-4xl mb-2" />
			Digit Classification
		</p>
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="text-lg text-gray-600">
			{currentContent.excerpt}
		</p>
	</header>

	<div class="flex justify-center flex-wrap gap-2">
		<img src="https://img.shields.io/badge/os-linux-brightgreen" alt="Linux support badge" />
		<img src="https://img.shields.io/badge/os-mac-brightgreen" alt="macOS support badge" />
		<img src="https://img.shields.io/badge/os-windows-yellowgreen" alt="Windows support badge" />
	</div>

	<div class="flex justify-center flex-wrap gap-2">
		<a href="https://github.com/stiffis" aria-label="Maintainer stiffis on GitHub" title="Maintainer stiffis on GitHub">
			<img src="https://img.shields.io/badge/maintainer-stiffis-blue" alt="Maintainer stiffis badge" />
		</a>
	</div>

	<MarkdownRenderer content={currentContent.body} />
</div>
