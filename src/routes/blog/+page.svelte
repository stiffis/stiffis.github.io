<script lang="ts">
	import { resolve } from '$app/paths';

	const posts = [
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
	] as const;

	function formatPostDate(date: string) {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		}).format(new Date(`${date}T00:00:00Z`));
	}
</script>

<svelte:head>
	<title>Blog - Caffeine Overflow</title>
	<meta name="description" content="Personal blog with articles about development and technology" />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Blog</h1>
		<p class="text-lg text-gray-600">Articles about development, technology, and more</p>
	</header>
	<div class="space-y-8">
		<!-- Blog Post List -->
		{#each posts as post (post.slug)}
			<article class="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
				<header class="mb-4">
					<h2 class="mb-2 text-2xl font-semibold text-gray-900">
						<a href={resolve(`/blog/${post.slug}`)} class="transition-colors hover:text-blue-600">
							{post.title}
						</a>
					</h2>
					<time class="text-sm text-gray-500" datetime={post.date}>
						{formatPostDate(post.date)}
					</time>
				</header>
				<p class="mb-4 text-gray-700">{post.excerpt}</p>
				<div class="mt-4">
					{#each post.hashtags as hashtag (hashtag)}
						<span
							class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
							>{hashtag}</span
						>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</div>
