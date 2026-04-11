/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		zIndex: {
			'999': 999,
			'0': 0,
		   '10': 10,
		   '20': 20,
		   '30': 30,
		   '40': 40,
		   '50': 50,
		   '25': 25,
		   '50': 50,
		   '75': 75,
		   '100': 100,
			'auto': 'auto',
		  },
		extend: {
			backgroundImage: {
				'ncafa': "linear-gradient(to bottom,#078193 10%,#2e4696 90%)",
				'ncafa-2': "linear-gradient(90deg, rgba(187,215,115,1) 0%, rgba(86,182,74,1) 84%);",
				'ncafa-3': "linear-gradient(180deg, rgba(187,215,115,1) 0%, rgba(30,120,180,1) 84%);",
				'ncafa-4': "linear-gradient(90deg, rgba(187,215,115,1) 2%, rgba(86,182,74,1) 25%);",
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "light", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root",
	  },
	
}
