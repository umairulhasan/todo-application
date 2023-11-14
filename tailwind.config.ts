import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend :{
    colors : {
      
      "MyBestColor1": "#865DC1",
      "MyBestSecoundColor1": "#B29AD4",
    }
  }
  },
  plugins: [],
}
export default config
