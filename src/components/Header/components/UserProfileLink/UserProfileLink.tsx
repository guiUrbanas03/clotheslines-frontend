import React from 'react';
import { HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { useStores } from '../../../../hooks';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const UserProfileLink = observer((): JSX.Element => {
  const { authStore } = useStores();

  const iconButtonColor = useColorModeValue('light.darkGray', 'white');

  if (!authStore.isAuthenticated) {
    return <></>;
  }

  return (
    <Link to='/profile'>
      <HStack spacing={0}>
        <Text fontSize='sm'>{authStore.user.profile.nickname}</Text>
        <IconButton
          variant='link'
          color={iconButtonColor}
          icon={<FaUser />}
          aria-label='user'
        ></IconButton>
      </HStack>
    </Link>
  );
});

export default UserProfileLink;
