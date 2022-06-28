import React, { FunctionComponent } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import asideBuilding from '../../assets/svg/aside-building.svg';
import asideBuildingDark from '../../assets/svg/aside-building-dark.svg';
import {
  FaCubes,
  FaLeaf,
  FaLevelUpAlt,
  FaRandom,
  FaStar,
} from 'react-icons/fa';
import SidebarItem from './components/SidebarItem/SidebarItem';
import { observer } from 'mobx-react';

const Sidebar: FunctionComponent = observer((): JSX.Element => {
  return (
    <Box
      as='aside'
      left='0'
      top='0'
      position='fixed'
      width={['0', '0', '220px']}
      height='100vh'
      backgroundImage={useColorModeValue(asideBuilding, asideBuildingDark)}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='right'
      paddingY={4}
      transition='width 0.3s'
      _hover={{
        _before: {
          content: "''",
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: 'inherit',
          filter: 'blur(8px)',
          zIndex: '-1',
        },
      }}
    >
      <VStack
        spacing={8}
        display={{ base: 'none', md: 'block' }}
        marginLeft={4}
        marginRight={8}
      >
        <SidebarItem icon={<FaLeaf />} text='Newest' />
        <SidebarItem icon={<FaLevelUpAlt />} text='Trending' />
        <SidebarItem icon={<FaRandom />} text='Random' />
        <SidebarItem icon={<FaStar />} text='My favorites' />
        <SidebarItem icon={<FaCubes />} text='My collection' />
      </VStack>
    </Box>
  );
});

export { Sidebar };
