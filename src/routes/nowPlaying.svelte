<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  type NowPlayingData = {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
  };

  let track = $state<NowPlayingData | null>(null);
  let loading = $state(true);
  let interval: ReturnType<typeof setInterval>;

  async function fetchNowPlaying() {
    try {
      const res = await fetch('/api/now-playing');
      track = await res.json();
    } catch (err) {
      track = { isPlaying: false };
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    fetchNowPlaying();
    interval = setInterval(fetchNowPlaying, 30000); // poll every 30s
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if !loading}
  <div class="flex items-center gap-3 p-2">
    {#if track?.isPlaying}
      <img
        src={track.albumImageUrl}
        alt={track.album}
        class="h-12 w-12 rounded-md"
      />
      <div class="flex flex-col text-sm">
        <span class="text-[0.7rem] uppercase tracking-wide opacity-60">
          Now playing
        </span>
        <a
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold hover:underline"
        >
          {track.title}
        </a>
        <span class="opacity-75">{track.artist}</span>
      </div>
    {:else}
      <div class="flex flex-col text-sm">
        <span class="text-[0.7rem] uppercase tracking-wide opacity-60">
          Not currently playing
        </span>
      </div>
    {/if}
  </div>
{/if}