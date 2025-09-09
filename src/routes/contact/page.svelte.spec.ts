import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ContactPage from './+page.svelte';

describe('/contact/+page.svelte', () => {
	it('should render contact title', async () => {
		render(ContactPage);

		const heading = page.getByRole('heading', { level: 1, name: 'Contacto' });
		await expect.element(heading).toBeInTheDocument();
	});

	it('should render contact form', async () => {
		render(ContactPage);

		const nameInput = page.getByLabelText('Nombre *');
		const emailInput = page.getByLabelText('Email *');
		const subjectInput = page.getByLabelText('Asunto *');
		const messageInput = page.getByLabelText('Mensaje *');
		const submitButton = page.getByRole('button', { name: 'Enviar Mensaje' });

		await expect.element(nameInput).toBeInTheDocument();
		await expect.element(emailInput).toBeInTheDocument();
		await expect.element(subjectInput).toBeInTheDocument();
		await expect.element(messageInput).toBeInTheDocument();
		await expect.element(submitButton).toBeInTheDocument();
	});

	it('should render contact information', async () => {
		render(ContactPage);

		const emailInfo = page.getByText('steve.ildefonso@utec.edu.pe');
		const locationInfo = page.getByText('Lima, Perú');

		await expect.element(emailInfo).toBeInTheDocument();
		await expect.element(locationInfo).toBeInTheDocument();
	});

	it('should have social media links', async () => {
		render(ContactPage);

		const githubLink = page.getByRole('link', { name: /github/i });
		await expect.element(githubLink).toBeInTheDocument();
	});
});
