<script lang="ts">
	import { fly } from 'svelte/transition';
	import { scrollToSection } from '$lib/utils/scroll';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const mobileNav: Writable<boolean> = getContext('mobileNav');

	function mobileNavClick(
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		},
		id: string
	) {
		mobileNav.set(false);
		scrollToSection(event, id);
	}
</script>

<!-- want this to slide in from the left and take up 90% of screen -->
<nav
	class="sm:hidden bg-dark bg-opacity-[.99] text-white absolute top-16 z-40 w-full flex flex-col justify-center items-center transition-all duration-300"
	transition:fly={{ y: -200, duration: 500 }}
>
	<button on:click={(event) => mobileNavClick(event, 'about')} class="mobile-nav-item"
		>About Me</button
	>
	<button on:click={(event) => mobileNavClick(event, 'skills')} class="mobile-nav-item"
		>Skills</button
	>
	<button on:click={(event) => mobileNavClick(event, 'projects')} class="mobile-nav-item"
		>Projects</button
	>
	<a
		class="mobile-nav-item"
		href="https://drive.google.com/file/d/15fNq4uycYf0foLBDiuPpj6Ss5GsrbR99/view?usp=sharing"
		target="_blank">Resume</a
	>
</nav>
