import React, { FC, useState } from 'react';
import {
  Box,
  Center,
  Divider,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { SinglePlaylistModalProps } from './SinglePlaylistModal.types';
import { useStores } from '../../hooks';
import SinglePlaylistModalSidebar from './components/SinglePlaylistModalSidebar/SinglePlaylistModalSidebar';
import { FaComment } from 'react-icons/fa';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { HearteableType } from '../../enums';

const SinglePlaylistModal: FC<SinglePlaylistModalProps> = observer(
  ({ isOpen, onClose }) => {
    const { authStore, playlistStore, heartStore } = useStores();
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    const playlist = playlistStore.openedPlaylist;
    const playlistHearteable = {
      id: playlist.id,
      type: HearteableType.playlist,
    };

    const cardHeaderBackgroundColor = useColorModeValue(
      'blue.300',
      'dark.secondary',
    );

    const cardBackgroundColor = useColorModeValue('white', 'dark.ternary');

    const handleCloseModal = () => {
      playlistStore.setOpenedPlaylist(null!);
      playlistStore.setOpenedPlaylistOwner(null!);
      onClose();
    };

    const handleClickHeart = async () => {
      if (heartStore.isHearted(playlistHearteable)) {
        await heartStore.unheart(playlistHearteable);
      } else {
        await heartStore.heart(playlistHearteable);
      }
    };

    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          size='5xl'
          closeOnOverlayClick={true}
          blockScrollOnMount={true}
        >
          <ModalOverlay backdropFilter='blur(8px)' />
          <ModalContent
            minH='60vh'
            flexDirection='row'
            alignItems='stretch'
            w='full'
            mx={{ base: 1, md: 4 }}
          >
            <Box
              minW='20px'
              flex={2}
              bgColor={cardBackgroundColor}
              rounded='md'
            >
              <ModalHeader
                bgColor={cardHeaderBackgroundColor}
                roundedTopLeft='md'
                roundedTopRight={{ base: 'md', md: 'none' }}
              >
                <HStack color='white'>
                  <Text>{playlist.title}</Text>
                  <Spacer />
                  <Text>{playlist.heartsCount}</Text>
                  <IconButton
                    disabled={!authStore.isAuthenticated}
                    display={{
                      base: showSidebar ? 'none' : 'flex',
                      md: 'flex',
                    }}
                    onClick={handleClickHeart}
                    shadow='lg'
                    rounded='full'
                    icon={
                      heartStore.isHearted(playlistHearteable) ? (
                        <RiHeart3Fill size='28px' color='#F36073' />
                      ) : (
                        <RiHeart3Line size='28px' color='#F36073' />
                      )
                    }
                    aria-label='heart'
                  />
                  <Center
                    height='40px'
                    opacity={0.7}
                    display={{
                      base: 'flex',
                      md: 'none',
                    }}
                  >
                    <Divider orientation='vertical' />
                  </Center>
                  <Box
                    pl={0.5}
                    cursor='pointer'
                    onClick={() => setShowSidebar((prev) => !prev)}
                    display={{
                      base: 'block',
                      md: 'none',
                    }}
                  >
                    <FaComment size='24px' />
                  </Box>
                </HStack>
              </ModalHeader>
              <ModalBody pb={6}>
                <VStack
                  height='100%'
                  alignItems='stretch'
                  roundedBottom='lg'
                  divider={<StackDivider />}
                >
                  {playlist.songs.map((song) => (
                    <Box paddingY={1} key={song.id}>
                      <Box>
                        <Text fontWeight='semibold' noOfLines={1}>
                          {song.name}
                        </Text>
                        <HStack>
                          <Text noOfLines={1}>{song.artist}</Text>
                          {song.album && <Text color='#666'>•</Text>}
                          <Text fontWeight='light' color='#999' noOfLines={1}>
                            {song.album}
                          </Text>
                        </HStack>
                      </Box>
                    </Box>
                  ))}
                </VStack>
              </ModalBody>
            </Box>
            <SinglePlaylistModalSidebar
              showOnMobile={showSidebar}
              onClose={() => setShowSidebar((prev) => !prev)}
            />
          </ModalContent>
        </Modal>
      </>
    );
  },
);

export default SinglePlaylistModal;
