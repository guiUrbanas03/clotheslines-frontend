import React from 'react';
import { HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { useStores } from '../../../../hooks';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Protected from '../../../Protected/Protected';

const UserProfileLink = observer((): JSX.Element => {
  const { authStore } = useStores();

  const iconButtonColor = useColorModeValue('light.darkGray', 'white');

  return (
    <Protected renderIf={authStore.isAuthenticated}>
      <Link to='/profile'>
        <HStack spacing={0}>
          <Text fontSize='sm'>{authStore?.user?.profile?.nickname}</Text>
          <IconButton
            variant='link'
            color={iconButtonColor}
            icon={<FaUser />}
            aria-label='user'
          ></IconButton>
        </HStack>
      </Link>
    </Protected>
  );
});

export default UserProfileLink;
