<script lang="ts">
	import { language, setLanguage, languages, t } from '$lib/i18n';

	let open = false;
	$: current = $language;

	function labelOf(value: string) {
		return value === 'en' ? 'EN' : 'ES';
	}

	function fullLabelOf(value: string) {
		return value === 'en' ? 'English' : 'Español';
	}

	function choose(value: (typeof languages)[number]) {
		setLanguage(value);
		open = false;
	}

	function onBlur(e: FocusEvent) {
		const related = e.relatedTarget as HTMLElement | null;
		if (!related || !related.closest?.('[data-lang-menu]')) {
			open = false;
		}
	}
</script>

<div class="relative" data-lang-menu>
	<button
		type="button"
		title={$t.language.select}
		aria-haspopup="menu"
		aria-expanded={open}
		class="btn-terminal inline-flex items-center gap-2"
		on:click={() => (open = !open)}
		on:blur={onBlur}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
			<circle cx="12" cy="12" r="10" />
			<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
		<span class="text-sm font-medium">{labelOf(current)}</span>
	</button>

	{#if open}
		<div role="menu" class="panel absolute left-0 z-50 mt-2 w-40" data-lang-menu>
			{#each languages as lang (lang)}
				<button
					role="menuitemradio"
					aria-checked={current === lang}
					class="w-full px-3 py-2 text-left text-sm transition-colors hover:bg-blue-50"
					on:click={() => choose(lang)}
				>
					{#if current === lang}
						<span class="mr-2">✓</span>
					{:else}
						<span class="mr-2 opacity-0">✓</span>
					{/if}
					{fullLabelOf(lang)}
				</button>
			{/each}
		</div>
	{/if}
</div>
