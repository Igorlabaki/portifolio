import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "custom-black": "#141414",
        "custom-gray": "#232323",
        "custom-white": "#E6E2CE",
        "custom-yellow": "#FFC289",
        "custom-orange": "#D87B25",
        "custom-gray-ligth": "#525252",
      }
    },
  },
  plugins: [],
}
export default config
