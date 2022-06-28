import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import colors from './colors';
import config from './config';
import { styles, stylesWithGradient } from './styles';
import fonts from './fonts';

const overrides = {
  config,
  styles,
  colors,
  fonts,
  components: {},
};

const overridesWithGradient = {
  config,
  styles: stylesWithGradient,
  colors,
  fonts,
  components: {},
};

export const theme: ThemeConfig = extendTheme(overrides);
export const themeWithGradient: ThemeConfig = extendTheme(overridesWithGradient);

