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
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import {
  FaBars,
  FaKey,
  FaPlus,
  FaSignOutAlt,
  FaTimes,
  FaUser,
} from 'react-icons/fa';
import { useStores } from '../../hooks';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Protected from '../Protected/Protected';
import MenuDrawerThemeButtons from './components/MenuDrawerThemeButtons/MenuDrawerThemeButtons';

const MenuDrawer: FunctionComponent = observer((): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { authStore } = useStores();

  const handleLogout = async () => {
    await authStore.logout();
  };

  const drawerButtonColor = useColorModeValue('#333333', 'dark.ternary');
  const drawerContentColor = useColorModeValue(
    'rgba(255, 255, 255, 0.15)',
    'blackAlpha.100',
  );
  const stackButtonColor = useColorModeValue(
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
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} blockScrollOnMount={false}> 
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
            <VStack height='100%' alignItems='stretch' spacing={6}>
              <Link to='create-playlist'>
                <Button
                  leftIcon={<FaPlus />}
                  width='100%'
                  bgColor={stackButtonColor}
                  shadow='md'
                >
                  Create playlist
                </Button>
              </Link>
              <Protected
                renderIf={authStore.isAuthenticated}
                fallback={
                  <Link to='/'>
                    <Button
                      leftIcon={<FaKey />}
                      width='100%'
                      bgColor={stackButtonColor}
                      shadow='md'
                    >
                      Login
                    </Button>
                  </Link>
                }
              >
                <Link to='profile'>
                  <Button
                    leftIcon={<FaUser />}
                    width='100%'
                    bgColor={stackButtonColor}
                    shadow='md'
                  >
                    Profile
                  </Button>
                </Link>
              </Protected>
              <MenuDrawerThemeButtons />
              <Spacer />
              <Protected renderIf={authStore.isLoggedIn}>
                <Box paddingBottom={4}>
                  <Button
                    width='100%'
                    onClick={handleLogout}
                    bgColor={stackButtonColor}
                    shadow='md'
                  >
                    <HStack>
                      <FaSignOutAlt />
                      <Text>Log out</Text>
                    </HStack>
                  </Button>
                </Box>
              </Protected>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});

export default MenuDrawer;
