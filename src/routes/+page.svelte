<script lang="ts">
	import Landing from '$lib/components/sections/landing.svelte';
	import Skills from '$lib/components/sections/skills.svelte';
	import About from '$lib/components/sections/about.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="bg-dark text-white">
	<Landing />

	<div class="bg-gradient-to-b from-[rgba(6,12,18,0.9)] from-[10%] via-[#1a1a1a] via-[35%] to-dark">
		<About />
	</div>

	<div class="px-8 md:px-16 max-w-7xl mx-auto transition-all duration-300 ease-in-out">
		<Skills />

		<Projects />
	</div>

	<Footer />
</div>
