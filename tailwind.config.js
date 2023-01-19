/* eslint-env node */
module.exports = {
	content: (() => {
		const pathsToScan = ['./src/**/*.{js,jsx,ts,tsx}'];
		return pathsToScan;
	})(),

	// purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	],
	theme: {
		extend: {
			colors: {
				primary: '#0071B8'
			},
			fontFamily: {
				squada: 'Squada One',
				smooch: 'Smooch Sans',
				sf: 'SF UI Display',
				sora: 'Sora'
			}
		}
	}
};
