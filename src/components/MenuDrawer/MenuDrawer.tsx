import React, { FunctionComponent } from 'react';
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  HStack,
  IconButton,
  Spacer,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { RiHazeFill } from 'react-icons/ri';
import { GiMoonOrbit } from 'react-icons/gi';
import { useStores } from '../../hooks';
import { observer } from 'mobx-react';

const MenuDrawer: FunctionComponent = observer((): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setColorMode } = useColorMode();
  const { uiStore } = useStores();

  const handleChangeColorMode = (
    mode: 'light' | 'dark',
    withGradient: boolean,
  ) => {
    setColorMode(mode);
    uiStore.storeActiveGradientBackground(withGradient);
  };

  return (
    <>
      <IconButton
        opacity={isOpen ? 0 : 1}
        aria-label='menu'
        icon={<FaBars />}
        bgColor={useColorModeValue('#333333', 'dark.ternary')}
        color='white'
        onClick={onOpen}
        transition='opacity 0.5s'
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerContent
          shadow='lg'
          bgColor={useColorModeValue(
            'rgba(255, 255, 255, 0.15)',
            'blackAlpha.100',
          )}
          _before={{
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'inherit',
            backdropFilter: 'blur(5px)',
            zIndex: '-1',
          }}
        >
          <DrawerHeader>
            <HStack alignItems='center' paddingY={2}>
              <Box>Menu</Box>
              <Spacer />
              <IconButton
                bgColor='whiteAlpha.100'
                icon={<FaTimes />}
                aria-label='close'
                onClick={onClose}
              />
            </HStack>
            <Divider bgColor='white' />
          </DrawerHeader>
          <DrawerBody>
            <HStack alignItems='stretch' justifyContent='space-between'>
              <Tooltip label='day' hasArrow>
                <IconButton
                  bgColor={useColorModeValue('whiteAlpha.700', 'dark.ternary')}
                  shadow='md'
                  size='lg'
                  icon={<FaSun />}
                  aria-label='day'
                  onClick={() => handleChangeColorMode('light', false)}
                />
              </Tooltip>

              <Tooltip label='sunrise' hasArrow>
                <IconButton
                  bgColor={useColorModeValue('whiteAlpha.700', 'dark.ternary')}
                  shadow='md'
                  size='lg'
                  icon={<RiHazeFill />}
                  aria-label='sunset'
                  onClick={() => handleChangeColorMode('light', true)}
                />
              </Tooltip>

              <Tooltip label='night' hasArrow>
                <IconButton
                  bgColor={useColorModeValue('whiteAlpha.700', 'dark.ternary')}
                  shadow='md'
                  size='lg'
                  icon={<FaMoon />}
                  aria-label='night'
                  onClick={() => handleChangeColorMode('dark', false)}
                />
              </Tooltip>

              <Tooltip label='sunset' hasArrow>
                <IconButton
                  bgColor={useColorModeValue('whiteAlpha.700', 'dark.ternary')}
                  shadow='md'
                  size='lg'
                  icon={<GiMoonOrbit />}
                  aria-label='moon'
                  onClick={() => handleChangeColorMode('dark', true)}
                />
              </Tooltip>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});

export default MenuDrawer;
