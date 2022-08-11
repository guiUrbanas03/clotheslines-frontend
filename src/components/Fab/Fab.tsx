import React, { FC } from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { FabProps } from './Fab.types';

const Fab: FC<FabProps> = ({ iconButtonProps, label, onClick }) => {
  return (
    <Tooltip label={label} placement='left' hasArrow>
      <IconButton
        onClick={onClick}
        position='fixed'
        shadow='lg'
        zIndex={50}
        {...iconButtonProps}
      />
    </Tooltip>
  );
};

export default Fab;
