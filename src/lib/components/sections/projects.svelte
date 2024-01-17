<script lang="ts">
	import ProjectRow from '../project-row.svelte';

	const projects = [
		{
			title: 'Rocky Mountain Slam',
			description:
				'As an avid through hiker / masochist, my borther decided to embark on a journey blazing his own trail through the rockies. I built this site so my mom could track him better and not go totally insane with stress',
			stack: ['Svelte', 'Typescript', 'TailwindCSS', 'Leaflet', 'AWS S3/Cloudfront'],
			link: 'https://www.rockymountainslam.com/',
			github: 'https://github.com/martyheyn/rocky-mnt-slam',
			img: {
				desktop: '/projects/Rocky_Mountain_Slam.webm'
			}
		},
		{
			title: 'Random Site',
			description:
				'Site I built for a friends business idea (Classic). The company never came to fruition but the site is built',
			stack: ['Svelte', 'Typescript'],
			link: 'https://ultra-site-mk3oi4ox8-martyheyn.vercel.app/',
			github: 'https://github.com/martyheyn/ultra-site',
			img: {
				desktop: '/projects/ultra-desktop.png',
				mobile: '/projects/ultra-mobile.png'
			}
		},
		{
			title: 'Pardon My Picks',
			description: 'Built for a podcast to help listeners track a competetion',
			stack: ['Sveltekit', 'PlanetScale', 'Prisma', 'Python', 'Typescript', 'TailwindCSS'],
			link: 'https://www.pardonmypicks.com/',
			github: 'https://github.com/martyheyn/pardon-my-picks',
			img: {
				desktop: '/projects/pmt-stats-header.png',
				mobile: '/projects/pmt-phoneveiw.png'
			}
		}
	];
</script>

<section id="projects" class="w-full h-full mt-16 lg:mt-40 mb-16">
	<div class="">
		<h1
			class="w-fit mb-12 font-semibold text-6xl after:content-[''] after:block after:bg-white after:my-6 after:h-[2px] after:w-[60%]"
		>
			Projects
		</h1>
		<h1 class="my-8 lg:my-12 text-xl max-w-3xl">
			I signed a NDA, so I cannot disclose work related projects. You will have to take my word that
			they are very cool, check out my resume for the scope and stack of those. Here are some
			personal projects I have worked on...
		</h1>

		<div class="flex flex-col gap-y-20 lg:gap-y-32">
			{#each projects as project}
				<ProjectRow {project} />
			{/each}
		</div>
	</div>
</section>
