module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      green: {
        50: '#E9F5EC',
        default: '#219E43'
      },
      grey: {
        50: '#F9F9F9',
        100: '#D4D4D4',
        200: '#A2A2A2',
        300: '#646464'
      },
      white: {
        100: '#fff'
      },
      black: {
        50: '#323232',
        100: '#000'
      }
    },
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '3.75rem'
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
