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

const mainwhite = {
  '50': '#fffff7',
  '100': '#feffd5',
  '200': '#fefcaa',
  '300': '#fdf774',
  '400': '#fbe73c',
  '500': '#f9d816',
  '600': '#eabb0c',
  '700': '#c2920c',
  '800': '#9a7012',
  '900': '#7c5c12',
  '950': '#432f07',
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

const secondwhite = {
  '50': '#fffff2',
  '100': '#fefec7',
  '200': '#fdfd8a',
  '300': '#fcf64d',
  '400': '#fbea24',
  '500': '#f5cd0b',
  '600': '#d9a106',
  '700': '#b47509',
  '800': '#925a0e',
  '900': '#784a0f',
  '950': '#452703',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maincolor: {
          ...bondiblue,
          main: bondiblue['600'],
          darker: bondiblue['900'],
        },
        secondary: {
          ...brightturquoise,
          main: brightturquoise['500'],
          darker: brightturquoise['800'],
        },
        third: {
          ...mainwhite,
          main: mainwhite['50'],
        },
        fourth: {
          ...turquoiseblue,
          main: turquoiseblue['300'],
          darker: turquoiseblue['800'],
        },
        fifthwhite: {
          ...secondwhite,
          main: secondwhite['50'],
        },
      },
    },
  },
  plugins: [],
};
