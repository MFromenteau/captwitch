module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  content: [],
  theme: {
    extend: {
      screens : {
        'xs': '100px',
        '3xl': '1900px'
      }
    },
  },
  plugins: [
  ],
  corePlugins: {
  }
}
