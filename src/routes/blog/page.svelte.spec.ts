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

		const firstPost = page.getByRole('link', { name: 'Mastering C Pointers' });
		const secondPost = page.getByRole('link', { name: 'Rust for Beginners' });

		await expect.element(firstPost).toBeInTheDocument();
		await expect.element(secondPost).toBeInTheDocument();
	});

	it('should render post metadata and tags', async () => {
		render(BlogPage);

		const postDate = page.getByText('September 25, 2025');
		const hashtag = page.getByText('#webassembly');

		await expect.element(postDate).toBeInTheDocument();
		await expect.element(hashtag).toBeInTheDocument();
	});
});
