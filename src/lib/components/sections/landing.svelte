<script lang="ts">
	import { onMount } from 'svelte';
	import Nav from '../nav/nav.svelte';
	import { fade, fly } from 'svelte/transition';

	let initialLoad = false;
	onMount(() => {
		initialLoad = true;
	});
</script>

{#key initialLoad}
	<div id="home" class="relative custom-img bg-fixed">
		<Nav />
		<div class="w-full h-[2px] bg-white absolute z-20"></div>
		<section class="h-[88vh]">
			<div
				class="z-20 px-8 absolute top-[42%] right-1/4 md:right-1/2 lg:right-[58%] translate-x-1/4 -translate-y-1/3 flex flex-col items-start text-left gap-y-8 w-full md:w-[60%] lg:w-[50%] transition-all duration-300 ease-in-out"
				in:fade={{ duration: 500, delay: 750 }}
			>
				<h1 class="text-5xl md:text-7xl mb-2">Hey! I'm Marty</h1>

				<p class="text-xl md:text-2xl lg:w-[80%]">
					I am a Fullstack Developer crafting scalable solutions, delivering exceptional user
					experiences, and fostering strong client relationships
				</p>

				<div class="">
					<button
						class="bg-lightDark px-6 py-3 cursor-pointer border border-white rounded-md transition-all duration-300 ease-in-out hover:bg-dark"
						in:fly={{ duration: 400, delay: 1250, y: 100 }}>Get in Touch</button
					>
				</div>
			</div>
		</section>
	</div>
{/key}

<style>
	.custom-img {
		background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			url('$lib/assets/landing/night-mountains.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		animation: fadein 1s;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
