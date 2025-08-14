<script lang="ts">
	import blue_sticky from '$lib/assets/blue.png';
	import green_sticky from '$lib/assets/green.png';
	import orange_sticky from '$lib/assets/orange.png';
	import pink_sticky from '$lib/assets/pink.png';

	let x: number = 100; // starting position
	let y: number = 100;
	let offsetX: number = 0;
	let offsetY: number = 0;
	let dragging: boolean = false;

	function handlePointerDown(e: PointerEvent): void {
		dragging = true;
		offsetX = e.clientX - x;
		offsetY = e.clientY - y;

		window.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('pointerup', handlePointerUp);
	}

	function handlePointerMove(e: PointerEvent): void {
		if (dragging) {
			x = e.clientX - offsetX;
			y = e.clientY - offsetY;
		}
	}

	function handlePointerUp(): void {
		dragging = false;
		window.removeEventListener('pointermove', handlePointerMove);
		window.removeEventListener('pointerup', handlePointerUp);
	}
</script>

<div
	class="relative w-64 cursor-move select-none"
	on:pointerdown={handlePointerDown}
	style="position: absolute; left: {x}px; top: {y}px;"
>
	<img
		src={blue_sticky}
		alt=""
		class="block w-full"
		draggable="false"
		on:dragstart|preventDefault
	/>
	<p
		class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-lg font-bold italic"
	>
		BOTW might be my favorite game of all time?
	</p>
</div>
