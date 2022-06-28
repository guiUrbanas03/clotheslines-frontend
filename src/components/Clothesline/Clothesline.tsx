import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React, { FunctionComponent } from 'react';
import ClotheslineSvg from '../../assets/svg/clothesline.svg';

const Clothesline: FunctionComponent = observer((): JSX.Element => {
  return (
    <Box zIndex={0}>
      <img src={ClotheslineSvg} width='100%' alt='line' />
    </Box>
  );
});

export default Clothesline;
