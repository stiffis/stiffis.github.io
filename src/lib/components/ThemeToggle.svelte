<script lang="ts">
  import { theme, setTheme, themes } from '$lib/stores/theme';

  let open = false;
  $: current = $theme;

  function labelOf(value: string) {
    return value
      .replace('catppuccin-', 'Catppuccin ')
      .replace('-', ' ')
      .replace(/^./, (c) => c.toUpperCase());
  }

  function choose(value: typeof themes[number]) {
    setTheme(value);
    open = false;
  }

  function onBlur(e: FocusEvent) {
    const related = e.relatedTarget as HTMLElement | null;
    if (!related || !related.closest?.('[data-theme-menu]')) {
      open = false;
    }
  }
</script>

<div class="relative" data-theme-menu>
  <button
    type="button"
    title={`Tema: ${labelOf(current)}`}
    aria-haspopup="menu"
    aria-expanded={open}
    class="inline-flex items-center gap-2 btn-terminal"
    on:click={() => (open = !open)}
    on:blur={onBlur}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 1 1 0 000-2 8 8 0 110-16 1 1 0 000-2z"/>
      <path d="M12 4a8 8 0 018 8 1 1 0 01-2 0 6 6 0 00-6-6 1 1 0 010-2z"/>
    </svg>
    <span class="text-sm font-medium">{labelOf(current)}</span>
    <svg viewBox="0 0 20 20" class="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clip-rule="evenodd" />
    </svg>
  </button>

  {#if open}
    <div
      role="menu"
      class="absolute right-0 mt-2 w-56 panel z-50"
      data-theme-menu
    >
      {#each themes as t}
        <button
          role="menuitemradio"
          aria-checked={current === t}
          class="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition-colors"
          on:click={() => choose(t)}
        >
          {#if current === t}
            <span class="mr-2">✓</span>
          {:else}
            <span class="mr-2 opacity-0">✓</span>
          {/if}
          {labelOf(t)}
        </button>
      {/each}
    </div>
  {/if}
</div>
