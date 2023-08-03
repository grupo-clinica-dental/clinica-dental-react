/** @type {import('tailwindcss').Config} */

const bondiblue = {
  '50': '#ebfffe',
  '100': '#cdfeff',
  '200': '#a1faff',
  '300': '#60f4ff',
  '400': '#18e4f8',
  '500': '#00c6de',
  '600': '#0097b2',
  '700': '#087d96',
  '800': '#10647a',
  '900': '#125467',
  '950': '#053747',
};

const brightturquoise = {
  '50': '#ecfeff',
  '100': '#d0f9fd',
  '200': '#a7f1fa',
  '300': '#6be5f5',
  '400': '#27cfe9',
  '500': '#0cc0df',
  '600': '#0c8eae',
  '700': '#11728d',
  '800': '#175d73',
  '900': '#184d61',
  '950': '#093243',
};

const shalimar = {
  '50': '#fefee8',
  '100': '#ffffbf',
  '200': '#fffb88',
  '300': '#fff244',
  '400': '#fee211',
  '500': '#eec904',
  '600': '#cd9c01',
  '700': '#a47004',
  '800': '#87570c',
  '900': '#734710',
  '950': '#432505',
};

const turquoiseblue = {
  '50': '#eefdfd',
  '100': '#d4f9f9',
  '200': '#aef2f3',
  '300': '#5ce1e6',
  '400': '#37d1d9',
  '500': '#1bb4bf',
  '600': '#1991a1',
  '700': '#1b7483',
  '800': '#1f5f6b',
  '900': '#1e4f5b',
  '950': '#0e343e',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bondiblue: {
          ...bondiblue,
          main: bondiblue['600'],
          darker: bondiblue['900'],
        },
        brightturquoise: {
          ...brightturquoise,
          main: brightturquoise['500'],
          darker: brightturquoise['800'],
        },
        shalimar: {
          ...shalimar,
          main: shalimar['100'],
        },
        turquoiseblue: {
          ...turquoiseblue,
          main: turquoiseblue['300'],
          darker: turquoiseblue['800'],
        },
      },
    },
  },
  plugins: [],
};
