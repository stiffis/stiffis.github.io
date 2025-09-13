<script lang="ts">
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import { theme, nextTheme } from '$lib/stores/theme';

  let time = $state(new Date());
  let timer: number | undefined;
  let isNavigating = $state(false);
  let online = $state(true);
  let copied = $state(false);

  $effect.pre(() => {
    // Clock tick
    timer = setInterval(() => (time = new Date()), 1000) as unknown as number;

    if (browser) {
      // Online/offline
      online = navigator.onLine;
      const onOn = () => (online = true);
      const onOff = () => (online = false);
      window.addEventListener('online', onOn);
      window.addEventListener('offline', onOff);

      // Navigation indicator
      const unBefore = beforeNavigate(() => (isNavigating = true));
      const unAfter = afterNavigate(() => (isNavigating = false));

      return () => {
        clearInterval(timer);
        window.removeEventListener('online', onOn);
        window.removeEventListener('offline', onOff);
        unBefore?.();
        unAfter?.();
      };
    }

    return () => clearInterval(timer);
  });

  const currentTheme = $derived($theme);
  function themeLabel(v: string) {
    return v
      .replace('catppuccin-', 'Catppuccin ')
      .replace('-', ' ')
      .replace(/^./, (c) => c.toUpperCase());
  }

  async function copyCurrentPath() {
    if (!browser) return;
    try {
      await navigator.clipboard?.writeText($page.url.pathname);
      copied = true;
      setTimeout(() => (copied = false), 1200);
    } catch {}
  }
</script>

<div class="statusbar" role="contentinfo" aria-label="Barra de estado" class:loading={isNavigating}>
  <div class="sb-left">
    <span class="seg seg-mode">NORMAL</span>
    <span class="seg seg-title">Caffeine Overflow</span>
  </div>
  <div class="sb-center truncate">
    <button
      class="seg seg-path clickable truncate"
      title={copied ? 'Copiado ✓' : 'Copiar ruta'}
      aria-live="polite"
      onclick={copyCurrentPath}
    >
      {$page.url.pathname}
    </button>
  </div>
  <div class="sb-right">
    <span class="seg seg-net" title={online ? 'Conexión en línea' : 'Conexión perdida'}>
      <span class={`seg-dot ${online ? 'online' : 'offline'}`} aria-hidden="true"></span>
      <span class="sr-only">{online ? 'Online' : 'Offline'}</span>
      <span aria-hidden="true">{online ? 'Online' : 'Offline'}</span>
    </span>
    <button
      class="seg seg-theme clickable"
      title={`Cambiar tema: ${themeLabel(currentTheme)}`}
      onclick={nextTheme}
    >
      {themeLabel(currentTheme)}
    </button>
    <span class="seg seg-time" aria-live="polite">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </span>
  </div>
  <div class="sb-border" aria-hidden="true"></div>
  
</div>
