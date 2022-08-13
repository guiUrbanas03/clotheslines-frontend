import React from 'react';
import {
  Button,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaKey, FaUser } from 'react-icons/fa';
import { useStores } from '../../../../hooks';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Protected from '../../../Protected/Protected';

const UserProfileLink = observer((): JSX.Element => {
  const { authStore } = useStores();

  const loginButtonColor = useColorModeValue('#333333', 'dark.ternary');
  const profileButtonColor = useColorModeValue('#333333', 'white');

  return (
    <Protected
      renderIf={authStore.isAuthenticated}
      fallback={
        <Link to='/'>
          <Button
            bgColor={loginButtonColor}
            color='white'
            rounded='md'
            leftIcon={<FaKey />}
          >
            Login
          </Button>
        </Link>
      }
    >
      <Link to='/profile'>
        <HStack spacing={0} _hover={{ opacity: '0.7' }}>
          <Text fontSize='sm'>{authStore?.user?.profile?.nickname}</Text>
          <IconButton
            variant='link'
            color={profileButtonColor}
            icon={<FaUser />}
            aria-label='user'
          ></IconButton>
        </HStack>
      </Link>
    </Protected>
  );
});

export default UserProfileLink;
