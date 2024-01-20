import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'lightGray' : '#E2E2E2',
      'gray' : '#A1A1A1',
      'black' : '#1F2024',
      'lightOrange' : '#FEE9D7',
      'white' : '#FFFFFF',
      foodType : {
        'cocktailBg'  : '#FDD015',
        'cocktailText'  : '#A38301',
        'mainBg'  : '#EE712B',
        'mainText'  : '#8B431A',
        'dessertBg'  :  '#85DC40',
        'dessertText'  :  '#508B22'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
