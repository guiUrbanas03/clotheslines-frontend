import React, { FunctionComponent } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { ClothespinProps } from './Clothespin.types';
import { observer } from 'mobx-react';

const Clothespin: FunctionComponent<ClothespinProps> = observer(
  ({
    lightColor = '#EA79B6',
    darkColor = '#B05787',
    boxStyle = {},
  }): JSX.Element => {
    const clothespinBackgroundColor = useColorModeValue(lightColor, darkColor);

    return (
      <Box
        {...boxStyle}
        bgColor={clothespinBackgroundColor}
        width='30px'
        height='50px'
        rounded='md'
        shadow='md'
      ></Box>
    );
  },
);

export default Clothespin;
