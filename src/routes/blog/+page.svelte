<script lang="ts">
	import { onMount } from 'svelte';

	let posts = [
		{
			id: 1,
			title: 'My first post',
			excerpt: 'This is an example of a blog post...',
			date: '2025-01-09',
			slug: 'my-first-post'
		},
		{
			id: 2,
			title: 'Developing with SvelteKit',
			excerpt: 'Learn to create modern applications with SvelteKit...',
			date: '2025-01-08',
			slug: 'developing-with-sveltekit'
		}
	];
</script>

<svelte:head>
	<title>Blog - Caffeine Overflow</title>
	<meta name="description" content="Personal blog with articles about development and technology" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
		<p class="text-lg text-gray-600">Articles about development, technology, and more</p>
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
						{new Date(post.date).toLocaleDateString('en-US', {
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
					Read more
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
