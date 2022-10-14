import { useMemo } from 'react';
import { randomClothespinColor } from '../utils';

export const useClothespinColors = () => {
  const clothespinColors = useMemo(
    () => ({
      light: randomClothespinColor('light'),
      dark: randomClothespinColor('dark'),
    }),
    [],
  );

  return {
    light: clothespinColors.light,
    dark: clothespinColors.dark,
  };
};
