<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';
	import { theme } from '$lib/stores/theme';

	let { children } = $props();

	type MermaidTheme = 'default' | 'dark' | 'forest' | 'neutral' | 'base' | null | undefined;

	onMount(() => {
		const unsubscribe = theme.subscribe((currentTheme) => {
			let mermaidTheme: MermaidTheme = 'default';
			if (
				currentTheme.includes('dark') ||
				currentTheme.includes('mocha') ||
				currentTheme.includes('kanagawa')
			) {
				mermaidTheme = 'dark';
			}

			mermaid.initialize({ startOnLoad: false, theme: mermaidTheme });
			mermaid.run({ nodes: document.querySelectorAll('pre code.language-mermaid') });
		});

		afterNavigate(() => {
			mermaid.run({ nodes: document.querySelectorAll('pre code.language-mermaid') });
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="terminal-bg min-h-screen">
	<Navigation />
	<main class="pb-14">
		{@render children?.()}
	</main>
	<StatusBar />
</div>
