import React, { FunctionComponent } from 'react';
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { SidebarItemProps } from './SidebarItem.types';
import { observer } from 'mobx-react';

const SidebarItem: FunctionComponent<SidebarItemProps> = observer(
  ({ icon, text, color = 'white' }): JSX.Element => {
    const sidebarItemBackgroundColor = useColorModeValue(
      'whiteAlpha.400',
      'blackAlpha.400',
    );

    return (
      <HStack
        color={color}
        cursor='pointer'
        bgColor={sidebarItemBackgroundColor}
        alignItems='center'
        justifyContent='center'
        px={4}
        py={3}
        rounded='md'
        shadow='md'
        _hover={{ bgColor: 'whiteAlpha.600' }}
        _active={{ bgColor: 'whiteAlpha.700' }}
      >
        <Box mr={2}>{icon}</Box>
        <Text>{text}</Text>
      </HStack>
    );
  },
);

export default SidebarItem;
