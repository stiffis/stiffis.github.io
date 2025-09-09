<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	$: currentPath = $page.url.pathname;
</script>

<nav class="bg-white shadow-sm border-b">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex items-center py-4 relative">
			<!-- Logo/Brand -->
			<a
				href="/"
				class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors absolute left-0"
				class:text-blue-600={currentPath === '/'}
			>
				Caffeine Overflow
			</a>
			
			<!-- Navigation Links (Centered) -->
			<div class="flex space-x-8 mx-auto">
				<a
					href="/blog"
					class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
					class:text-blue-600={currentPath === '/blog'}
					class:font-semibold={currentPath === '/blog'}
				>
					Blog
				</a>
				<a
					href="/cool-stuff"
					class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
					class:text-blue-600={currentPath === '/cool-stuff'}
					class:font-semibold={currentPath === '/cool-stuff'}
				>
					Cool Stuff
				</a>
				<a
					href="/contact"
					class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
					class:text-blue-600={currentPath === '/contact'}
					class:font-semibold={currentPath === '/contact'}
				>
					Contacto
				</a>
			</div>

			<!-- Theme Toggle (Right) -->
			<div class="absolute right-0">
				<ThemeToggle />
			</div>
		</div>
	</div>
</nav>
