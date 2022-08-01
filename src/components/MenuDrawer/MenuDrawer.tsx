import React, { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  HStack,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { FaBars, FaMoon, FaSignOutAlt, FaSun, FaTimes } from 'react-icons/fa';
import { RiHazeFill } from 'react-icons/ri';
import { GiMoonOrbit } from 'react-icons/gi';
import { useStores } from '../../hooks';
import { observer } from 'mobx-react';

const MenuDrawer: FunctionComponent = observer((): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setColorMode } = useColorMode();
  const { authStore, uiStore } = useStores();

  const handleChangeColorMode = (
    mode: 'light' | 'dark',
    withGradient: boolean,
  ) => {
    setColorMode(mode);
    uiStore.storeActiveGradientBackground(withGradient);
  };

  const handleLogout = async () => {
    await authStore.logout();
  };

  const drawerButtonColor = useColorModeValue('#333333', 'dark.ternary');
  const drawerContentColor = useColorModeValue(
    'rgba(255, 255, 255, 0.15)',
    'blackAlpha.100',
  );
  const iconButtonColor = useColorModeValue('whiteAlpha.700', 'dark.ternary');
  const logoutButtonColor = useColorModeValue(
    'whiteAlpha.600',
    'blackAlpha.400',
  );
  return (
    <>
      <IconButton
        opacity={isOpen ? 0 : 1}
        aria-label='menu'
        icon={<FaBars />}
        bgColor={drawerButtonColor}
        color='white'
        onClick={onOpen}
        transition='opacity 0.5s'
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerContent
          shadow='lg'
          bgColor={drawerContentColor}
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
            <VStack height='100%' alignItems='stretch'>
              <HStack alignItems='stretch' justifyContent='space-between'>
                <Tooltip label='day' hasArrow>
                  <IconButton
                    bgColor={iconButtonColor}
                    shadow='md'
                    size='lg'
                    icon={<FaSun />}
                    aria-label='day'
                    onClick={() => handleChangeColorMode('light', false)}
                  />
                </Tooltip>

                <Tooltip label='sunrise' hasArrow>
                  <IconButton
                    bgColor={iconButtonColor}
                    shadow='md'
                    size='lg'
                    icon={<RiHazeFill />}
                    aria-label='sunset'
                    onClick={() => handleChangeColorMode('light', true)}
                  />
                </Tooltip>

                <Tooltip label='night' hasArrow>
                  <IconButton
                    bgColor={iconButtonColor}
                    shadow='md'
                    size='lg'
                    icon={<FaMoon />}
                    aria-label='night'
                    onClick={() => handleChangeColorMode('dark', false)}
                  />
                </Tooltip>

                <Tooltip label='sunset' hasArrow>
                  <IconButton
                    bgColor={iconButtonColor}
                    shadow='md'
                    size='lg'
                    icon={<GiMoonOrbit />}
                    aria-label='moon'
                    onClick={() => handleChangeColorMode('dark', true)}
                  />
                </Tooltip>
              </HStack>
              <Spacer />
              {authStore.isLoggedIn ? (
                <Box paddingBottom={4}>
                  <Button
                    width='100%'
                    onClick={handleLogout}
                    bgColor={logoutButtonColor}
                    shadow='md'
                  >
                    <HStack>
                      <FaSignOutAlt />
                      <Text>Log out</Text>
                    </HStack>
                  </Button>
                </Box>
              ) : null}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});

export default MenuDrawer;
