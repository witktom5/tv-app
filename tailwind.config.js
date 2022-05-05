module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-100': 'hsl(0, 0%, 97%)',
          'base-200': 'hsl(205, 20%, 90%)',
          'base-300': 'hsl(210, 20%, 85%)',
          primary: 'hsl(214, 55%, 50%)',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: 'hsl(222, 35%, 32%)',
          'primary-content': '#B3C5EF',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
