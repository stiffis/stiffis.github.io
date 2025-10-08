<script>
	import { page } from '$app/stores';
	import TableOfContents from '$lib/components/TableOfContents.svelte';

	let { children } = $props();

	// Check if we're in a specific cool-stuff project page (not the index)
	let isProjectPage = $derived($page.url.pathname !== '/cool-stuff' && $page.url.pathname.startsWith('/cool-stuff/'));
</script>

<div class="cool-stuff-layout">
	{@render children?.()}
	
	{#if isProjectPage}
		<TableOfContents />
	{/if}
</div>

<style>
	.cool-stuff-layout {
		position: relative;
	}
</style>