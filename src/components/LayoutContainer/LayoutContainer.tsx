import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { LayoutContainerProps } from './LayoutContainer.types';

const LayoutContainer: FC<LayoutContainerProps> = ({
  children,
  boxProps = {},
  gap = true,
}): JSX.Element => {
  const leftMarginWithGap = ['0', '0', '80px', '80px', '220px'];
  const leftMargin = ['0', '0', '65px', '65px', '183px'];

  return (
    <Box
      ml={gap ? leftMarginWithGap : leftMargin}
      paddingX={[4, 6, 8]}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default LayoutContainer;
