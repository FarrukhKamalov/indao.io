/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				playLeft: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-250px*6))' },
				},
				playRight: {
					'0%': { transform: 'translateX(calc(-250px*6))' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				playLeft: 'playLeft 40s linear infinite',
				playRight: 'playRight 40s linear infinite',
			},
		},
	},
	plugins: [require('daisyui')],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: false, // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root', // The element that receives theme color CSS variables
	},
}
