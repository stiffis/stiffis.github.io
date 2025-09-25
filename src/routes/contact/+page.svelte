<script lang="ts">
	import { Fa } from 'svelte-fa';
	import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
</script>

<svelte:head>
	<title>Contact - Caffeine Overflow</title>
	<meta name="description" content="Get in touch with me for projects, collaborations, or inquiries" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
		<p class="text-lg text-gray-600">I'd love to hear from you!</p>
	</header>

	<div class="space-y-8">
		<!-- Contact Information -->
		<div>
			<h2 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
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
						<p class="text-sm font-medium text-gray-900">Location</p>
						<p class="text-gray-600">Lima, Peru</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Social Media -->
		<div>
			<h3 class="text-2xl font-semibold text-gray-900 mb-6">Follow me on</h3>
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
					href="https://www.linkedin.com/in/steve-andy-ildefonso-santos-936106323/"
					target="_blank"
					rel="noopener noreferrer"
					class="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
				>
					<Fa icon={faLinkedin} class="text-white text-xl" />
				</a>
				<a
					href="https://x.com/Stiff_GLive"
					target="_blank"
					rel="noopener noreferrer"
					class="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
				>
					<Fa icon={faTwitter} class="text-white text-xl" />
				</a>
			</div>
		</div>

	</div>
</div>
