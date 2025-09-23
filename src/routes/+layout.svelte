<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import { afterNavigate } from '$app/navigation';
	import mermaid from 'mermaid';
	import { theme } from '$lib/stores/theme';

	let { children } = $props();

	theme.subscribe((currentTheme) => {
		if (typeof window !== 'undefined') {
			let mermaidTheme = 'default';
			if (
				currentTheme.includes('dark') ||
				currentTheme.includes('mocha') ||
				currentTheme.includes('kanagawa')
			) {
				mermaidTheme = 'dark';
			}
			mermaid.initialize({ startOnLoad: false, theme: mermaidTheme });
			mermaid.run({ nodes: document.querySelectorAll('pre code.language-mermaid') });
		}
	});

	afterNavigate(() => {
		mermaid.run({ nodes: document.querySelectorAll('pre code.language-mermaid') });
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen terminal-bg">
	<Navigation />
	<main class="pb-14">
		{@render children?.()}
	</main>
    <StatusBar />
</div>
