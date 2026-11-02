import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } from '$app/env/private';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken() {
	const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: SPOTIFY_REFRESH_TOKEN
		})
	});

	if (!response.ok) {
		throw new Error(`Failed to refresh token: ${response.status}`);
	}

	return response.json();
}

function formatTrack(item, isPlaying) {
	return {
		isPlaying,
		title: item.name,
		artist: item.artists.map((a) => a.name).join(', '),
		album: item.album.name,
		albumImageUrl: item.album.images[0]?.url,
		songUrl: item.external_urls.spotify
	};
}

async function getLastPlayed(accessToken) {
	const res = await fetch(RECENTLY_PLAYED_ENDPOINT, {
		headers: { Authorization: `Bearer ${accessToken}` }
	});

	if (!res.ok) return { isPlaying: false };

	const data = await res.json();
	const item = data.items?.[0]?.track;

	return item ? formatTrack(item, false) : { isPlaying: false };
}

export async function GET() {
	try {
		const { access_token } = await getAccessToken();

		const res = await fetch(NOW_PLAYING_ENDPOINT, {
			headers: { Authorization: `Bearer ${access_token}` }
		});

		// 204 = nothing currently playing
		if (res.status === 204 || res.status >= 400) {
			return Response.json(await getLastPlayed(access_token));
		}

		const song = await res.json();

		if (!song?.item) {
			return Response.json(await getLastPlayed(access_token));
		}

		return Response.json(formatTrack(song.item, song.is_playing));
	} catch (err) {
		console.error('Now playing fetch failed:', err);
		return Response.json({ isPlaying: false });
	}
}
