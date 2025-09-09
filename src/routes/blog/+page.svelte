<script lang="ts">
	import { onMount } from 'svelte';

	let posts = [
		{
			id: 1,
			title: 'Mi primer post',
			excerpt: 'Este es un ejemplo de post en el blog...',
			date: '2025-01-09',
			slug: 'mi-primer-post'
		},
		{
			id: 2,
			title: 'Desarrollo con SvelteKit',
			excerpt: 'Aprende a crear aplicaciones modernas con SvelteKit...',
			date: '2025-01-08',
			slug: 'desarrollo-con-sveltekit'
		}
	];
</script>

<svelte:head>
	<title>Blog - Caffeine Overflow</title>
	<meta name="description" content="Blog personal con artículos sobre desarrollo y tecnología" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
		<p class="text-lg text-gray-600">Artículos sobre desarrollo, tecnología y más</p>
	</header>
	<div class="space-y-8">
		<!-- Blog Post List 		{#each posts as post}
			<article class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
				<header class="mb-4">
					<h2 class="text-2xl font-semibold text-gray-900 mb-2">
						<a href="/blog/{post.slug}" class="hover:text-blue-600 transition-colors">
							{post.title}
						</a>
					</h2>
					<time class="text-sm text-gray-500" datetime={post.date}>
						{new Date(post.date).toLocaleDateString('es-ES', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</time>
				</header>
				<p class="text-gray-700 mb-4">{post.excerpt}</p>
				<a
					href="/blog/{post.slug}"
					class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
				>
					Leer más
					<svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</article>
		{/each}
-->

	</div>
</div>
