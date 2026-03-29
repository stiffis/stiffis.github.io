<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let tocContainer: HTMLElement;
	let tocItems: { id: string; text: string; level: number }[] = [];
	let activeId = '';
	let isVisible = false;

	// Extract headings from the document
	function extractHeadings() {
		const headings = document.querySelectorAll(
			'.markdown-card h2, .markdown-card h3, .markdown-card h4'
		);
		tocItems = Array.from(headings).map((heading) => ({
			id: heading.id,
			text: heading.textContent?.replace(/^▶\s*/, '') || '',
			level: parseInt(heading.tagName.charAt(1))
		}));
		isVisible = tocItems.length > 0;
	}

	// Update active heading based on scroll position
	function updateActiveHeading() {
		const headings = document.querySelectorAll(
			'.markdown-card h2, .markdown-card h3, .markdown-card h4'
		);
		const scrollPosition = window.scrollY + 100;

		let current = '';
		headings.forEach((heading) => {
			const rect = heading.getBoundingClientRect();
			const top = rect.top + window.scrollY;
			if (top <= scrollPosition) {
				current = heading.id;
			}
		});
		activeId = current;
	}

	// Smooth scroll to heading
	function scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	onMount(() => {
		extractHeadings();
		updateActiveHeading();

		const handleScroll = () => updateActiveHeading();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	afterUpdate(() => {
		extractHeadings();
	});

	$: currentTheme = $theme;
</script>

{#if isVisible}
	<nav
		class="table-of-contents theme-{currentTheme}"
		bind:this={tocContainer}
		aria-label="Table of Contents"
	>
		<div class="toc-header">
			<h3>Contents</h3>
		</div>
		<ul class="toc-list">
			{#each tocItems as item (item.id)}
				<li class="toc-item level-{item.level}" class:active={activeId === item.id}>
					<button
						class="toc-link level-{item.level}-link"
						onclick={() => scrollToHeading(item.id)}
						title="Go to {item.text}"
					>
						{item.text}
					</button>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.table-of-contents {
		position: fixed;
		top: 5rem;
		right: 1rem;
		width: 12rem;
		max-height: calc(100vh - 10rem);
		overflow-y: auto;
		z-index: 40;
		backdrop-filter: blur(8px);
		border-radius: 0.5rem;
		border: 1px solid;
		padding: 0.5rem;
		font-size: 0.7rem;
		transition: all 0.3s ease;
		box-shadow:
			0 6px 20px -4px rgba(0, 0, 0, 0.1),
			0 4px 8px -4px rgba(0, 0, 0, 0.08);
	}

	/* Hide on mobile and smaller tablets */
	@media (max-width: 1024px) {
		.table-of-contents {
			display: none;
		}
	}

	.toc-header {
		margin-bottom: 0.6rem;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid;
	}

	.toc-header h3 {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.toc-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.toc-item {
		margin-bottom: 0.15rem;
	}

	.toc-item.level-2 {
		padding-left: 0;
	}

	.toc-item.level-3 {
		padding-left: 0.75rem;
	}

	.toc-item.level-4 {
		padding-left: 1.5rem;
	}

	.toc-link {
		display: block;
		width: 100%;
		text-align: left;
		padding: 0.25rem 0.4rem;
		border: none;
		background: none;
		border-radius: 0.25rem;
		font-size: 0.72rem;
		line-height: 1.3;
		cursor: pointer;
		transition: all 0.2s ease;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* Color coding by heading level - same as document */
	.level-2-link {
		color: var(--c-green-700) !important;
	}

	.level-3-link {
		color: var(--c-purple-700) !important;
	}

	.level-4-link {
		color: var(--c-orange-700) !important;
	}

	/* Enhanced hover effects with level colors */
	.level-2-link:hover {
		background-color: color-mix(in srgb, var(--c-green-600) 15%, transparent) !important;
		color: var(--c-green-600) !important;
	}

	.level-3-link:hover {
		background-color: color-mix(in srgb, var(--c-purple-600) 15%, transparent) !important;
		color: var(--c-purple-600) !important;
	}

	.level-4-link:hover {
		background-color: color-mix(in srgb, var(--c-orange-600) 15%, transparent) !important;
		color: var(--c-orange-600) !important;
	}

	/* Active state enhanced colors */
	.toc-item.level-2.active .level-2-link {
		background-color: color-mix(in srgb, var(--c-green-600) 20%, transparent) !important;
		color: var(--c-green-600) !important;
		font-weight: 600;
	}

	.toc-item.level-3.active .level-3-link {
		background-color: color-mix(in srgb, var(--c-purple-600) 20%, transparent) !important;
		color: var(--c-purple-600) !important;
		font-weight: 600;
	}

	.toc-item.level-4.active .level-4-link {
		background-color: color-mix(in srgb, var(--c-orange-600) 20%, transparent) !important;
		color: var(--c-orange-600) !important;
		font-weight: 600;
	}

	.toc-link:hover {
		transform: translateX(1px);
	}

	.toc-item.active .toc-link {
		font-weight: 600;
		position: relative;
	}

	.toc-item.active .toc-link::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 2px;
		height: 50%;
		border-radius: 1px;
	}

	/* Active indicator colors by level */
	.toc-item.level-2.active .toc-link::before {
		background-color: var(--c-green-600);
	}

	.toc-item.level-3.active .toc-link::before {
		background-color: var(--c-purple-600);
	}

	.toc-item.level-4.active .toc-link::before {
		background-color: var(--c-orange-600);
	}

	/* Enhanced hover effects with level colors */
	.toc-item.level-2 .toc-link:hover {
		background-color: color-mix(in srgb, var(--c-green-600) 10%, transparent);
		color: var(--c-green-600);
	}

	.toc-item.level-3 .toc-link:hover {
		background-color: color-mix(in srgb, var(--c-purple-600) 10%, transparent);
		color: var(--c-purple-600);
	}

	.toc-item.level-4 .toc-link:hover {
		background-color: color-mix(in srgb, var(--c-orange-600) 10%, transparent);
		color: var(--c-orange-600);
	}

	/* Active state enhanced colors */
	.toc-item.level-2.active .toc-link {
		background-color: color-mix(in srgb, var(--c-green-600) 15%, transparent);
		color: var(--c-green-600);
	}

	.toc-item.level-3.active .toc-link {
		background-color: color-mix(in srgb, var(--c-purple-600) 15%, transparent);
		color: var(--c-purple-600);
	}

	.toc-item.level-4.active .toc-link {
		background-color: color-mix(in srgb, var(--c-orange-600) 15%, transparent);
		color: var(--c-orange-600);
	}

	/* Theme styles */
	.table-of-contents.theme-catppuccin-latte {
		background-color: rgba(239, 241, 245, 0.9);
		border-color: rgba(76, 79, 105, 0.2);
		color: var(--c-text);
	}

	.table-of-contents.theme-catppuccin-latte .toc-header {
		border-color: rgba(76, 79, 105, 0.15);
	}

	.table-of-contents.theme-catppuccin-latte .toc-header h3 {
		color: var(--c-blue-700);
	}

	.table-of-contents.theme-catppuccin-latte .toc-link:hover {
		background-color: rgba(30, 102, 245, 0.1);
		color: var(--c-blue-700);
	}

	.table-of-contents.theme-catppuccin-latte .toc-item.active .toc-link {
		background-color: rgba(30, 102, 245, 0.15);
		color: var(--c-blue-700);
	}

	.table-of-contents.theme-catppuccin-latte .toc-item.active .toc-link::before {
		background-color: var(--c-blue-600);
	}

	.table-of-contents.theme-catppuccin-mocha {
		background-color: rgba(30, 30, 46, 0.9);
		border-color: rgba(148, 163, 184, 0.2);
		color: var(--c-text);
	}

	.table-of-contents.theme-catppuccin-mocha .toc-header {
		border-color: rgba(148, 163, 184, 0.15);
	}

	.table-of-contents.theme-catppuccin-mocha .toc-header h3 {
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-catppuccin-mocha .toc-link:hover {
		background-color: rgba(137, 220, 235, 0.15);
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-catppuccin-mocha .toc-item.active .toc-link {
		background-color: rgba(137, 220, 235, 0.2);
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-catppuccin-mocha .toc-item.active .toc-link::before {
		background-color: var(--c-blue-600);
	}

	.table-of-contents.theme-gruvbox-light {
		background-color: rgba(251, 241, 199, 0.9);
		border-color: rgba(60, 56, 54, 0.2);
		color: var(--c-text);
	}

	.table-of-contents.theme-gruvbox-light .toc-header {
		border-color: rgba(60, 56, 54, 0.15);
	}

	.table-of-contents.theme-gruvbox-light .toc-header h3 {
		color: var(--c-blue-700);
	}

	.table-of-contents.theme-gruvbox-light .toc-link:hover {
		background-color: rgba(7, 102, 120, 0.1);
		color: var(--c-blue-700);
	}

	.table-of-contents.theme-gruvbox-light .toc-item.active .toc-link {
		background-color: rgba(7, 102, 120, 0.15);
		color: var(--c-blue-700);
	}

	.table-of-contents.theme-gruvbox-light .toc-item.active .toc-link::before {
		background-color: var(--c-blue-600);
	}

	.table-of-contents.theme-gruvbox-dark {
		background-color: rgba(40, 40, 40, 0.9);
		border-color: rgba(235, 219, 178, 0.2);
		color: var(--c-text);
	}

	.table-of-contents.theme-gruvbox-dark .toc-header {
		border-color: rgba(235, 219, 178, 0.15);
	}

	.table-of-contents.theme-gruvbox-dark .toc-header h3 {
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-gruvbox-dark .toc-link:hover {
		background-color: rgba(131, 165, 152, 0.15);
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-gruvbox-dark .toc-item.active .toc-link {
		background-color: rgba(131, 165, 152, 0.2);
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-gruvbox-dark .toc-item.active .toc-link::before {
		background-color: var(--c-blue-600);
	}

	.table-of-contents.theme-kanagawa {
		background-color: rgba(31, 31, 40, 0.9);
		border-color: rgba(200, 192, 147, 0.2);
		color: var(--c-text);
	}

	.table-of-contents.theme-kanagawa .toc-header {
		border-color: rgba(200, 192, 147, 0.15);
	}

	.table-of-contents.theme-kanagawa .toc-header h3 {
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-kanagawa .toc-link:hover {
		background-color: rgba(126, 156, 216, 0.15);
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-kanagawa .toc-item.active .toc-link {
		background-color: rgba(126, 156, 216, 0.2);
		color: var(--c-blue-600);
	}

	.table-of-contents.theme-kanagawa .toc-item.active .toc-link::before {
		background-color: var(--c-blue-600);
	}

	/* Custom scrollbar for TOC */
	.table-of-contents::-webkit-scrollbar {
		width: 4px;
	}

	.table-of-contents::-webkit-scrollbar-track {
		background: transparent;
	}

	.table-of-contents::-webkit-scrollbar-thumb {
		background-color: var(--c-accent);
		border-radius: 2px;
		opacity: 0.5;
	}

	.table-of-contents::-webkit-scrollbar-thumb:hover {
		opacity: 0.8;
	}
</style>
