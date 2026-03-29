<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	$: currentPath = $page.url.pathname;
</script>

<nav class="nav-terminal border-b bg-white shadow-sm">
	<div class="mx-auto max-w-6xl px-4">
		<div class="relative flex items-center py-4">
			<!-- Logo/Brand -->
			<a
				href={resolve('/')}
				class="cursor-blink absolute left-0 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600"
				class:text-blue-600={currentPath === '/'}
			>
				<span class="prompt">❯</span>Caffeine Overflow
			</a>

			<!-- Navigation Links (Centered) -->
			<div class="mx-auto flex space-x-8">
				<a
					href={resolve('/blog')}
					class="font-medium text-gray-700 transition-colors hover:text-blue-600"
					class:text-blue-600={currentPath === '/blog'}
					class:font-semibold={currentPath === '/blog'}
				>
					Blog
				</a>
				<a
					href={resolve('/cool-stuff')}
					class="font-medium text-gray-700 transition-colors hover:text-blue-600"
					class:text-blue-600={currentPath === '/cool-stuff'}
					class:font-semibold={currentPath === '/cool-stuff'}
				>
					Cool Stuff
				</a>
				<a
					href={resolve('/contact')}
					class="font-medium text-gray-700 transition-colors hover:text-blue-600"
					class:text-blue-600={currentPath === '/contact'}
					class:font-semibold={currentPath === '/contact'}
				>
					Contact
				</a>
			</div>

			<!-- Theme Toggle (Right) -->
			<div class="absolute right-0">
				<ThemeToggle />
			</div>
		</div>
	</div>
</nav>
