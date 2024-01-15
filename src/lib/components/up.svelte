<script lang="ts">
	import { scrollToSection } from '$lib/utils/scroll';
	import { draw } from 'svelte/transition';
	import { quadIn, quadInOut } from 'svelte/easing';
</script>

<div
	class="fixed bottom-4 right-2 lg:bottom-6 lg:right-6 opacity-50 hover:opacity-100 transition-all duration-150 ease-in-out"
>
	<button
		class="bg-primary text-white p-0 w-12 h-12 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:[box-shadow:inset_0_0_50px_#fff,inset_20px_0_80px_#f0f,inset_-20px_0_80px_#0ff,_inset_20px_0_300px_#f0f,inset_-20px_0_300px_#0ff,0_0_50px_#fff,-10px_0_80px_#f0f,10px_0_80px_#0ff]"
		on:click={(event) => scrollToSection(event, 'home')}
	>
		<svg
			clip-rule="evenodd"
			fill-rule="evenodd"
			stroke-linejoin="round"
			stroke-miterlimit="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-white fill-none"
		>
			<!-- Circle -->
			<circle
				in:draw={{ duration: 400, easing: quadInOut }}
				cx="12"
				cy="12"
				r="12"
				stroke="white"
				stroke-width="1"
				fill="none"
			/>

			<!-- Arrow Path -->
			<path
				in:draw={{ duration: 500, delay: 450, easing: quadIn }}
				d="m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z"
				fill-rule="nonzero"
			/>
		</svg>
	</button>
</div>
