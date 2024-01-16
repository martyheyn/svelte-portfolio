<script lang="ts">
	import { animateOnSCroll } from '$lib/utils/scroll';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let project: {
		title: string;
		description: string;
		stack: string[];
		link: string;
		github: string;
		img: {
			desktop: string;
			mobile?: string;
		};
	};

	let projectImgElement: HTMLElement;
	let projectImgIn = false;

	onMount(() => {
		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry: IntersectionObserverEntry, i) => {
				if (entry.isIntersecting) {
					return (projectImgIn = true);
				}
			});
		};

		animateOnSCroll(projectImgElement, observerCallback, '-300');
	});
</script>

<div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-24 py-4 lg:min-h-[65vh]">
	<div class="text-left col-span-1 flex flex-col items-start justify-center gap-y-6">
		<h1 class="text-3xl font-semibold">{project.title}</h1>
		<p class=" max-w-lg">{project.description}</p>

		<ul class="flex flex-col gap-y-2 text-lg pl-2 mb-1">
			{#each project.stack as lang}
				<li class="flex flex-row gap-x-4 items-center">
					<span class="w-2 h-2 bg-white rounded-full mt-1" />
					<p>{lang}</p>
				</li>
			{/each}
		</ul>

		<a href={project.github} target="_blank" class="flex flex-row gap-x-4 items-center">
			<button
				class="flex flex-row gap-x-3 navbtn bg-white text-dark before:bg-lightDark hover:text-white transition-all duration-300 ease-in-out group"
			>
				<p>Code!</p>
				<svg
					class="w-6 h-6 group-hover:invert transition-all duration-300 ease-in-out"
					clip-rule="evenodd"
					fill-rule="evenodd"
					stroke-linejoin="round"
					stroke-miterlimit="2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
						fill-rule="nonzero"
					/></svg
				>
			</button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				class="invert"
				viewBox="0 0 24 24"
				><path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/></svg
			>
		</a>
	</div>

	{#key projectImgIn}
		<div
			class={`w-full h-full flex items-center col-span-2 ${
				projectImgIn ? 'opacity-100' : 'opacity-0'
			}`}
			bind:this={projectImgElement}
			in:fly={{ duration: 300, delay: 100, y: 200 }}
		>
			<div class="w-full h-[420px] md:h-[400px]">
				<div
					class={`w-full h-full rounded-md hover:scale-[1.015] md:hover:scale-105 transition-all duration-300 ease-in-out [box-shadow:inset_0_0_10px_#fff,inset_5px_0_20px_#fff,inset_-5px_0_20px_#0ff,_inset_5px_0_50px_#fff,inset_-5px_0_50px_#0ff,0_0_10px_#fff,-5px_0_20px_#fff] hover:[box-shadow:inset_0_0_15px_#fff,inset_10px_0_20px_#fff,inset_-10px_0_20px_#0ff,_inset_10px_0_50px_#fff,inset_-10px_0_50px_#0ff,0_0_15px_#fff,-10px_0_20px_#fff]`}
				>
					<a href={project.link} target="_blank" class="w-full h-full">
						{#if project.img.desktop.includes('jpg') || project.img.desktop.includes('png')}
							{#if project.img.mobile}
								<div class="sm:hidden w-full h-full">
									<img src={project.img.mobile} alt="" class="w-full h-full rounded-md" />
								</div>
								<img
									src={project.img.desktop}
									class="w-full h-full hidden sm:block rounded-md"
									alt="project pic"
								/>
							{:else}
								<img src={project.img.desktop} class="w-full h-full rounded-md" alt="project pic" />
							{/if}
						{:else}
							<video
								autoplay
								class="rounded-md w-full h-full min-h-[400px] object-cover"
								poster="$lib/assets/projects/rms-poster.png"
							>
								<source src={project.img.desktop} type="video/webm" />
								<track kind="captions" />
							</video>
						{/if}
					</a>
				</div>
			</div>
		</div>
	{/key}
</div>
