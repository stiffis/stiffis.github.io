<script lang="ts">
	import { Fa } from 'svelte-fa';
	import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
</script>

<svelte:head>
	<title>Contacto - Caffeine Overflow</title>
	<meta name="description" content="Ponte en contacto conmigo para proyectos, colaboraciones o consultas" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
		<p class="text-lg text-gray-600">¡Me encantaría escucharte!</p>
	</header>

	<div class="space-y-8">
		<!-- Contact Information -->
		<div>
			<h2 class="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h2>
			<div class="space-y-4">
				<div class="flex items-center">
					<div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
						<Fa icon={faEnvelope} class="text-blue-600" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-900">Email</p>
						<a href="mailto:steve.ildefonso@utec.edu.pe" class="text-gray-600 hover:text-blue-600 transition-colors">
							steve.ildefonso@utec.edu.pe
						</a>
					</div>
				</div>

				<div class="flex items-center">
					<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
						<Fa icon={faMapMarkerAlt} class="text-green-600" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-900">Ubicación</p>
						<p class="text-gray-600">Lima, Perú</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Social Media -->
		<div>
			<h3 class="text-2xl font-semibold text-gray-900 mb-6">Sígueme en</h3>
			<div class="flex space-x-4">
				<a
					href="https://github.com/stiffis"
					target="_blank"
					rel="noopener noreferrer"
					class="w-12 h-12 bg-gray-900 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
				>
					<Fa icon={faGithub} class="text-white text-xl" />
				</a>
				<a
					href="https://linkedin.com/in/your-profile"
					target="_blank"
					rel="noopener noreferrer"
					class="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
				>
					<Fa icon={faLinkedin} class="text-white text-xl" />
				</a>
				<a
					href="https://twitter.com/your-handle"
					target="_blank"
					rel="noopener noreferrer"
					class="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
				>
					<Fa icon={faTwitter} class="text-white text-xl" />
				</a>
			</div>
		</div>

		<!-- Available for -->
		<div>
			<h3 class="text-2xl font-semibold text-gray-900 mb-6">Disponible para</h3>
			<ul class="space-y-2 text-gray-600">
				<li class="flex items-center">
					<span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
					Desarrollo de aplicaciones web
				</li>
				<li class="flex items-center">
					<span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
					Consultoría técnica
				</li>
				<li class="flex items-center">
					<span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
					Colaboraciones en proyectos
				</li>
				<li class="flex items-center">
					<span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
					Mentoring y código review
				</li>
			</ul>
		</div>
	</div>
</div>
