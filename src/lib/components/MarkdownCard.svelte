<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { theme } from '$lib/stores/theme';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import json from 'highlight.js/lib/languages/json';
	import bash from 'highlight.js/lib/languages/bash';
	import css from 'highlight.js/lib/languages/css';
	import xml from 'highlight.js/lib/languages/xml';
	import python from 'highlight.js/lib/languages/python';

	const languages = { javascript, typescript, json, bash, css, xml, python } as const;

	Object.entries(languages).forEach(([name, loader]) => {
		if (!hljs.listLanguages().includes(name)) {
			hljs.registerLanguage(name, loader);
		}
	});

	let container: HTMLElement;
	let currentTheme = get(theme);

	const highlightAll = () => {
		if (!container) return;
		const blocks = container.querySelectorAll('pre code');
		blocks.forEach((block) => {
			block.removeAttribute('data-highlighted');
			block.classList.remove('hljs');
			hljs.highlightElement(block as HTMLElement);
		});
	};

	onMount(() => {
		const unsubscribe = theme.subscribe((value) => {
			currentTheme = value;
			highlightAll();
		});

		highlightAll();

		return () => {
			unsubscribe();
		};
	});

	afterUpdate(() => {
		highlightAll();
	});
</script>

<article class={`markdown-card theme-${currentTheme}`} bind:this={container}>
	<slot />
</article>

