import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';
import en from './en.json';
import es from './es.json';

export type Language = 'en' | 'es';

export const languages: Language[] = ['en', 'es'];

export const translations: Record<Language, typeof en> = { en, es };

const storageKey = 'language';

function getInitialLanguage(): Language {
	if (!browser) return 'en';
	const saved = (localStorage.getItem(storageKey) || '').trim();
	if (languages.includes(saved as Language)) return saved as Language;
	// Try to detect browser language
	const browserLang = navigator.language.split('-')[0];
	if (languages.includes(browserLang as Language)) return browserLang as Language;
	return 'en';
}

export const language = writable<Language>(getInitialLanguage());

language.subscribe((value) => {
	if (!browser) return;
	try {
		localStorage.setItem(storageKey, value);
	} catch (error) {
		console.warn('Failed to persist the selected language.', error);
	}
});

export const t = derived(language, ($language) => translations[$language]);

export function setLanguage(value: Language) {
	language.set(value);
}

export function toggleLanguage() {
	language.update((current) => {
		const idx = languages.indexOf(current);
		const next = languages[(idx + 1) % languages.length];
		return next;
	});
}
