<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { get } from 'svelte/store';
	import { marked } from 'marked';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import json from 'highlight.js/lib/languages/json';
	import bash from 'highlight.js/lib/languages/bash';
	import css from 'highlight.js/lib/languages/css';
	import xml from 'highlight.js/lib/languages/xml';
	import python from 'highlight.js/lib/languages/python';
	import r from 'highlight.js/lib/languages/r';
	import c from 'highlight.js/lib/languages/c';
	import cpp from 'highlight.js/lib/languages/cpp';
	import java from 'highlight.js/lib/languages/java';
	import rust from 'highlight.js/lib/languages/rust';
	import go from 'highlight.js/lib/languages/go';
	import sql from 'highlight.js/lib/languages/sql';
	import markdown from 'highlight.js/lib/languages/markdown';

	const languages = {
		javascript,
		typescript,
		json,
		bash,
		css,
		xml,
		python,
		r,
		c,
		cpp,
		java,
		rust,
		go,
		sql,
		markdown
	} as const;

	Object.entries(languages).forEach(([name, loader]) => {
		if (!hljs.listLanguages().includes(name)) {
			hljs.registerLanguage(name, loader);
		}
	});

	// Theme colors for syntax highlighting - defined as constants for reactivity
	const themeColors = {
		'catppuccin-latte': {
			codeBg: '#e6e9ef',
			hlKeyword: '#8839ef',
			hlString: '#40a02b',
			hlNumber: '#fe640b',
			hlComment: '#6c6f85',
			hlFunction: '#1e66f5',
			hlClass: '#df8e1d',
			hlAttr: '#04a5e5',
			hlBuiltin: '#df8e1d'
		},
		'catppuccin-mocha': {
			codeBg: '#313244',
			hlKeyword: '#cba6f7',
			hlString: '#a6e3a1',
			hlNumber: '#fab387',
			hlComment: '#6c7086',
			hlFunction: '#89b4fa',
			hlClass: '#f9e2af',
			hlAttr: '#89dceb',
			hlBuiltin: '#f9e2af'
		},
		'gruvbox-light': {
			codeBg: '#f2e5bc',
			hlKeyword: '#9c7126',
			hlString: '#79740e',
			hlNumber: '#8f3f2d',
			hlComment: '#928374',
			hlFunction: '#458588',
			hlClass: '#b57614',
			hlAttr: '#407e83',
			hlBuiltin: '#b57614'
		},
		'gruvbox-dark': {
			codeBg: '#3c3836',
			hlKeyword: '#d79921',
			hlString: '#98971a',
			hlNumber: '#fb4934',
			hlComment: '#928374',
			hlFunction: '#83a598',
			hlClass: '#fabd2f',
			hlAttr: '#8ec07c',
			hlBuiltin: '#fabd2f'
		},
		kanagawa: {
			codeBg: '#2a2a37',
			hlKeyword: '#957fb8',
			hlString: '#98bb6c',
			hlNumber: '#ffa066',
			hlComment: '#a6a69c',
			hlFunction: '#7e9cd8',
			hlClass: '#e6c384',
			hlAttr: '#7fb4ca',
			hlBuiltin: '#e6c384'
		}
	};

	let { content = '' }: { content: string } = $props();

	let container: HTMLElement;
	let currentTheme = get(theme);

	marked.setOptions({
		breaks: true,
		gfm: true
	});

	function highlightCode() {
		if (!container) return;
		const blocks = container.querySelectorAll('pre code');
		blocks.forEach((block) => {
			block.removeAttribute('data-highlighted');
			block.classList.remove('hljs');
			hljs.highlightElement(block as HTMLElement);
		});
	}

	// Reactive effect to update CSS variables when theme changes
	$effect(() => {
		if (container) {
			const colors = themeColors[currentTheme] || themeColors['catppuccin-mocha'];
			container.style.setProperty('--prose-code-bg', colors.codeBg);
			container.style.setProperty('--prose-hl-keyword', colors.hlKeyword);
			container.style.setProperty('--prose-hl-string', colors.hlString);
			container.style.setProperty('--prose-hl-number', colors.hlNumber);
			container.style.setProperty('--prose-hl-comment', colors.hlComment);
			container.style.setProperty('--prose-hl-function', colors.hlFunction);
			container.style.setProperty('--prose-hl-class', colors.hlClass);
			container.style.setProperty('--prose-hl-attr', colors.hlAttr);
			container.style.setProperty('--prose-hl-builtin', colors.hlBuiltin);
			highlightCode();
		}
	});

	// Subscribe to theme changes
	onMount(() => {
		const unsubscribe = theme.subscribe((value) => {
			currentTheme = value;
		});
		return () => unsubscribe();
	});

	let renderedContent = $derived(marked.parse(content));
