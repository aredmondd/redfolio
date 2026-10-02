import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	SPOTIFY_CLIENT_ID: { static: true },
	SPOTIFY_CLIENT_SECRET: { static: true },
	SPOTIFY_REFRESH_TOKEN: { static: true }
});
