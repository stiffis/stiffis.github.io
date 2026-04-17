import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ContactPage from './+page.svelte';

describe('/contact/+page.svelte', () => {
	it('should render contact title', async () => {
		render(ContactPage);

		const heading = page.getByRole('heading', { level: 1, name: 'Contact' });
		await expect.element(heading).toBeInTheDocument();
	});

	it('should render contact information sections', async () => {
		render(ContactPage);

		const contactInfoHeading = page.getByRole('heading', { level: 2, name: 'Contact Information' });
		const socialHeading = page.getByRole('heading', { level: 3, name: 'Follow me on' });

		await expect.element(contactInfoHeading).toBeInTheDocument();
		await expect.element(socialHeading).toBeInTheDocument();
	});

	it('should render contact information', async () => {
		render(ContactPage);

		const emailInfo = page.getByText('stiff.c@proton.me');
		const locationInfo = page.getByText('Lima, Peru');

		await expect.element(emailInfo).toBeInTheDocument();
		await expect.element(locationInfo).toBeInTheDocument();
	});

	it('should have social media links', async () => {
		render(ContactPage);

		const githubLink = page.getByRole('link', { name: 'GitHub profile' });
		const linkedInLink = page.getByRole('link', { name: 'LinkedIn profile' });

		await expect.element(githubLink).toBeInTheDocument();
		await expect.element(linkedInLink).toBeInTheDocument();
	});
});
