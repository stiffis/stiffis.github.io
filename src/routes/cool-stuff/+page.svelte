<script>
	import { Fa } from 'svelte-fa';
	import {
		faBook,
		faFilm,
		faProjectDiagram,
		faCode,
		faFileCode,
		faTerminal,
		faTable,
		faBrain,
		faUsers,
		faGraduationCap,
		faTableCells,
		faSortNumericUp
	} from '@fortawesome/free-solid-svg-icons';
</script>

<svelte:head>
	<title>Cool Stuff - Caffeine Overflow</title>
	<meta name="description" content="Projects, tools, and cool stuff I want to share" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Cool Stuff</h1>
		<p class="text-lg text-gray-600">Projects, tools, and cool stuff I want to share</p>
	</header>

	<!-- Section: UNIVERSITY -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">UNIVERSITY</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Class Notes -->
			<a href="/cool-stuff/class-notes" class="block">
				<div
					class="card-terminal bg-blue-100 rounded-lg aspect-[3/4] hover:bg-blue-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faBook} class="text-blue-600 text-4xl mb-2" />
					<span class="text-sm font-semibold text-blue-800">Class Notes</span>
				</div>
			</a>
			<!-- IMDB-- -->
			<a href="/cool-stuff/imdb" class="block">
				<div
					class="card-terminal bg-yellow-100 rounded-lg aspect-[3/4] hover:bg-yellow-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faFilm} class="text-yellow-600 text-4xl mb-2" />
					<span class="text-sm font-semibold text-yellow-800">IMDB--</span>
				</div>
			</a>
			<!-- project red black tree -->
			<a href="/cool-stuff/red-black-tree" class="block">
				<div
					class="card-terminal bg-red-100 rounded-lg aspect-[3/4] hover:bg-red-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<img src="/images/rbt.svg" alt="Red Black Tree Logo" class="h-12 mb-2" />
					<span class="text-sm font-semibold text-red-800">Red Black Tree</span>
				</div>
			</a>
		</div>
	</section>

	<!-- Section: CONFIGS -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">CONFIGS</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Neovim -->
			<a href="/cool-stuff/neovim" class="block">
				<div
					class="card-terminal bg-green-100 rounded-lg aspect-[3/4] hover:bg-green-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<img src="/images/neovim.svg" alt="Neovim Logo" class="h-12 mb-2" />
					<span class="text-sm font-semibold text-green-800">Neovim</span>
				</div>
			</a>
			<!-- Dotfiles -->
			<a href="/cool-stuff/dotfiles" class="block">
				<div
					class="card-terminal bg-gray-100 rounded-lg aspect-[3/4] hover:bg-gray-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faFileCode} class="text-gray-800 text-4xl mb-2" />
					<span class="text-sm font-semibold text-gray-900">Dotfiles</span>
				</div>
			</a>
		</div>
	</section>

	<!-- Section: PROJECTS -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">PROJECTS</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- PONGAI -->
			<a href="/cool-stuff/pongai" class="block">
				<div
					class="card-terminal bg-indigo-100 rounded-lg aspect-[3/4] hover:bg-indigo-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faBrain} class="text-indigo-600 text-4xl mb-2" />
					<span class="text-sm font-semibold text-indigo-800">PONGAI</span>
				</div>
			</a>
			<!-- uniTui -->
			<a href="/cool-stuff/unitui" class="block">
				<div
					class="card-terminal bg-purple-100 rounded-lg aspect-[3/4] hover:bg-purple-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faTerminal} class="text-purple-600 text-4xl mb-2" />
					<span class="text-sm font-semibold text-purple-800">uniTui</span>
				</div>
			</a>
			<!-- digit-classification -->
			<a href="/cool-stuff/digit-classification" class="block">
				<div
					class="card-terminal bg-teal-100 rounded-lg aspect-[3/4] hover:bg-teal-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faSortNumericUp} class="text-teal-600 text-4xl mb-2" />
					<span class="text-sm font-semibold text-teal-800">Digit Classification</span>
				</div>
			</a>
			<!-- Meteor-Madness -->
			<a href="/cool-stuff/meteor-madness" class="block">
				<div
					class="card-terminal bg-blue-100 rounded-lg aspect-[3/4] hover:bg-blue-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<img src="/images/nasa-logo.svg" alt="NASA Logo" class="h-12 mb-2" />
					<span class="text-sm font-semibold text-blue-800">Meteor Madness</span>
				</div>
			</a>
		</div>
	</section>

	<!-- Section: RESEARCH -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">RESEARCH</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Game Life Conway -->
			<a href="/cool-stuff/game-life-conway" class="block">
				<div
					class="card-terminal bg-orange-100 rounded-lg aspect-[3/4] hover:bg-orange-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faTableCells} class="text-orange-600 text-4xl mb-2" />
					<span class="text-sm font-semibold text-orange-800">Game Life Conway</span>
				</div>
			</a>
			<!-- Prisioner's Dilema -->
			<a href="/cool-stuff/prisioners-dilema" class="block">
				<div
					class="card-terminal bg-cyan-100 rounded-lg aspect-[3/4] hover:bg-cyan-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4"
				>
					<Fa icon={faUsers} class="text-cyan-600 text-4xl mb-2" />
					<span class="text-sm font-semibold text-cyan-800">Prisioner's Dilema</span>
				</div>
			</a>
		</div>
	</section>
</div>