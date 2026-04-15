export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const token = env.AUTH_TOKEN?.trim();

		if (url.pathname === '/api/users') {
			try {
				const response = await fetch('https://ctf.tiller.blog/api/v1/users');
				const data = await response.json();

				return new Response(JSON.stringify(data), {
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				});
			} catch (err) {
				return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 });
			}
		}

		if (url.pathname === '/api/stats') {
			console.log('RAW TOKEN:', env.AUTH_TOKEN);
			console.log('FINAL HEADER:', `Token ${env.AUTH_TOKEN}`);
			try {
				const response = await fetch('https://ctf.tiller.blog/api/v1/statistics/progression/matrix', {
					headers: {
						Authorization: `Token ${token}`,
						'Content-Type': 'application/json',
					},
				});

				const data = await response.json();

				return new Response(JSON.stringify(data), {
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				});
			} catch (err) {
				return new Response(JSON.stringify({ error: 'Failed to fetch stats' }), { status: 500 });
			}
		}

		if (url.pathname.startsWith('/api/avatar/')) {
			const key = url.pathname.split('/api/avatar/')[1];

			const file = await env.ASSETS.fetch(`https://internal/avatars/${key}.png`);

			if (!file.ok) {
				return new Response('Not found', { status: 404 });
			}

			return new Response(file.body, {
				headers: {
					'Content-Type': 'image/png',
					'Access-Control-Allow-Origin': '*',
				},
			});
		}

		if (url.pathname === '/') {
			return new Response('CTFd API Worker is running');
		}

		return new Response(JSON.stringify({ error: 'Not Found' }), {
			status: 404,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},
};
