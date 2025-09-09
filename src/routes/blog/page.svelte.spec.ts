import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import BlogPage from './+page.svelte';

describe('/blog/+page.svelte', () => {
	it('should render blog title', async () => {
		render(BlogPage);

		const heading = page.getByRole('heading', { level: 1, name: 'Blog' });
		await expect.element(heading).toBeInTheDocument();
	});

	it('should render blog posts', async () => {
		render(BlogPage);

		const firstPost = page.getByText('Mi primer post');
		const secondPost = page.getByText('Desarrollo con SvelteKit');

		await expect.element(firstPost).toBeInTheDocument();
		await expect.element(secondPost).toBeInTheDocument();
	});

	it('should have read more links', async () => {
		render(BlogPage);

		const readMoreLinks = page.getByText('Leer más');
		await expect.element(readMoreLinks.first()).toBeInTheDocument();
	});
});