</script>

<article class="prose" bind:this={container}>
	{@html renderedContent}
</article>

<style>
	.prose {
		--prose-primary: var(--c-text);
		--prose-secondary: var(--c-subtext1);
		--prose-link: var(--c-accent);
		--prose-accent: var(--c-yellow);
		--prose-border: var(--c-surface);
		/* These are set reactively via JS $effect for instant theme switching */
		--prose-code-bg: var(--c-surface);
		--prose-hl-keyword: var(--c-purple);
		--prose-hl-string: var(--c-green);
		--prose-hl-number: var(--c-orange);
		--prose-hl-comment: var(--c-subtext0);
		--prose-hl-function: var(--c-blue);
		--prose-hl-class: var(--c-yellow);
		--prose-hl-attr: var(--c-cyan);
		--prose-hl-builtin: var(--c-yellow);

		max-width: 65ch;
		margin-inline: auto;
		font-size: 1rem;
		line-height: 1.75;
		color: var(--prose-primary);
	}

	/* Headings */
	.prose :global(h1),
	.prose :global(h2),
	.prose :global(h3),
	.prose :global(h4),
	.prose :global(h5),
	.prose :global(h6) {
		font-weight: 700;
		line-height: 1.3;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--prose-primary);
	}

	.prose :global(h1) {
		font-size: 2rem;
		border-bottom: 2px solid var(--prose-border);
		padding-bottom: 0.5rem;
	}

	.prose :global(h2) {
		font-size: 1.5rem;
		border-bottom: 1px solid var(--prose-border);
		padding-bottom: 0.25rem;
	}

	.prose :global(h3) { font-size: 1.25rem; }
	.prose :global(h4) { font-size: 1.125rem; }
	.prose :global(h5) { font-size: 1rem; }
	.prose :global(h6) { font-size: 0.875rem; color: var(--prose-secondary); }

	/* Paragraphs */
	.prose :global(p) {
		margin-bottom: 1.25rem;
	}

	/* Links */
	.prose :global(a) {
		color: var(--prose-link);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-color 0.2s ease;
	}

	.prose :global(a:hover) {
		border-bottom-color: var(--prose-link);
	}

	/* Lists */
	.prose :global(ul),
	.prose :global(ol) {
		margin-bottom: 1.25rem;
		padding-left: 1.5rem;
	}

	.prose :global(ul) { list-style-type: disc; }
	.prose :global(ol) { list-style-type: decimal; }

	.prose :global(li) {
		margin-bottom: 0.5rem;
	}

	.prose :global(li > ul),
	.prose :global(li > ol) {
		margin-top: 0.5rem;
		margin-bottom: 0;
	}

	.prose :global(ul ul) { list-style-type: circle; }
	.prose :global(ul ul ul) { list-style-type: square; }

	/* Code - inline */
	.prose :global(code:not(pre code)) {
		background: var(--prose-code-bg);
		border: 1px solid var(--prose-border);
		border-radius: 0.25rem;
		padding: 0.125rem 0.375rem;
		font-size: 0.875em;
		font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
		color: var(--prose-primary);
	}

	/* Code - blocks */
	.prose :global(pre) {
		background: var(--prose-code-bg);
		border: 1px solid var(--prose-border);
		border-radius: 0.5rem;
		padding: 1rem;
		overflow-x: auto;
		margin-bottom: 1.5rem;
		position: relative;
	}

	.prose :global(pre code) {
		background: transparent;
		border: none;
		padding: 0;
		font-size: 0.875rem;
		line-height: 1.6;
		font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
		color: var(--prose-primary);
	}

	/* Syntax highlighting - uses CSS vars set reactively */
	.prose :global(.hljs) {
		color: var(--prose-primary);
		background: transparent;
	}

	.prose :global(.hljs-keyword),
	.prose :global(.hljs-selector-tag),
	.prose :global(.hljs-literal),
	.prose :global(.hljs-section),
	.prose :global(.hljs-link),
	.prose :global(.hljs-template-variable),
	.prose :global(.hljs-variable) { color: var(--prose-hl-keyword); }

	.prose :global(.hljs-string),
	.prose :global(.hljs-title),
	.prose :global(.hljs-name),
	.prose :global(.hljs-type),
	.prose :global(.hljs-attribute),
	.prose :global(.hljs-symbol),
	.prose :global(.hljs-bullet),
	.prose :global(.hljs-addition) { color: var(--prose-hl-string); }

	.prose :global(.hljs-comment),
	.prose :global(.hljs-quote),
	.prose :global(.hljs-deletion),
	.prose :global(.hljs-meta) { color: var(--prose-hl-comment); font-style: italic; }

	.prose :global(.hljs-number),
	.prose :global(.hljs-regexp),
	.prose :global(.hljs-selector-id),
	.prose :global(.hljs-selector-class) { color: var(--prose-hl-number); }

	.prose :global(.hljs-function),
	.prose :global(.hljs-title.function_) { color: var(--prose-hl-function); }

	.prose :global(.hljs-built_in),
	.prose :global(.hljs-class .hljs-title) { color: var(--prose-hl-builtin); }

	.prose :global(.hljs-attr),
	.prose :global(.hljs-params) { color: var(--prose-hl-attr); }

	.prose :global(.hljs-tag) { color: var(--prose-hl-keyword); }

	.prose :global(.hljs-emphasis) { font-style: italic; }
	.prose :global(.hljs-strong) { font-weight: bold; }

	/* Blockquotes */
	.prose :global(blockquote) {
		background: var(--prose-code-bg);
		border-left: 4px solid var(--prose-link);
		border-radius: 0 0.5rem 0.5rem 0;
		padding: 1rem 1.25rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: var(--prose-secondary);
	}

	.prose :global(blockquote p:last-child) {
		margin-bottom: 0;
	}

	/* Tables */
	.prose :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1.5rem;
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--prose-border);
	}

	.prose :global(th),
	.prose :global(td) {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--prose-border);
	}

	.prose :global(th) {
		background: var(--prose-code-bg);
		font-weight: 600;
		text-align: left;
	}

	.prose :global(tr:last-child td) {
		border-bottom: none;
	}

	.prose :global(tr:hover td) {
		background: var(--prose-code-bg);
	}

	/* Images */
	.prose :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		margin: 1.5rem auto;
		display: block;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	/* Horizontal rule */
	.prose :global(hr) {
		border: none;
		height: 1px;
		background: linear-gradient(to right, transparent, var(--prose-border), transparent);
		margin: 2rem 0;
	}

	/* Strong & Em */
	.prose :global(strong) {
		font-weight: 600;
		color: var(--prose-accent);
	}

	.prose :global(em) {
		font-style: italic;
	}

	/* Small screen adjustments */
	@media (max-width: 640px) {
		.prose {
			font-size: 0.9375rem;
		}

		.prose :global(h1) { font-size: 1.75rem; }
		.prose :global(h2) { font-size: 1.375rem; }
		.prose :global(h3) { font-size: 1.125rem; }

		.prose :global(pre) {
			margin-inline: -1rem;
			border-radius: 0;
		}
	}
</style>
