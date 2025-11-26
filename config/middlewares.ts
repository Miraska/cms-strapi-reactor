export default [
	'strapi::logger',
	'strapi::errors',
	'strapi::security',
	{
		name: 'strapi::cors',
		config: {
			enabled: true,
			headers: '*',
			// Allow origins from env (comma-separated), fallback to localhost during dev
			origin:
				process.env.CORS_ORIGIN?.split(',').map((s) => s.trim()).filter(Boolean) ?? [
					'http://localhost:5173',
					'http://localhost:4173',
					'http://127.0.0.1:5173',
				],
		},
	},
	'strapi::poweredBy',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