<style>
	.markdown-card {
		margin-left: auto;
		margin-right: auto;
		width: min(56rem, 100%);
		padding: clamp(1rem, 2vw, 1.75rem);
		border-radius: 1rem;
		line-height: 1.7;
		border: 1px solid transparent;
		transition:
			background-color 0.25s ease,
			color 0.25s ease,
			border-color 0.25s ease,
			box-shadow 0.25s ease;
		box-shadow: 0 24px 40px -24px rgba(15, 23, 42, 0.4);
		--inline-code-bg: rgba(15, 23, 42, 0.08);
		--block-code-bg: rgba(15, 23, 42, 0.07);
		--block-code-border: rgba(148, 163, 184, 0.3);
		--hljs-plain: #1f2937;
		--hljs-keyword: #d73a49;
		--hljs-string: #22863a;
		--hljs-number: #005cc5;
		--hljs-title: #6f42c1;
		--hljs-comment: #6a737d;
		--hljs-meta: #d73a49;
		--hljs-symbol: #005cc5;
		--hljs-attr: #6f42c1;
		--hljs-literal: #005cc5;
	}

	.markdown-card.theme-catppuccin-latte {
		background-color: #fff;
		color: #1f2937;
		border-color: rgba(15, 23, 42, 0.12);
		box-shadow: 0 24px 48px -28px rgba(15, 23, 42, 0.2);
	}

	.markdown-card.theme-catppuccin-mocha {
		background-color: rgba(30, 30, 46, 0.9);
		color: #e2e8f0;
		border-color: rgba(148, 163, 184, 0.18);
		box-shadow: 0 24px 48px -28px rgba(15, 23, 42, 0.64);
		--inline-code-bg: rgba(226, 232, 240, 0.18);
		--block-code-bg: rgba(15, 23, 42, 0.32);
		--block-code-border: rgba(226, 232, 240, 0.18);
		--hljs-plain: #e2e8f0;
		--hljs-keyword: #f38ba8;
		--hljs-string: #a6e3a1;
		--hljs-number: #89dceb;
		--hljs-title: #cba6f7;
		--hljs-comment: rgba(226, 232, 240, 0.6);
		--hljs-meta: #fab387;
		--hljs-symbol: #89dceb;
		--hljs-attr: #cba6f7;
		--hljs-literal: #fab387;
	}

	.markdown-card.theme-gruvbox-light {
		background-color: #fbf1c7;
		color: #3c3836;
		border-color: rgba(60, 56, 54, 0.2);
		--inline-code-bg: rgba(60, 56, 54, 0.12);
		--block-code-bg: rgba(250, 244, 214, 0.9);
		--block-code-border: rgba(60, 56, 54, 0.25);
		--hljs-plain: #3c3836;
		--hljs-keyword: #9d0006;
		--hljs-string: #79740e;
		--hljs-number: #8f3f71;
		--hljs-title: #076678;
		--hljs-comment: rgba(76, 73, 69, 0.65);
		--hljs-meta: #af3a03;
		--hljs-symbol: #427b58;
		--hljs-attr: #b57614;
		--hljs-literal: #af3a03;
	}

	.markdown-card.theme-gruvbox-dark {
		background-color: rgba(40, 40, 40, 0.92);
		color: #ebdbb2;
		border-color: rgba(235, 219, 178, 0.2);
		--inline-code-bg: rgba(250, 189, 47, 0.18);
		--block-code-bg: rgba(29, 32, 33, 0.85);
		--block-code-border: rgba(235, 219, 178, 0.18);
		--hljs-plain: #ebdbb2;
		--hljs-keyword: #fb4934;
		--hljs-string: #b8bb26;
		--hljs-number: #d3869b;
		--hljs-title: #83a598;
		--hljs-comment: rgba(189, 174, 147, 0.65);
		--hljs-meta: #fe8019;
		--hljs-symbol: #83a598;
		--hljs-attr: #fabd2f;
		--hljs-literal: #fe8019;
	}

	.markdown-card :global(p),
	.markdown-card :global(ul),
	.markdown-card :global(ol),
	.markdown-card :global(pre),
	.markdown-card :global(blockquote) {
		margin-block: clamp(0.75rem, 1.5vw, 1.25rem);
	}

	.markdown-card :global(ul) {
		list-style: disc;
		padding-left: 2rem;
	}

	.markdown-card :global(ol) {
		list-style: decimal;
		padding-left: 2rem;
	}

	.markdown-card :global(li) {
		margin-bottom: 0.5rem;
	}

	.markdown-card :global(h1),
	.markdown-card :global(h2),
	.markdown-card :global(h3),
	.markdown-card :global(h4),
	.markdown-card :global(h5),
	.markdown-card :global(h6) {
		font-weight: 700;
		margin-top: clamp(1.75rem, 3.5vw, 2.5rem);
		margin-bottom: clamp(0.6rem, 1.5vw, 1rem);
		line-height: 1.3;
	}

	.markdown-card :global(h1) {
		font-size: clamp(2.25rem, 5vw, 2.75rem);
	}

	.markdown-card :global(h2) {
		font-size: clamp(1.85rem, 4vw, 2.15rem);
	}

	.markdown-card :global(h3) {
		font-size: clamp(1.5rem, 3vw, 1.8rem);
	}

	.markdown-card :global(code) {
		font-family:
			'JetBrains Mono',
			'Fira Code',
			ui-monospace,
			SFMono-Regular,
			Menlo,
			Monaco,
			Consolas,
			'Liberation Mono',
			'Courier New',
			monospace;
		font-size: 0.95em;
		background-color: var(--inline-code-bg);
		padding: 0.15rem 0.35rem;
		border-radius: 0.35rem;
	}

	.markdown-card :global(pre) {
		overflow-x: auto;
		padding: clamp(0.85rem, 2vw, 1.35rem);
		border-radius: 0.75rem;
		background-color: var(--block-code-bg);
		border: 1px solid var(--block-code-border);
	}

	.markdown-card :global(pre code) {
		padding: 0;
		background-color: transparent;
		color: var(--hljs-plain);
	}

	.markdown-card :global(pre code.hljs) {
		color: var(--hljs-plain);
	}

	.markdown-card :global(code.hljs) {
		display: block;
	}

	.markdown-card :global(.hljs-keyword),
	.markdown-card :global(.hljs-selector-tag),
	.markdown-card :global(.hljs-literal),
	.markdown-card :global(.hljs-built_in) {
		color: var(--hljs-keyword);
	}

	.markdown-card :global(.hljs-string),
	.markdown-card :global(.hljs-attr),
	.markdown-card :global(.hljs-attribute) {
		color: var(--hljs-string);
	}

	.markdown-card :global(.hljs-number),
	.markdown-card :global(.hljs-symbol) {
		color: var(--hljs-number);
	}

	.markdown-card :global(.hljs-title),
	.markdown-card :global(.hljs-function),
	.markdown-card :global(.hljs-title.function_),
	.markdown-card :global(.hljs-title.class_) {
		color: var(--hljs-title);
	}

	.markdown-card :global(.hljs-comment),
	.markdown-card :global(.hljs-quote) {
		color: var(--hljs-comment);
		font-style: italic;
	}

	.markdown-card :global(.hljs-meta) {
		color: var(--hljs-meta);
	}

	.markdown-card :global(hr) {
		border: none;
		border-top: 1px solid rgba(148, 163, 184, 0.4);
		margin: clamp(1.75rem, 4vw, 2.5rem) 0;
	}

	.markdown-card :global(blockquote) {
		border-left: 4px solid color-mix(in srgb, currentColor 65%, transparent);
		padding-left: 1rem;
		font-style: italic;
		opacity: 0.85;
	}

	.markdown-card :global(a) {
		text-decoration: underline;
		font-weight: 600;
		color: inherit;
	}

	.markdown-card :global(img) {
		display: block;
		max-width: 100%;
		height: auto;
		margin: clamp(0.85rem, 2vw, 1.5rem) auto;
		border-radius: 0.75rem;
		border: 1px solid var(--block-code-border);
		box-shadow: 0 16px 32px -24px rgba(15, 23, 42, 0.55);
	}

	.markdown-card.theme-catppuccin-mocha :global(img),
	.markdown-card.theme-gruvbox-dark :global(img) {
		border-color: rgba(226, 232, 240, 0.25);
		box-shadow: 0 16px 32px -24px rgba(15, 23, 42, 0.8);
	}

	.markdown-card :global(figure) {
		margin-block: clamp(0.85rem, 2vw, 1.5rem);
		text-align: center;
	}

	.markdown-card :global(figcaption) {
		margin-top: 0.5rem;
		font-size: 0.9rem;
		opacity: 0.8;
	}
</style>
