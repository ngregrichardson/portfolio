import { env } from '$env/dynamic/private';
import { validateToken } from '$src/lib/cloudflare';
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

const schema = zfd.formData({
	name: zfd.text(z.string().min(1)),
	email: zfd.text(z.string().email()),
	message: zfd.text(z.string().min(1)),
	'cf-turnstile-response': zfd.text(z.string().min(1))
});

type ErrorMessages = Record<
	keyof z.infer<typeof schema>,
	{
		value: string;
		message: string;
	}
>;

export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		const result = schema.safeParse(data);

		if (result.success) {
			const { success, err } = await validateToken(
				result.data['cf-turnstile-response'],
				env.TURNSTILE_SECRET_KEY || ''
			);

			if (success) {
				try {
					const resend = new Resend(env.RESEND_KEY);

					await resend.emails.send({
						from: 'contact@iamnoah.dev',
						to: 'noah@iamnoah.dev',
						subject: `New contact from ${result.data.name}`,
						reply_to: result.data.email,
						html: `Got a new contact from ${result.data.name} (${result.data.email})<br><br>${result.data.message}`
					});
				} catch (e) {
					return fail(500, {
						errors: {
							'cf-turnstile-response': {
								value: '',
								message: 'Failed, please try again later'
							}
						} as ErrorMessages
					});
				}

				return {
					message: "Thanks for reaching out! I'll get back to you soon."
				};
			}

			console.error(err);
			return fail(498, {
				errors: {
					'cf-turnstile-response': {
						value: '',
						message: 'Invalid or failed captcha'
					}
				} as ErrorMessages
			});
		}

		console.error(result.error);
		return fail(400, {
			errors: result.error.errors.reduce((acc, e) => {
				acc[e.path.join('.') as keyof z.infer<typeof schema>] = {
					value: (data.get(e.path.join('.')) as string) || '',
					message: e.message
				};
				return acc;
			}, {} as ErrorMessages)
		});
	}
} satisfies Actions;
