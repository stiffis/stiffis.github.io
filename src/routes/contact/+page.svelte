<script lang="ts">
	import { Fa } from 'svelte-fa';
	import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t.contact.title} - Caffeine Overflow</title>
	<meta
		name="description"
		content="Get in touch with me for projects, collaborations, or inquiries"
	/>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">{$t.contact.title}</h1>
	</header>

	<div class="space-y-8">
		<!-- Contact Information -->
		<div>
			<h2 class="mb-6 text-2xl font-semibold text-gray-900">{$t.contact.infoTitle}</h2>
			<div class="space-y-4">
				<div class="flex items-center">
					<div
						class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100"
					>
						<Fa icon={faEnvelope} class="text-blue-600" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-900">{$t.contact.email}</p>
						<a
							href="mailto:stiff.c@proton.me"
							class="text-gray-600 transition-colors hover:text-blue-600"
						>
							stiff.c@proton.me
						</a>
					</div>
				</div>

				<div class="flex items-center">
					<div
						class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100"
					>
						<Fa icon={faMapMarkerAlt} class="text-green-600" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-900">{$t.contact.location}</p>
						<p class="text-gray-600">Lima, Peru</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Social Media -->
		<div>
			<h3 class="mb-6 text-2xl font-semibold text-gray-900">{$t.contact.followMe}</h3>
			<div class="flex space-x-4">
				<a
					href="https://github.com/stiffis"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub profile"
					title="GitHub profile"
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 transition-colors hover:bg-gray-700"
				>
					<Fa icon={faGithub} class="text-xl text-white" />
				</a>
				<a
					href="https://www.linkedin.com/in/steve-andy-ildefonso-santos-936106323/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn profile"
					title="LinkedIn profile"
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 transition-colors hover:bg-blue-700"
				>
					<Fa icon={faLinkedin} class="text-xl text-white" />
				</a>
			</div>
		</div>
	</div>
</div>
