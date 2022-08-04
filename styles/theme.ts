const colors = {
  text: '#FFF',
  link: '#1370F6',
  primary: ['#1370F6', '#011431'],
  black: '#000',
  white: '#FFF',
  gray: '#A4A4A4'
};

const spaces = {xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '32px', xxl: '64px', xxxl: '140px'};
const borderRadius = {xs: '0px', sm: '4px', md: '8px', lg: '16px', xl: '20px', xxl: '32px', xxxl: '64px'};

const theme = {
  colors: {
    ...colors
  },
  fonts: {
    cubano: 'Cubano, sans-serif',
    filson: 'Filson Soft, sans-serif',
  },
  breakpoints: ["768px"],
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
    heading1: '3rem',
    heading2: '2.5rem',
    heading3: '1.75rem',
    heading4: '1.5rem',
  },
  fontWeights: [400, 600, 800],
  space: {
    ...spaces
  },
  radii: {...borderRadius},
  buttons: {
    primary: {
      color: colors.text,
      bgColor: colors.primary[0],
      activeBgColor: colors.primary[1],
      borderRadius: borderRadius.xl,
    },
    box: {
      color: colors.text,
      bgColor: colors.primary[1],
      activeBgColor: colors.primary[0],
    },
    transparent: {
      bgColor: 'transparent',
      activeBgColor: 'transparent',
      color: colors.link
    }
  },
  cards: {
    borders: [
      '1px solid #1370F6',
      '1px solid #6EA9FF',
    ],
    backgrounds: [
      'linear-gradient(180deg, #001431 0%, #000D1F 100%)'
    ]
  }
};

export type ThemeType = typeof theme;

export default theme;