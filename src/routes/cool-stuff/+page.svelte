<script>
	import { resolve } from '$app/paths';
	import { Fa } from 'svelte-fa';
	import {
		faBook,
		faFilm,
		faFileCode,
		faTerminal,
		faBrain,
		faUsers,
		faTableCells,
		faSortNumericUp
	} from '@fortawesome/free-solid-svg-icons';
</script>

<svelte:head>
	<title>Cool Stuff - Caffeine Overflow</title>
	<meta name="description" content="Projects, tools, and cool stuff I want to share" />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Cool Stuff</h1>
		<p class="text-lg text-gray-600">Projects, tools, and cool stuff I want to share</p>
	</header>

	<!-- Section: UNIVERSITY -->
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold text-gray-900">UNIVERSITY</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Class Notes -->
			<a href={resolve('/cool-stuff/class-notes')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-blue-100 p-4 transition-colors hover:bg-blue-200"
				>
					<Fa icon={faBook} class="mb-2 text-4xl text-blue-600" />
					<span class="text-sm font-semibold text-blue-800">Class Notes</span>
				</div>
			</a>
			<!-- IMDB-- -->
			<a href={resolve('/cool-stuff/imdb')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-yellow-100 p-4 transition-colors hover:bg-yellow-200"
				>
					<Fa icon={faFilm} class="mb-2 text-4xl text-yellow-600" />
					<span class="text-sm font-semibold text-yellow-800">IMDB--</span>
				</div>
			</a>
			<!-- project red black tree -->
			<a href={resolve('/cool-stuff/red-black-tree')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-red-100 p-4 transition-colors hover:bg-red-200"
				>
					<img src="/images/rbt.svg" alt="Red Black Tree Logo" class="mb-2 h-12" />
					<span class="text-sm font-semibold text-red-800">Red Black Tree</span>
				</div>
			</a>
		</div>
	</section>

	<!-- Section: CONFIGS -->
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold text-gray-900">CONFIGS</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Neovim -->
			<a href={resolve('/cool-stuff/neovim')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-green-100 p-4 transition-colors hover:bg-green-200"
				>
					<img src="/images/neovim.svg" alt="Neovim Logo" class="mb-2 h-12" />
					<span class="text-sm font-semibold text-green-800">Neovim</span>
				</div>
			</a>
			<!-- Dotfiles -->
			<a href={resolve('/cool-stuff/dotfiles')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-100 p-4 transition-colors hover:bg-gray-200"
				>
					<Fa icon={faFileCode} class="mb-2 text-4xl text-gray-800" />
					<span class="text-sm font-semibold text-gray-900">Dotfiles</span>
				</div>
			</a>
		</div>
	</section>

	<!-- Section: PROJECTS -->
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold text-gray-900">PROJECTS</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- PONGAI -->
			<a href={resolve('/cool-stuff/pongai')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-indigo-100 p-4 transition-colors hover:bg-indigo-200"
				>
					<Fa icon={faBrain} class="mb-2 text-4xl text-indigo-600" />
					<span class="text-sm font-semibold text-indigo-800">PONGAI</span>
				</div>
			</a>
			<!-- uniTui -->
			<a href={resolve('/cool-stuff/unitui')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-purple-100 p-4 transition-colors hover:bg-purple-200"
				>
					<Fa icon={faTerminal} class="mb-2 text-4xl text-purple-600" />
					<span class="text-sm font-semibold text-purple-800">uniTui</span>
				</div>
			</a>
			<!-- digit-classification -->
			<a href={resolve('/cool-stuff/digit-classification')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-teal-100 p-4 transition-colors hover:bg-teal-200"
				>
					<Fa icon={faSortNumericUp} class="mb-2 text-4xl text-teal-600" />
					<span class="text-sm font-semibold text-teal-800">Digit Classification</span>
				</div>
			</a>
			<!-- Meteor-Madness -->
			<a href={resolve('/cool-stuff/meteor-madness')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-blue-100 p-4 transition-colors hover:bg-blue-200"
				>
					<img src="/images/nasa-logo.svg" alt="NASA Logo" class="mb-2 h-12" />
					<span class="text-sm font-semibold text-blue-800">Meteor Madness</span>
				</div>
			</a>
		</div>
	</section>

	<!-- Section: RESEARCH -->
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold text-gray-900">RESEARCH</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Game Life Conway -->
			<a href={resolve('/cool-stuff/game-life-conway')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-orange-100 p-4 transition-colors hover:bg-orange-200"
				>
					<Fa icon={faTableCells} class="mb-2 text-4xl text-orange-600" />
					<span class="text-sm font-semibold text-orange-800">Game Life Conway</span>
				</div>
			</a>
			<!-- Prisioner's Dilema -->
			<a href={resolve('/cool-stuff/prisioners-dilema')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-cyan-100 p-4 transition-colors hover:bg-cyan-200"
				>
					<Fa icon={faUsers} class="mb-2 text-4xl text-cyan-600" />
					<span class="text-sm font-semibold text-cyan-800">Prisioner's Dilema</span>
				</div>
			</a>
			<!-- Hamming Code -->
			<a href={resolve('/cool-stuff/hamming-code')} class="block">
				<div
					class="card-terminal flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-lg bg-green-100 p-4 transition-colors hover:bg-green-200"
				>
					<img src="/images/err-corr.svg" alt="Hamming Code Logo" class="mb-2 h-12" />
					<span class="text-sm font-semibold text-green-800">Hamming Code</span>
				</div>
			</a>
		</div>
	</section>
</div>
