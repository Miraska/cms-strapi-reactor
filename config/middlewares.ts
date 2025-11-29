export default [
	'strapi::logger',
	'strapi::errors',
	'strapi::security',
	{
		name: 'strapi::cors',
		config: {
			headers: '*',
			methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
			// Allow origins from env (comma-separated), fallback to defaults
			origin: (() => {
				const originsFromEnv = process.env.CORS_ORIGIN
					?.split(',')
					.map((s) => s.trim())
					.filter(Boolean);
				
				// Default origins for development and production
				const defaultOrigins = [
					// Development
					'http://localhost:5173',
					'http://localhost:4173',
					'http://127.0.0.1:5173',
					// Production
					'https://pro-reactor.com',
					'http://pro-reactor.com',
					'http://5.129.249.45',
					'https://5.129.249.45',
				];
				
				// Merge env origins with defaults, removing duplicates
				if (Array.isArray(originsFromEnv) && originsFromEnv.length > 0) {
					return [...new Set([...originsFromEnv, ...defaultOrigins])];
				}
				return defaultOrigins;
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
