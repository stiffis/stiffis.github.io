<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import { t } from '$lib/i18n';

	$: currentPath = $page.url.pathname;
</script>

<nav class="nav-terminal border-b bg-white shadow-sm">
	<div class="mx-auto max-w-6xl px-4">
		<div class="relative flex items-center justify-between gap-3 py-3 md:py-4">
			<a
				href={resolve('/')}
				class="cursor-blink truncate text-base font-bold text-gray-900 transition-colors hover:text-blue-600 sm:text-lg md:text-xl"
				class:text-blue-600={currentPath === '/'}
			>
				<span class="prompt">❯</span>Caffeine Overflow
			</a>

			<div class="shrink-0 flex items-center gap-2">
				<LanguageSelector />
				<ThemeToggle />
			</div>

			<div
				class="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
			>
				<a
					href={resolve('/blog')}
					class="font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-blue-600"
					class:text-blue-600={currentPath === '/blog'}
					class:font-semibold={currentPath === '/blog'}
				>
					{$t.nav.blog}
				</a>
				<a
					href={resolve('/cool-stuff')}
					class="font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-blue-600"
					class:text-blue-600={currentPath === '/cool-stuff'}
					class:font-semibold={currentPath === '/cool-stuff'}
				>
					{$t.nav.coolStuff}
				</a>
				<a
					href={resolve('/contact')}
					class="font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-blue-600"
					class:text-blue-600={currentPath === '/contact'}
					class:font-semibold={currentPath === '/contact'}
				>
					{$t.nav.contact}
				</a>
			</div>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pb-3 md:hidden">
			<a
				href={resolve('/blog')}
				class="font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-blue-600"
				class:text-blue-600={currentPath === '/blog'}
				class:font-semibold={currentPath === '/blog'}
			>
				{$t.nav.blog}
			</a>
			<a
				href={resolve('/cool-stuff')}
				class="font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-blue-600"
				class:text-blue-600={currentPath === '/cool-stuff'}
				class:font-semibold={currentPath === '/cool-stuff'}
			>
				{$t.nav.coolStuff}
			</a>
			<a
				href={resolve('/contact')}
				class="font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-blue-600"
				class:text-blue-600={currentPath === '/contact'}
				class:font-semibold={currentPath === '/contact'}
			>
				{$t.nav.contact}
			</a>
		</div>
	</div>
</nav>
