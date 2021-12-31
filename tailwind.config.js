module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: {
        'admins_menu': "url('assets/images/admins_menu')",
      },
    },
  },
  variants: {
    extend: {
       backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
  mode: 'jit',
}
