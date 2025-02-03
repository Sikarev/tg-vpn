// FIXME: vite ignores config when build
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'label-primary': '#FFFFFF',
        'label-secondary': '#EBEBF5',
        'ui-dark': '#3D3D3D80',
        'ui-primary': '#5A60FF',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
