import { mode } from '@chakra-ui/theme-tools';

export const styles = Object.freeze({
  global: (props: any) => ({
    '*': {
      boxSizing: 'border-box',
      fontFamily: 'Poppins, sans-serif',
    },

    body: {
      backgroundColor: mode('light.primary', 'dark.primary')(props),
    },
  }),
});

export const stylesWithGradient = Object.freeze({
  global: (props: any) => ({
    '*': {
      boxSizing: 'border-box',
      fontFamily: 'Poppins, sans-serif',
    },

    body: {
      backgroundColor: mode('light.primary', 'dark.primary')(props),
      background: mode('light.gradient', 'dark.gradient')(props),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
  }),
});
