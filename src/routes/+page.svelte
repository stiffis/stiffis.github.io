<svelte:head>
	<title>Caffeine Overflow</title>
	<meta name="description" content="Sitio personal de desarrollo y tecnología" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16">
	<div class="text-center mb-16">
		<p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
			Bienvenido a mi espacio personal donde exploro el desarrollo de software, 
			tecnología y comparto mis experiencias como desarrollador.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/blog"
				class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
			>
				Leer Blog
			</a>
			<a
				href="/contact"
				class="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
			>
				Contacto
			</a>
		</div>
	</div>

	<div class="grid md:grid-cols-3 gap-8">
		<div class="text-center p-6">
			<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
				<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
			</div>
			<h3 class="text-xl font-semibold text-gray-900 mb-2">Desarrollo Web</h3>
			<p class="text-gray-600">Experiencia en tecnologías modernas como SvelteKit, TypeScript y más.</p>
		</div>

		<div class="text-center p-6">
			<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
				<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
				</svg>
			</div>
			<h3 class="text-xl font-semibold text-gray-900 mb-2">Innovación</h3>
			<p class="text-gray-600">Siempre explorando nuevas tecnologías y mejores formas de resolver problemas.</p>
		</div>

		<div class="text-center p-6">
			<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
				<svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
				</svg>
			</div>
			<h3 class="text-xl font-semibold text-gray-900 mb-2">Aprendizaje</h3>
			<p class="text-gray-600">Compartiendo conocimiento y experiencias a través del blog y proyectos.</p>
		</div>
	</div>
</div>
