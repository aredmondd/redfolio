import { json } from '@sveltejs/kit';
import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

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

export async function GET() {
	try {
		const { access_token } = await getAccessToken();

		const res = await fetch(NOW_PLAYING_ENDPOINT, {
			headers: { Authorization: `Bearer ${access_token}` }
		});

		// 204 = nothing currently playing
		if (res.status === 204 || res.status > 400) {
			return json({ isPlaying: false });
		}

		const song = await res.json();

		if (!song?.item) {
			return json({ isPlaying: false });
		}

		return json({
			isPlaying: song.is_playing,
			title: song.item.name,
			artist: song.item.artists.map((a) => a.name).join(', '),
			album: song.item.album.name,
			albumImageUrl: song.item.album.images[0]?.url,
			songUrl: song.item.external_urls.spotify
		});
	} catch (err) {
		console.error('Now playing fetch failed:', err);
		return json({ isPlaying: false });
	}
}
