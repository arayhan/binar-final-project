/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				primary: {
					100: '#d5e6e8',
					200: '#abced0',
					300: '#81b5b9',
					400: '#579da1',
					DEFAULT: '#2d848a',
					500: '#2d848a',
					600: '#246a6e',
					700: '#1b4f53',
					800: '#123537',
					900: '#091a1c',
				},
				secondary: {
					100: '#f3f9fc',
					200: '#e6f2f9',
					300: '#daecf6',
					400: '#cde5f3',
					DEFAULT: '#c1dff0',
					500: '#c1dff0',
					600: '#9ab2c0',
					700: '#748690',
					800: '#4d5960',
					900: '#272d30',
				},
			},
			fontFamily: {
				primary: ['"Inter"', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
	],
};
