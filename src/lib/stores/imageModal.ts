import { writable } from 'svelte/store';

export const modalImage = writable<null | { src: string; alt: string }>(null);
