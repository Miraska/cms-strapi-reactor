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
			origin: (() => {
				const originsFromEnv = process.env.CORS_ORIGIN
					?.split(',')
					.map((s) => s.trim())
					.filter(Boolean);
				// If env var is defined but empty (e.g., ""), it results in [], which should not override defaults
				if (Array.isArray(originsFromEnv) && originsFromEnv.length > 0) {
					return originsFromEnv;
				}
				return ['http://localhost:5173', 'http://localhost:4173', 'http://127.0.0.1:5173'];
			})(),
		},
	},
	'strapi::poweredBy',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
