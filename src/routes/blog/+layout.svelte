<script>
	import { page } from '$app/stores';
	import TableOfContents from '$lib/components/TableOfContents.svelte';

	let { children } = $props();

	let isBlogPostPage = $derived($page.url.pathname !== '/blog' && $page.url.pathname.startsWith('/blog/'));
</script>

<div class="blog-layout">
	{@render children?.()}

	{#if isBlogPostPage}
		<TableOfContents />
	{/if}
</div>

<style>
	.blog-layout {
		position: relative;
	}
</style>
