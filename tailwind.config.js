const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				border: 'hsl(var(--border))',
				accent: 'hsl(var(--accent))',
				destructive: 'hsl(var(--destructive))'
			},
			scale: {
				flip: '-1'
			},
			fontFamily: {
				handlee: ['Handlee']
			},
			keyframes: {
				wiggle: {
					'0%': {
						transform: 'scale(1) rotate(0deg)'
					},
					'25%': {
						transform: 'scale(1.05) rotate(-5deg)'
					},
					'50%': {
						transform: 'scale(1) rotate(5deg)'
					},
					'75%': {
						transform: 'scale(1.05) rotate(-2.5deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)'
					}
				},
				slide: {
					from: {
						transform: 'translateX(0%)'
					},
					to: {
						transform: 'translateX(calc(-100% - 1rem))'
					}
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				slide: 'slide 30s linear infinite'
			}
		},
		screens: {
			xs: '475px',
			...defaultTheme.screens
		}
	},
	plugins: []
};
