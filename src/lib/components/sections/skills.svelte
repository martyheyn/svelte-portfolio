<script lang="ts">
	import { borderRaduis } from '$lib/utils/border';
	import { animateOnSCroll } from '$lib/utils/scroll';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { TransitionConfig } from 'svelte/transition';

	const languages = [
		{ label: 'JavaScript', img: 'src/lib/assets/skill-icons/javascript.svg' },
		{ label: 'TypeScript', img: 'src/lib/assets/skill-icons/typescript.svg' },
		{ label: 'Node.JS', img: 'src/lib/assets/skill-icons/nodejs.svg' },
		{ label: 'React', img: 'src/lib/assets/skill-icons/reactjs.svg' },
		{ label: 'Angular', img: 'src/lib/assets/skill-icons/angular.svg' },
		{ label: 'Vue', img: 'src/lib/assets/skill-icons/vue.svg' },
		{ label: 'Sveltekit', img: 'src/lib/assets/skill-icons/svelte.svg' },
		{
			label: 'AWS',
			img: 'src/lib/assets/skill-icons/aws.svg',
			microServices: [
				{ label: 'AWS Amplify', img: 'src/lib/assets/skill-icons/aws-amplify.svg' },
				{ label: 'AWS Cognito', img: 'src/lib/assets/skill-icons/aws-cognito.svg' },
				{ label: 'AWS DynamoDB', img: 'src/lib/assets/skill-icons/aws-dynamodb.svg' },
				{ label: 'AWS Lambda', img: 'src/lib/assets/skill-icons/aws-lamdba.svg' },
				{ label: 'AWS AppSync', img: 'src/lib/assets/skill-icons/aws-appsync.svg' }
			]
		},
		{ label: 'Git', img: 'src/lib/assets/skill-icons/git.svg' },
		{ label: 'TailwindCSS', img: 'src/lib/assets/skill-icons/tailwindcss.svg' }
	];

	type TransParams = { duration?: number };
	type Trans = (node: Element, params?: TransParams) => TransitionConfig;
	const coolAnimation: Trans = (node, { duration = 300 }: TransParams = {}) => {
		return {
			duration,
			easing: quintOut,
			css: (t: number, u: number) => {
				// can you give me a formula using t and u to construct 3-point bezier curve
				const roller = 1.2 * -u * (1 - u);

				return `
					transform: translateX(${u * -500}px) translatey(${roller * -100}px);
					opacity: ${t};
				`;
			}
		};
	};

	let titleElement: HTMLElement;
	let gridElement: HTMLElement[] = [];
	let titleIn = false;
	let gridMap: { [key: number]: boolean } = {};

	// Hooking up the element to the Intersection Observer
	onMount(() => {
		// title animation
		const observerCallbackTitle = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry: IntersectionObserverEntry, i) => {
				if (entry.isIntersecting) {
					return (titleIn = true);
				}
			});
		};
		animateOnSCroll(titleElement, observerCallbackTitle, '-75');

		// grid items animation
		const observerCallbackGrid = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry: IntersectionObserverEntry, i) => {
				if (entry.isIntersecting) {
					if (gridMap[i]) {
						i = parseInt(Object.keys(gridMap).reduce((a, b) => (a > b ? a : b))) + 1;
					}
					return (gridMap[i] = true);
				}
			});
		};

		animateOnSCroll(gridElement, observerCallbackGrid, '-100');
	});

	// tailwindcss props for AWS shootouts
	const awsPositioning: { [key: number]: string } = {
		0: 'group-hover:left-[-120px] group-hover:top-[188px]',
		1: 'group-hover:left-[-25px] group-hover:top-[188px]',
		2: 'group-hover:left-[70px] group-hover:top-[188px]',
		3: 'group-hover:left-[165px] group-hover:top-[188px]',
		4: 'group-hover:left-[260px] group-hover:top-[188px]'
	};
</script>

<section id="skills" class="my-12">
	<div class="my-8">
		<h1
			class="w-fit mb-12 font-semibold text-6xl after:content-[''] after:block after:bg-white after:my-6 after:h-[2px] after:w-[60%]"
		>
			My Skills
		</h1>
		{#key titleIn}
			<h1
				class={`text-lg font-semibold ${titleIn ? 'opacity-100' : 'opacity-0'}`}
				bind:this={titleElement}
				in:coolAnimation={{ duration: 500 }}
			>
				I'm pretty solid with these Languages
			</h1>
		{/key}
	</div>

	<div class={`grid grid-cols-2  md:grid-cols-5 gap-[2px] rounded-md`}>
		<!-- get font type for each framework / language -->
		{#each languages as language, indx}
			<div bind:this={gridElement[indx]}>
				{#key gridMap[indx]}
					<div
						class={`flex flex-col gap-y-4 justify-center items-center px-4 pt-4 pb-6 border-white text-white hover:bg-lightDark hover:rounded-md transition-all duration-300 ease-in-out hover:scale-[1.10] hover:border-0 hover:shadow-2xl hover:z-20 z-10 
						${borderRaduis(indx, languages.length)}
						${gridMap[indx] ? 'opacity-100' : 'opacity-0'}
						transition-all duration-300 ease-in-out relative group`}
						in:fly={{ delay: indx * 100, duration: 300, x: -70 }}
					>
						<div class="text-xl lg:text-2xl transition-all duration-300 ease-in-out">
							{language.label}
						</div>
						<img
							src={language.img}
							class={`w-24 h-24 ${language.label === 'Git' ? 'invert' : ''}`}
							alt="hello"
						/>

						<!-- AWS Microservices -->
						{#if language.microServices}
							{#each language.microServices as micro, i}
								<div
									class={`absolute ${awsPositioning[i]} left-16 top-0 flex justify-center items-center w-24 transition-all duration-300 hover:z-20 z-10 opacity-0 lg:opacity-100`}
								>
									<div class="transition-opacity duration-300 ease-in-out hidden group-hover:block">
										<div
											class={`flex flex-col w-full gap-y-2 justify-center items-center p-2 rounded-md border border-white text-white  hover:bg-lightDark hover:scale-[1.10] hover:border-none hover:shadow-2xl transition-all duration-300 ease-in-out`}
										>
											<div class="text-sm text-center">{micro.label}</div>
											<img src={micro.img} class="w-8 h-8" alt="aws microservices" />
										</div>
									</div>
								</div>
							{/each}
						{/if}
					</div>
				{/key}
			</div>
		{/each}
	</div>
</section>
