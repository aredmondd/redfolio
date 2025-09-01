import { writable, type Writable } from 'svelte/store';

export interface ImageModalState {
	isOpen: boolean;
	imageSrc: string;
}
export interface ImageModalStore {
	subscribe: Writable<ImageModalState>['subscribe'];
	openModal: (imageSrc: string) => void;
	closeModal: () => void;
}

const createImageModalStore = (): ImageModalStore => {
	const { subscribe, set, update } = writable<ImageModalState>({
		isOpen: false,
		imageSrc: ''
	});

	return {
		subscribe,
		openModal: (imageSrc: string): void => {
			set({ isOpen: true, imageSrc });
		},
		closeModal: (): void => {
			update((state) => ({ ...state, isOpen: false }));
		}
	};
};

export const imageModalStore = createImageModalStore();
