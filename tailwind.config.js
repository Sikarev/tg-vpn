module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'label-primary': '#FFFFFF',
        'label-secondary': '#EBEBF5',
        'ui-dark': '#3D3D3D',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
