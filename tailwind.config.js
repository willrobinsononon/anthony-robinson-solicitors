/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'nav-grey': 	'#515559',
        'nav-hover': '#8b8f99',
        'ar-orange': '#ee7117',
        'ar-orange-hi': '#ffa44a',
        'ar-blue': '#0a3142',
        'ar-blue-mid': '#3d6475',
        'ar-green': '#0a421b',
        'ar-b-grey': '#798592',
        'ar-o-grey': '#5e524d',
        'ar-o-grey-hi': '#efefec',
        'ar-ui-green': '#acff62',        
      },
      fontFamily: {
        'title': 'Young Serif, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        'sans': 'Libre Franklin, Helvetica Neue LT, Helvetica Neue, Helvetica, sans-serif' ,
        'serif': 'Caudex, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        'mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      boxShadow: {
        'nav': '0 2px 3px 0 rgb(0 0 0 / 0.1), 0 2px 2px -1px rgb(0 0 0 / 0.1);'
      },
      spacing: {
        'vh-nav-sm': 'calc(100vh - 79px)',
        'vh-nav': 'calc(100vh - 65px)'
      }
    },
  },
  plugins: [],
}