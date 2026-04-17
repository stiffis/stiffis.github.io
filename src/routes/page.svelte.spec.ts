import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render the homepage hero content', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1, name: 'Caffeine Overflow' });
		const blogLink = page.getByRole('link', { name: 'Leer Blog' });
		const contactLink = page.getByRole('link', { name: 'Contacto' });
		const featureHeading = page.getByRole('heading', { level: 3, name: 'Desarrollo Web' });

		await expect.element(heading).toBeInTheDocument();
		await expect.element(blogLink).toBeInTheDocument();
		await expect.element(contactLink).toBeInTheDocument();
		await expect.element(featureHeading).toBeInTheDocument();
	});
});
