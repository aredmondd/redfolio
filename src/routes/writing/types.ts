export type SubstackPost = {
	audience: string;
	audience_before_archived: string | null;
	canonical_url: string;
	default_comment_sort: string | null;
	editor_v2: boolean;
	exempt_from_archive_paywall: boolean;
	free_unlock_required: boolean;
	id: number;
	podcast_art_url: string | null;
	podcast_duration: number | null;
	podcast_preview_upload_id: number | null;
	podcast_upload_id: number | null;
	podcast_url: string | null;
	post_date: string;
	updated_at: string;
	publication_id: number;
	search_engine_description: string | null;
	search_engine_title: string | null;
	section_id: number | null;
	should_send_free_preview: boolean;
	show_guest_bios: boolean;
	slug: string;
	social_title: string | null;
	subtitle: string | null;
	teaser_post_eligible: boolean;
	title: string;
	type: string;
	video_upload_id: number | null;
	write_comment_permissions: string;
	meter_type: string;
	live_stream_id: number | null;
	is_published: boolean;
	restacks: number;
	reactions: Record<string, number>;
	top_exclusions: unknown[];
	pins: unknown[];
	section_pins: unknown[];
	has_shareable_clips: boolean;
	previous_post_slug: string | null;
	next_post_slug: string | null;
	cover_image: string | null;
	cover_image_is_square: boolean;
	cover_image_is_explicit: boolean;
	videoUpload: unknown | null;
	podcastFields: PodcastFields;
	podcastUpload: unknown | null;
	podcastPreviewUpload: unknown | null;
	voiceover_upload_id: number | null;
	voiceoverUpload: unknown | null;
	has_voiceover: boolean;
	description: string | null;
	body_html: string;
	has_dynamic_content: boolean;
	truncated_body_text: string;
	wordcount: number;
	post_preview_limit: number | null;
	language: string;
	postTags: unknown[];
	postCountryBlocks: unknown[];
	headlineTest: unknown | null;
	coverImagePalette: CoverImagePalette;
	publishedBylines: PublishedByline[];
	reaction: string | null;
	reaction_count: number;
	comment_count: number;
	child_comment_count: number;
	is_geoblocked: boolean;
	hasCashtag: boolean;
};

type PodcastFields = {
	post_id: number;
	podcast_episode_number: number | null;
	podcast_season_number: number | null;
	podcast_episode_type: string | null;
	should_syndicate_to_other_feed: boolean | null;
	syndicate_to_section_id: number | null;
	hide_from_feed: boolean;
	free_podcast_url: string | null;
	free_podcast_duration: number | null;
	preview_contains_ad: boolean;
	was_imported_self_serve_sync: boolean;
	draft_free_podcast_url: string | null;
	draft_free_podcast_duration: number | null;
};

type CoverImagePalette = {
	Vibrant: PaletteColor;
	DarkVibrant: PaletteColor;
	LightVibrant: PaletteColor;
	Muted: PaletteColor;
	DarkMuted: PaletteColor;
	LightMuted: PaletteColor;
};

type PaletteColor = {
	rgb: [number, number, number];
	population: number;
};

type PublishedByline = {
	id: number;
	name: string;
	handle: string;
	photo_url: string | null;
	bio: string | null;
	profile_set_up_at: string | null;
	reader_installed_at: string | null;
	publicationUsers: PublicationUser[];
	is_guest: boolean;
	bestseller_tier: string | null;
	status: BylineStatus;
};

type PublicationUser = {
	id: number;
	user_id: number;
	publication_id: number;
	role: string;
	public: boolean;
	is_primary: boolean;
	publication: Publication;
};

type Publication = {
	id: number;
	name: string;
	subdomain: string;
	custom_domain: string | null;
	custom_domain_optional: boolean;
	hero_text: string | null;
	logo_url: string | null;
	author_id: number | null;
	primary_user_id: number | null;
	theme_var_background_pop: string | null;
	created_at: string;
	email_from_name: string | null;
	copyright: string | null;
	founding_plan_name: string | null;
	community_enabled: boolean;
	invite_only: boolean;
	payments_state: string;
	language: string | null;
	explicit: boolean;
	homepage_type: string;
	is_personal_mode: boolean;
	logo_url_wide: string | null;
};

type BylineStatus = {
	bestsellerTier: string | null;
	subscriberTier: string | null;
	leaderboard: string | null;
	vip: boolean;
	badge: string | null;
	subscriber: string | null;
};
