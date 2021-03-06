import React, { FunctionComponent } from 'react';
import { Box, HStack, Image, useColorModeValue } from '@chakra-ui/react';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import Logo from '../../assets/svg/logo.svg';
import LogoDark from '../../assets/svg/logo-dark.svg';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const Header: FunctionComponent = observer((): JSX.Element => {
  return (
    <Box
      bgColor={useColorModeValue('whiteAlpha.100', 'blackAlpha.100')}
      paddingX={[4, 6, 8]}
      paddingTop={4}
      paddingBottom={2}
      as='header'
      position='fixed'
      top='0'
      right='0'
      width={['100%', '100%', 'calc(100% - 220px)']}
      placeItems='center'
      zIndex={100}
      _before={{
        content: "''",
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'inherit',
        backdropFilter: 'blur(5px)',
        zIndex: '-1',
      }}
    >
      <HStack width='100%' justifyContent='space-between' alignItems='center'>
        <Link to='/'>
          <Box>
            <Image
              width={['100px', '125px']}
              src={useColorModeValue(Logo, LogoDark)}
              alt='logo'
            />
          </Box>
        </Link>
        <MenuDrawer />
      </HStack>
    </Box>
  );
});

export default Header;
