/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#272829',
				lightDark: '#3A3B3C',
				slategray: '#61677A',
				platnuim: '#D8D9DA'
			}
		},
		fontFamily: {
			header: ['Lora', 'serif'],
			paragraph: ['Ubuntu', 'serif']
		}
	},
	plugins: []
};
