import { randomProperty } from './randomProperty';

export const clothespinColors = Object.freeze({
  light: {
    pink: '#EA79B6',
    green: '#79EAC1',
    red: '#EA7979',
    blue: '#797DEA',
    yellow: '#EAC379',
  },
  dark: {
    pink: '#B05787',
    green: '#57B096',
    red: '#B05757',
    blue: '#42447D',
    yellow: '#B08757',
  },
});

export function randomClothespinColor(theme: 'light' | 'dark'): string {
  if (theme === 'dark') {
    return randomProperty(clothespinColors.dark);
  }
  return randomProperty(clothespinColors.light);
}
