import React, { FC } from 'react';
import {
  Box,
  Button,
  HStack,
  Input,
  Spacer,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { FaTimes, FaUser } from 'react-icons/fa';
import { useStores } from '../../../../hooks';
import PlaylistComments from '../PlaylistComments/PlaylistComments';
import { SinglePlaylistModalSidebarProps } from './SinglePlaylistModalSidebar.types';
import { Formik, FormikValues } from 'formik';
import { authStore } from '../../../../stores';

const SinglePlaylistModalSidebar: FC<SinglePlaylistModalSidebarProps> = ({
  showOnMobile = false,
  onClose,
}): JSX.Element => {
  const { playlistStore, commentStore } = useStores();
  const toast = useToast();

  const playlist = playlistStore.openedPlaylist;
  const owner = playlistStore.openedPlaylistOwner;

  const cardBackgroundColor = useColorModeValue('white', 'dark.ternary');

  const shadowColor = useColorModeValue(
    '-4px 0px 10px rgba(32, 47, 75, 0.1)',
    '-4px 0px 10px rgba(1, 1, 1, 0.1)',
  );

  const handleSubmitComment = async (values: FormikValues) => {
    try {
      const res = await commentStore.storePlaylistComment(
        playlist.id,
        values.text,
      );

      if (res && res.status === 200) {
        toast({
          title: res.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });

        values.text = '';
      } else {
        toast({
          title: 'Failed to submit comment.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        base: showOnMobile ? 'flex' : 'none',
        md: 'flex',
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
      <VStack
      maxH='350px'
        flex={1}
        alignItems='stretch'
        overflowY='auto'
        py={1}
        px={4}
      >
        <PlaylistComments />
      </VStack>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={(values) => handleSubmitComment(values)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <HStack borderTop='1px solid #C9C9C950'>
              <Input
                disabled={!authStore.isAuthenticated}
                fontSize='sm'
                variant='unstyled'
                placeholder={
                  !authStore.isAuthenticated
                    ? 'Sign in to comment'
                    : 'Add a comment...'
                }
                py={3}
                px={4}
                {...formik.getFieldProps('text')}
              />
              <Button
                disabled={!authStore.isAuthenticated}
                type='submit'
                variant='ghost'
                _hover={{ color: 'blue.300' }}
                borderRadius='none'
                px={4}
              >
                Send
              </Button>
            </HStack>
          </form>
        )}
      </Formik>
    </VStack>
  );
};

export default SinglePlaylistModalSidebar;
