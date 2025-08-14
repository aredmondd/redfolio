import { modalImage } from '$lib/stores/imageModal';

export function openModal(node: HTMLImageElement) {
	const handleClick = () => {
		modalImage.set({ src: node.src, alt: node.alt });
	};

	node.addEventListener('click', handleClick);
	node.style.cursor = 'zoom-in';

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
}
