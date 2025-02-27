// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Inter Fallback', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', 'IBM Plex Mono Fallback', ...defaultTheme.fontFamily.mono],
      title: ['Sharp Grotesk', 'Sharp Grotesk Fallback', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      44: '44px',
      46: '46px',
      48: '48px',
      50: '50px',
      52: '52px',
      54: '54px',
      56: '56px',
      60: '60px',
      64: '64px',
      68: '68px',
      72: '72px',
      80: '80px',
      85: '85px',
      88: '88px',
      90: '90px',
      104: '104px',
      112: '112px',
      120: '120px',
    },
    letterSpacing: {
      tighter: '-0.04em',
      tight: '-0.02em',
      normal: '0',
      wide: '0.01em',
      wider: '0.02em',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: colors.white,
      black: '#0F1624',
      primary: {
        1: '#5647EB',
        2: '#32279B',
      },
      secondary: {
        1: '#FFE666',
        2: '#1FD68A',
        3: '#3DB8F5',
        4: '#EB477E',
        5: '#EC93EC',
        6: '#CC3333',
      },
      gray: {
        15: '#172136',
        30: '#364563',
        40: '#4D5E80',
        50: '#6A7895',
        60: '#8893AA',
        70: '#A7AFBE',
        80: '#C4C9D4',
        90: '#E2E4E9',
        94: '#EDEFF2',
        97: '#F6F7F8',
      },
      tones: {
        'purple-light': '#F0F2FF',
        'purple-medium': '#E0E7FF',
        'purple-dark': '#ACB2D2',
        'deep-purple-light': '#E6EAFF',
        'deep-purple-dark': '#DBE1FF',
        'blue-light': '#F0FAFE',
        'blue-dark': '#9CBAC9',
        'deep-blue-dark': '#176782',
        'green-light': '#F2FCF8',
        'green-dark': '#9CC9B6',
        'deep-green-dark': '#056049',
        'yellow-light': '#FEFEE1',
        'yellow-dark': '#E2E29C',
        'pink-light': '#FDF2FD',
        'pink-dark': '#D2ACD2',
      },
      code: {
        blue: '#192AE6',
      },
      tags: {
        purple: '#382E9E',
      },
    }),
    screens: {
      '3xl': { max: '1919px' },
      '2xl': { max: '1599px' },
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
      '3xs': { max: '359px' },
    },
    extend: {
      backgroundImage: {
        'pricing-hero':
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 67.27%, #FAFBFF 100%)',
        'radial-blue':
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 34.28%, rgba(240, 242, 255, 0.5) 100%)',
        pricing: '0px 5px 15px 0px rgba(15, 22, 36, 0.2)',
        'automation-changes':
          'linear-gradient(171.93deg, #FFE666 6.21%, #FFF2B3 22.48%, #F7CCFF 46.12%, #F7CCFF 58.72%, #FFF2B3 81.58%, #FFE666 93.79%)',
        'automation-changes-phone': 'linear-gradient(90deg, #FFE666 6.21%, #FFF2B3 78.05%)',
        security:
          'linear-gradient(171.93deg, #3DB8F5 6.21%, #B3FFC6 32.27%, #FFF9B3 43.51%, #FFF9B3 58.72%, #B3FFC6 71.22%, #3DB8F5 93.79%)',
        'security-phone': 'linear-gradient(90deg, #3DB8F5 6.21%, #B3FFC6 85.12%)',
        tutorials: 'linear-gradient(156.19deg, #F7F6FE 0.68%, #D5D1FA 90.99%)',
        'docs-sidebar':
          'linear-gradient(180deg, #FFFFFF 46.08%, rgba(255, 255, 255, 0.8) 67.27%, rgba(255, 255, 255, 0.6) 78.12%, rgba(255, 255, 255, 0.3) 89.31%, rgba(255, 255, 255, 0) 100%)',
      },
      lineHeight: {
        95: '95%',
        104: '104%',
        'extra-tight': '1.125',
        140: '140%',
      },
      spacing: {
        4.5: '1.125rem',
      },
      boxShadow: {
        menu: '0px 5px 15px 0px rgba(172, 178, 210, 0.5)',
        pricing: '0px 5px 15px 0px rgba(15, 22, 36, 0.2)',
        tooltip: '0px 5px 10px rgba(167, 175, 190, 0.2), 0px 5px 35px rgba(167, 175, 190, 0.2)',
        labels: '1px 0px rgba(172, 178, 210, 1)',
        icon: '0px 5px 15px rgba(172, 178, 210, 0.8)',
        'icon-green': '0px 5px 10px rgba(156, 201, 182, 0.8)',
        blue: '0px 5px 15px 0px rgba(156,186,201,0.5)',
        green: '0px 5px 15px 0px rgba(143,188,169,0.4)',
        red: '0px 5px 15px 0px rgba(210,172,210,0.4)',
        'dark-big': '0px 0px 80px rgba(0, 0, 0, 0.15)',
        'field-focus': '0 0 0 2px #5647EB',
        'field-error': '0 0 0 2px #CC3333',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    container: false,
  },
};
