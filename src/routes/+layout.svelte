<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	// analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import Up from '$lib/components/up.svelte';

	import '../app.css';

	const scrollY = writable(0);
	const screenWidth = writable(0);
	let mobileNav = writable(false);

	setContext('screenWidth', screenWidth);
	setContext('scrollY', scrollY);
	setContext('mobileNav', mobileNav);
</script>

<svelte:window bind:innerWidth={$screenWidth} bind:scrollY={$scrollY} />

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Lora&family=Ubuntu&display=swap"
		rel="stylesheet"
	/>
	<!-- Page Title -->
	<title>Martin Scott</title>

	<!-- Meta Description -->
	<meta name="description" content="Weekly football picks by Pardon My Take." />

	<!-- Keywords (Note: Google doesn't rely heavily on meta keywords, but they can still be used) -->
	<meta name="keywords" content="Pardon My Take, Football Picks, NFL Picks, Weekly Picks" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://pardonmypicks.com" />

	<!-- Open Graph Meta Tags (for social media and search engines) -->
	<meta property="og:url" content="https://pardonmypicks.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Pardon My Picks - Weekly Football Picks" />
	<meta property="og:description" content="Weekly football picks by Pardon My Take." />
	<meta property="og:image" content="https://pardonmypicks.com/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Pardon My Picks" />
	<meta property="og:site_name" content="Pardon My Picks" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Pardon My Picks - Weekly Football Picks" />
	<meta name="twitter:description" content="Weekly football picks by Pardon My Take." />
	<meta name="twitter:image" content="https://pardonmypicks.com/og-image.png" />
</svelte:head>

<div class="">
	<div class="scrollbar-hide overflow-hidden">
		<slot />
	</div>

	{#if $scrollY > 500}
		<Up />
	{/if}
</div>
