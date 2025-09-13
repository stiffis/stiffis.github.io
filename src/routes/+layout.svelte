<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
    import StatusBar from '$lib/components/StatusBar.svelte';

	let { children } = $props();
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
