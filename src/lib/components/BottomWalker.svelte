<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	const WALKER_SIZE = 82;
	const SPEED_PX_PER_SEC = 150;

	let x = 0;
	let facingRight = true;

	let rafId = 0;
	let lastTs = 0;
	let velocity = SPEED_PX_PER_SEC;

	function update(ts: number) {
		if (lastTs === 0) {
			lastTs = ts;
		}

		const dt = (ts - lastTs) / 1000;
		lastTs = ts;

		x += velocity * dt;

		const maxX = Math.max(0, window.innerWidth - WALKER_SIZE);

		if (x <= 0) {
			x = 0;
			velocity = Math.abs(velocity);
			facingRight = true;
		}

		if (x >= maxX) {
			x = maxX;
			velocity = -Math.abs(velocity);
			facingRight = false;
		}

		rafId = window.requestAnimationFrame(update);
	}

	function handleResize() {
		const maxX = Math.max(0, window.innerWidth - WALKER_SIZE);
		x = Math.min(x, maxX);
	}

	onMount(() => {
		if (!browser) {
			return;
		}

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		rafId = window.requestAnimationFrame(update);
		window.addEventListener('resize', handleResize);

		return () => {
			window.cancelAnimationFrame(rafId);
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		if (!browser) {
			return;
		}

		window.cancelAnimationFrame(rafId);
		window.removeEventListener('resize', handleResize);
	});
</script>

<div class="walker-wrap" aria-hidden="true">
	<div class="walker-track" style={`translate: ${x}px 0;`}>
		<div class="walker" class:flip={!facingRight}></div>
	</div>
</div>

<style>
	.walker-wrap {
		position: fixed;
		left: 0;
		right: 0;
		bottom: calc(3.5rem - 24px);
		height: 88px;
		pointer-events: none;
		z-index: 60;
		overflow: hidden;
	}

	.walker-track {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 82px;
		height: 82px;
		will-change: translate;
	}

	.walker {
		position: absolute;
		inset: 0;
		width: 82px;
		height: 82px;
		background-image: url('/sprites/owlet/Owlet_Monster_Walk_6.png');
		background-repeat: no-repeat;
		background-size: 492px 82px;
		background-position: 0 0;
		image-rendering: pixelated;
		animation: owlet-frames 650ms steps(6) infinite;
		will-change: transform, background-position;
	}

	.walker.flip {
		transform: scaleX(-1);
	}

	@keyframes owlet-frames {
		from {
			background-position: 0 0;
		}

		to {
			background-position: -492px 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.walker {
			animation: none;
		}
	}
</style>
