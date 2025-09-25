<script lang="ts">
	import { onMount } from 'svelte';

	let posts = [
		{
			id: 1,
			title: 'Mastering C Pointers',
			excerpt: 'A deep dive into memory management and pointer arithmetic in C.',
			date: '2025-09-25',
			slug: 'mastering-c-pointers',
			hashtags: ['#c', '#programming', '#pointers', '#memory']
		},
		{
			id: 2,
			title: 'Rust for Beginners',
			excerpt:
				'Exploring the fundamentals of Rust and its powerful features for safe and concurrent programming.',
			date: '2025-09-24',
			slug: 'rust-for-beginners',
			hashtags: ['#rust', '#programming', '#beginners', '#safety']
		},
		{
			id: 3,
			title: 'The Art of Clean Code',
			excerpt: 'Principles and practices for writing readable, maintainable, and scalable code.',
			date: '2025-09-23',
			slug: 'the-art-of-clean-code',
			hashtags: ['#development', '#cleancode', '#architecture', '#bestpractices']
		},
		{
			id: 4,
			title: 'A Guide to WebAssembly',
			excerpt: 'Understanding how WebAssembly is changing the web development landscape.',
			date: '2025-09-22',
			slug: 'a-guide-to-webassembly',
			hashtags: ['#webassembly', '#wasm', '#webdev', '#performance']
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
		<!-- Blog Post List -->
		{#each posts as post}
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
				<div class="mt-4">
					{#each post.hashtags as hashtag}
						<span
							class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							>{hashtag}</span
						>
					{/each}
				</div>
				<a
					href="/blog/{post.slug}"
					class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-4"
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
	</div>
</div>

