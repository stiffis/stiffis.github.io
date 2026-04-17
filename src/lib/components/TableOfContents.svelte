<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { language, t } from '$lib/i18n';

	let tocContainer: HTMLElement = $state()!;
	let tocItems: { id: string; text: string; level: number }[] = $state([]);
	let activeId = $state('');
	let isVisible = $state(false);

	function slugifyHeading(text: string) {
		return text
			.normalize('NFKD')
			.toLowerCase()
			.trim()
			.replace(/\p{Diacritic}/gu, '')
			.replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-')
			.replace(/^-|-$/g, '');
	}

	async function extractHeadings() {
		// Wait for DOM to update after language change
		await tick();
		
		const headings = document.querySelectorAll('.prose h2, .prose h3, .prose h4');
		const usedIds: Record<string, number> = {};

		const items = Array.from(headings).map((heading, index) => {
			const text = heading.textContent?.replace(/^▶\s*/, '').trim() || `section-${index + 1}`;
			const baseId = heading.id || slugifyHeading(text) || `section-${index + 1}`;
			const seenCount = usedIds[baseId] ?? 0;
			const uniqueId = seenCount === 0 ? baseId : `${baseId}-${seenCount + 1}`;

			usedIds[baseId] = seenCount + 1;
			if (heading.id !== uniqueId) {
				heading.id = uniqueId;
			}

			return {
				id: uniqueId,
				text,
				level: parseInt(heading.tagName.charAt(1))
			};
		});

		tocItems = items;
		isVisible = items.length > 0;
	}

	function updateActiveHeading() {
		const headings = document.querySelectorAll('.prose h2, .prose h3, .prose h4');
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

	// React to language changes
	$effect(() => {
		// Access language to make effect reactive
		const currentLang = $language;
		// Re-extract headings when language changes
		extractHeadings();
	});

	// React to theme changes for styling
	let currentTheme = $derived($theme);
</script>

{#if isVisible}
	<nav
		class="table-of-contents theme-{currentTheme}"
		bind:this={tocContainer}
		aria-label="Table of Contents"
	>
		<div class="toc-header">
			<h3>{$t.toc.title}</h3>
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
		border: 1px solid var(--block-code-border, rgba(148, 163, 184, 0.3));
		padding: 0.5rem;
		font-size: 0.7rem;
		transition: all 0.3s ease;
		box-shadow:
			0 6px 20px -4px rgba(0, 0, 0, 0.1),
			0 4px 8px -4px rgba(0, 0, 0, 0.08);
	}

	@media (max-width: 1024px) {
		.table-of-contents {
			display: none;
		}
	}

	.toc-header {
		margin-bottom: 0.6rem;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid var(--block-code-border, rgba(148, 163, 184, 0.3));
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

	.level-2-link {
		color: var(--c-green-700) !important;
	}

	.level-3-link {
		color: var(--c-purple-700) !important;
	}

	.level-4-link {
		color: var(--c-orange-700) !important;
	}

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

	.toc-item.level-2.active .toc-link::before {
		background-color: var(--c-green-600);
	}

	.toc-item.level-3.active .toc-link::before {
		background-color: var(--c-purple-600);
	}

	.toc-item.level-4.active .toc-link::before {
		background-color: var(--c-orange-600);
	}

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
</style>
