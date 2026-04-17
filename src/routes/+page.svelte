<script lang="ts">
	import { resolve } from '$app/paths';
	import BottomWalker from '$lib/components/BottomWalker.svelte';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>Caffeine Overflow</title>
	<meta name="description" content="Stiff's spot" />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16">
	<div class="mb-16 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">{$t.home.welcome}</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
			{$t.home.subtitle}
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href={resolve('/blog')}
				class="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
			>
				{$t.home.readBlog}
			</a>
			<a
				href={resolve('/contact')}
				class="rounded-lg border border-blue-600 px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50"
			>
				{$t.home.contact}
			</a>
		</div>
	</div>

	<div class="grid gap-8 md:grid-cols-3">
		<img src="/images/bnuuy.gif" alt="bnuuy" width="500" height="600" />
		<img src="/images/cato.gif" alt="cato" width="500" height="600" />
		<img src="/images/yui-kon.gif" alt="yui-kon" width="500" height="600" />
	</div>
</div>

<BottomWalker />
