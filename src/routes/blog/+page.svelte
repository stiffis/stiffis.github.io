<script lang="ts">
	import { resolve } from '$app/paths';
	import { t, language } from '$lib/i18n';

	type Post = {
		id: number;
		title: { en: string; es: string };
		excerpt: { en: string; es: string };
		date: string;
		slug: string;
		path: string;
		hashtags: string[];
	};

	const posts: Post[] = [
		{
			id: 8,
			title: {
				en: 'The Uncomfortable Economics of Generative AI',
				es: 'La Economía Incómoda de la IA Generativa'
			},
			excerpt: {
				en: 'An essay on losses, subscriptions, API economics, data centers, and the economic and social impact of the AI infrastructure race.',
				es: 'Un ensayo sobre pérdidas, suscripciones, economía de API, centros de datos y el impacto económico y social de la carrera por infraestructura de IA.'
			},
			date: '2026-04-19',
			slug: 'la-economia-incomoda-de-la-ia',
			path: '/blog/la-economia-incomoda-de-la-ia',
			hashtags: ['#economics', '#ai', '#openai', '#anthropic', '#datacenters']
		},
		{
			id: 7,
			title: {
				en: 'Extended Cognition and Artificial Intelligence',
				es: 'Cognición Extendida e Inteligencia Artificial'
			},
			excerpt: {
				en: 'Are LLMs like ChatGPT or Claude already an extension of our mind?',
				es: '¿Son los LLMs como ChatGPT o Claude ya una extensión de nuestra mente?'
			},
			date: '2026-04-17',
			slug: 'cognicion-extendida-e-inteligencia-artificial',
			path: '/blog/cognicion-extendida-e-inteligencia-artificial',
			hashtags: ['#philosophy', '#ai', '#cognitionscience', '#llm', '#mind']
		},
		{
			id: 6,
			title: {
				en: 'Gödel and the Limits of What Can Be Proven',
				es: 'Gödel y los Límites de lo que Puede Ser Probado'
			},
			excerpt: {
				en: 'An accessible exploration of incompleteness, self-reference, and why no system can prove its own consistency.',
				es: 'Una exploración accesible de la incompletitud, la autorreferencia y por qué ningún sistema puede probar su propia consistencia.'
			},
			date: '2026-04-16',
			slug: 'goedel-and-the-limits-of-proof',
			path: '/blog/goedel-and-the-limits-of-proof',
			hashtags: ['#mathematics', '#logic', '#philosophy', '#incompleteness']
		},
		{
			id: 5,
			title: {
				en: 'The Inspiration of Neural Networks from the Brain',
				es: 'La Inspiración de las Redes Neuronales desde el Cerebro'
			},
			excerpt: {
				en: 'A translated and expanded reflection on the shift from cognitivism to connectionism and its impact on modern AI.',
				es: 'Una reflexión traducida y ampliada sobre el cambio del cognitivismo al conexionismo y su impacto en la IA moderna.'
			},
			date: '2025-12-10',
			slug: 'inspiration-neural-networks-and-the-brain',
			path: '/blog/inspiration-neural-networks-and-the-brain',
			hashtags: ['#ai', '#neuralnetworks', '#cognitivism', '#connectionism']
		},

	];

	let searchTerm = $state('');
	let activeTag = $state('all');

	const tags = [
		'all',
		...Array.from(
			new Set(posts.flatMap((post) => post.hashtags.map((tag) => tag.replace('#', ''))))
		).sort()
	];

	let filteredPosts = $derived(posts);

	$effect(() => {
		const query = searchTerm.trim().toLowerCase();

		filteredPosts = posts.filter((post) => {
			const postTitle = post.title[$language];
			const postExcerpt = post.excerpt[$language];

			const matchesTag =
				activeTag === 'all' || post.hashtags.some((tag) => tag.toLowerCase() === `#${activeTag}`);

			const matchesSearch =
				query.length === 0 ||
				postTitle.toLowerCase().includes(query) ||
				postExcerpt.toLowerCase().includes(query) ||
				post.hashtags.some((tag) => tag.toLowerCase().includes(query));

			return matchesTag && matchesSearch;
		});
	});

	function formatPostDate(date: string) {
		const locale = $language === 'es' ? 'es-ES' : 'en-US';
		return new Intl.DateTimeFormat(locale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		}).format(new Date(`${date}T00:00:00Z`));
	}

	function getTitle(post: Post) {
		return post.title[$language];
	}

	function getExcerpt(post: Post) {
		return post.excerpt[$language];
	}
</script>

<svelte:head>
	<title>Blog - Caffeine Overflow</title>
	<meta name="description" content="Personal blog with articles about development and technology" />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">{$t.blog.title}</h1>
	</header>

	<section class="mb-5 rounded-lg bg-white p-3 shadow-sm">
		<div class="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
			<input
				id="blog-search"
				type="search"
				bind:value={searchTerm}
				placeholder={$t.blog.searchPlaceholder}
				aria-label="Search blog posts"
				class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
			/>
			<select
				bind:value={activeTag}
				aria-label="Filter posts by tag"
				class="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
			>
				{#each tags as tag (tag)}
					<option value={tag}>{tag === 'all' ? $t.blog.allTags : `#${tag}`}</option>
				{/each}
			</select>
		</div>
	</section>

	<div class="space-y-8">
		<!-- Blog Post List -->
		{#if filteredPosts.length === 0}
			<p class="rounded-lg bg-white p-6 text-center text-gray-600 shadow-sm">
				{$t.blog.noResults}
			</p>
		{:else}
			{#each filteredPosts as post (post.slug)}
				<article class="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
					<header class="mb-4">
						<h2 class="mb-2 text-2xl font-semibold text-gray-900">
							<a href={post.path} class="transition-colors hover:text-blue-600">
								{getTitle(post)}
							</a>
						</h2>
						<time class="text-sm text-gray-500" datetime={post.date}>
							{formatPostDate(post.date)}
						</time>
					</header>
					<p class="mb-4 text-gray-700">{getExcerpt(post)}</p>
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
		{/if}
	</div>
</div>
