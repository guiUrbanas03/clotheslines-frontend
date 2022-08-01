import { BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  wrapperBoxStyle?: BoxProps;
  boxStyle?: BoxProps;
  withClothespin?: boolean;
  ref?: any;
};
