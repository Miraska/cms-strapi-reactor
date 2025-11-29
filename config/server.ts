export default ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	url: env('PUBLIC_URL', 'http://localhost:1337'),
	proxy: env.bool('PROXY', true),
	app: {
		keys: env.array('APP_KEYS'),
	},
	// Telemetry settings - can be disabled in production
	telemetry: {
		disabled: env.bool('STRAPI_TELEMETRY_DISABLED', false),
	},
});
