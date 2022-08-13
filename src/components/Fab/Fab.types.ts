import { IconButtonProps } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

export type FabProps = {
  iconButtonProps: IconButtonProps;
  label?: string;
  onClick: MouseEventHandler;
  colors?: Array<string>;
};
