import React, { FC } from 'react';
import {
  Box,
  Button,
  HStack,
  Input,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaTimes, FaUser } from 'react-icons/fa';
import { useStores } from '../../../../hooks';
import PlaylistComments from '../PlaylistComments/PlaylistComments';
import { SinglePlaylistModalSidebarProps } from './SinglePlaylistModalSidebar.types';

const SinglePlaylistModalSidebar: FC<SinglePlaylistModalSidebarProps> = ({
  showOnMobile = false,
  onClose,
}): JSX.Element => {
  const { playlistStore } = useStores();

  const playlist = playlistStore.openedPlaylist;
  const owner = playlistStore.openedPlaylistOwner;

  const cardBackgroundColor = useColorModeValue('white', 'dark.ternary');

  const shadowColor = useColorModeValue(
    '-4px 0px 10px rgba(32, 47, 75, 0.1)',
    '-4px 0px 10px rgba(1, 1, 1, 0.1)',
  );

  return (
    <VStack
      flexShrink={1}
      bgColor={cardBackgroundColor}
      alignItems='stretch'
      flex={{
        md: 1,
      }}
      boxShadow={shadowColor}
      pt={4}
      roundedRight='md'
      display={{
        base: showOnMobile ? 'block' : 'none',
        md: 'block',
      }}
    >
      <Box mb={4} px={4}>
        <HStack>
          <HStack>
            <FaUser />
            <Text fontWeight='semibold'>{owner.profile.nickname}</Text>
          </HStack>
          <Spacer />
          <Box
            display={{ base: showOnMobile ? 'block' : 'none', md: 'none' }}
            cursor='pointer'
            onClick={onClose}
          >
            <FaTimes />
          </Box>
        </HStack>
        <Text fontWeight='light'>{`${owner.profile.firstName} ${owner.profile.lastName}`}</Text>
      </Box>

      {playlist.description && (
        <Box fontSize='sm' fontWeight='light' pb={4} px={4}>
          {playlist.description}
        </Box>
      )}

      <Box px={4}>
        <hr />
      </Box>
      <VStack maxH='300px' alignItems='stretch' overflowY='auto' py={1} px={4}>
        <PlaylistComments />
      </VStack>
      <Spacer />
      <HStack borderTop='1px solid #C9C9C950'>
        <Input
          fontSize='sm'
          variant='unstyled'
          placeholder='Add a comment...'
          py={3}
          px={4}
        />
        <Button
          variant='ghost'
          _hover={{ color: 'blue.300' }}
          borderRadius='none'
          px={4}
        >
          Send
        </Button>
      </HStack>
    </VStack>
  );
};

export default SinglePlaylistModalSidebar;
