import React, { FC } from 'react';
import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { FabProps } from './Fab.types';

const Fab: FC<FabProps> = ({
  iconButtonProps,
  label,
  onClick,
  colors = ['blue.300', 'dark.secondary'],
}) => {
  const bgColors = useColorModeValue(colors[0], colors[1]);
  return (
    <Tooltip label={label} placement='left' hasArrow>
      <IconButton
        onClick={onClick}
        position='fixed'
        shadow='lg'
        zIndex={50}
        bgColor={bgColors}
        {...iconButtonProps}
      />
    </Tooltip>
  );
};

export default Fab;
