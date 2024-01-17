<script lang="ts">
	import { scrollToSection } from '$lib/utils/scroll';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	import Hambuger from './hambuger.svelte';
	import MobileMenu from './mobile-menu.svelte';

	const mobileNav: Writable<boolean> = getContext('mobileNav');

	function toggleMobile() {
		mobileNav.update((value) => !value);
	}

	function clickOutside(node: any) {
		const handleClick = (event: Event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				console.log('hereee');

				mobileNav.set(false);
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<!-- Bar Name here -->
<nav
	class="bg-dark bg-opacity-30 z-20 h-16 w-full flex justify-start sm:justify-center items-center sm:px-4 md:px-12 transition-all duration-300 ease-in-out"
	use:clickOutside
>
	<div class="">
		<div
			class="hidden sm:flex justify-around items-center transition-all duration-300 sm:gap-x-4 lg:gap-x-8"
		>
			<div class="navbtn">
				<button on:click={(event) => scrollToSection(event, 'home')}>Home</button>
			</div>

			<div class="navbtn">
				<button on:click={(event) => scrollToSection(event, 'about')}>About Me</button>
			</div>

			<div class="navbtn">
				<button on:click={(event) => scrollToSection(event, 'skills')}>Skills</button>
			</div>

			<div class="navbtn">
				<button on:click={(event) => scrollToSection(event, 'projects')}>Projects</button>
			</div>

			<div class="navbtn">
				<a
					href="https://drive.google.com/file/d/15fNq4uycYf0foLBDiuPpj6Ss5GsrbR99/view?usp=sharing"
					target="_blank">Resume</a
				>
			</div>
		</div>
		<!-- mobile -->
		<div class="sm:hidden text-white absolute z-20 top-2 left-1">
			<Hambuger open={$mobileNav} on:toggleOpen={toggleMobile} />
		</div>
	</div>
	{#if $mobileNav}
		<MobileMenu on:toggleOpen={toggleMobile} />
	{/if}
</nav>
