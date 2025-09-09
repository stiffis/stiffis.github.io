import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme =
	| 'catppuccin-latte'
	| 'catppuccin-mocha'
	| 'gruvbox-light'
	| 'gruvbox-dark'
	| 'kanagawa';

export const themes: Theme[] = [
	'gruvbox-light',
	'gruvbox-dark',
	'catppuccin-latte',
	'catppuccin-mocha',
	'kanagawa'
];

const storageKey = 'theme';

function getInitialTheme(): Theme {
	if (!browser) return 'catppuccin-latte';
	const saved = (localStorage.getItem(storageKey) || '').trim();
	if (themes.includes(saved as Theme)) return saved as Theme;
	const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
	return prefersDark ? 'catppuccin-mocha' : 'catppuccin-latte';
}

export const theme = writable<Theme>(getInitialTheme());

theme.subscribe((value) => {
	if (!browser) return;
	try {
		localStorage.setItem(storageKey, value);
		document.documentElement.setAttribute('data-theme', value);
	} catch {}
});

export function nextTheme() {
	theme.update((current) => {
		const idx = themes.indexOf(current);
		const next = themes[(idx + 1) % themes.length];
		return next;
	});
}

export function setTheme(value: Theme) {
	theme.set(value);
}
