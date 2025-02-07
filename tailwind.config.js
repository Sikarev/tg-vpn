// FIXME: vite ignores config when build
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'label-primary': '#FFFFFF',
        'label-secondary': '#EBEBF560',
        'ui-dark-1': '#3D3D3D80',
        'ui-dark-2': '#2C2C2E',
        'ui-primary': '#5A60FF',
        'ui-purple-1': '#7277FF',
        'ui-purple-2': '#2A2C5D',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
