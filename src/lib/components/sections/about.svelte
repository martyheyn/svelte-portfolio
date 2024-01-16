<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const scrollY: Writable<number> = getContext('scrollY');
</script>

<div
	id="about"
	class="py-16 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto transition-all duration-300 ease-in-out"
>
	<div
		class="shadow-2xl py-12 px-4 md:px-12 transition-all duration-300 ease-in-out bg-lightDark flex flex-col lg:flex-row lg:gap-x-16 gap-y-8 rounded-md relative overflow-hidden"
	>
		<div class="flex flex-col gap-y-6 max-w-xl mx-auto relative z-10">
			<h1 class="text-4xl font-bold">Hi!</h1>
			<p class="mb-2">
				I'm Marty. I am a self-taught software engineer (shoutout to Youtube) with a business
				background. After getting my MBA, I decided to get some technical skills and ended up in the
				beautiful never-ending cycle of triumph to imposter syndrome. I am currently working as a
				software engineer at TechSlice, helping startups bring their ideas to life.
			</p>
			<p>
				Most of my experience is in creating beautiful UI/UX for users, but I also have backend
				chops as well, working in analytics and databases for years before pivoting to development.
			</p>
			<p class="">
				Aside from typing into a computer, I enjoy getting outside and exploring nature. I love to
				hike and backpack when the weather allows for it. I also enjoy watching men & women run
				around in uniforms while trying to complete an objective usually involving a ball of some
				sort.
			</p>
			<p></p>
		</div>


		<!-- Sparkling Stars Background -->
		
		<div
			class="about-scroller-bottom -top-[30%] left-[4%] pulse"
			style:transform={`translateY(${$scrollY / 2}px)`}
		></div>
		<div
			class="about-scroller-bottom -top-[30%] left-[8%] pulse"
			style:transform={`translateY(${$scrollY / 1.2}px)`}
		></div>
		<div
			class="about-scroller-bottom -top-[30%] left-[12%] pulse"
			style:transform={`translateY(${$scrollY / 1.5}px)`}
		></div>
		<div
			class="about-scroller-bottom -top-[30%] left-[16%] pulse"
			style:transform={`translateY(${$scrollY / 1.8}px)`}
		></div>

		<!-- right -->
		<div
			class="about-scroller-top -bottom-[30%] right-[4%] pulse"
			style:transform={`translateY(-${$scrollY / 1.5}px)`}
		></div>
		<div
			class="about-scroller-top -bottom-[30%] right-[8%] pulse"
			style:transform={`translateY(-${$scrollY / 1.8}px)`}
		></div>
		<div
			class="about-scroller-top -bottom-[30%] right-[12%] pulse"
			style:transform={`translateY(-${$scrollY / 1.2}px)`}
		></div>
		<div
			class="about-scroller-top -bottom-[30%] right-[16%] pulse"
			style:transform={`translateY(-${$scrollY / 1.4}px)`}
		></div>
	</div>
</div>

<style>
	.pulse {
		animation: pulse-animation 5s infinite;
	}
	@keyframes pulse-animation {
		0% {
			box-shadow: 0 0 2 5px rgba(72, 171, 224, 0.2);
		}
		50% {
			box-shadow: 0 0 10px 5px rgba(72, 171, 224, 0.1);
		}
		100% {
			box-shadow: 0 0 2 5px rgba(72, 171, 224, 0.2);
		}
	}
</style>
