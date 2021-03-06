import React, { FunctionComponent } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Clothespin from '../Clothespin/Clothespin';
import { CardProps } from './Card.types';
import { observer } from 'mobx-react';

const Card: FunctionComponent<CardProps> = observer(({
  children,
  boxStyle = {},
  withClothespin = false,
}): JSX.Element => {
  return (
    <Box position='relative'>
      {withClothespin ? (
        <Clothespin
          boxStyle={{
            position: 'absolute',
            left: '50%',
            top: '-25px',
            transform: 'translateX(-50%)',
          }}
        />
      ) : null}
      <Box {...boxStyle} padding={8} shadow='lg' rounded='lg' bgColor={useColorModeValue('white', 'dark.ternary')}>
        {children}
      </Box>
    </Box>
  );
});

export default Card;
