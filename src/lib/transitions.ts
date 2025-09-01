import type { TransitionConfig } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

interface FadeSlideParams {
	delay?: number;
	duration?: number;
	y?: number;
}

export function fadeSlide(
	node: Element,
	{ delay = 0, duration = 500, y = 48 }: FadeSlideParams = {}
): TransitionConfig {
	return {
		delay,
		duration,
		easing: cubicOut,
		css: (t: number) => `
			opacity: ${t};
			transform: translateY(${(1 - t) * y}px);
		`
	};
}
