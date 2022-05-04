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
          'base-100': 'hsl(0, 0%, 99%)',
          'base-200': 'hsl(205, 20%, 94%)',
          'base-300': 'hsl(210, 20%, 89%)',
          primary: 'hsl(214, 55%, 50%)',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: 'hsl(225, 25%, 32%)',
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
