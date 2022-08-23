import React, { FC, forwardRef, MouseEvent } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import Clothespin from '../../../../components/Clothespin/Clothespin';
import { PlaylistCardProps } from './PlaylistCard.types';

import PlaylistSongItem from '../PlaylistSongItem/PlaylistSongItem';
import SinglePlaylistModal from '../../../../components/SinglePlaylistModal/SinglePlaylistModal';
import { useStores } from '../../../../hooks';
import Protected from '../../../../components/Protected/Protected';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';

const PlaylistCard: FC<PlaylistCardProps> = observer(
  forwardRef(({ playlist }, ref): JSX.Element => {
    const { authStore, playlistStore } = useStores();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClickHeart = async (event: MouseEvent) => {
      event.stopPropagation();
      if (playlistStore.isHearted(playlist.id)) {
        await playlistStore.unheart(playlist);
      } else {
        await playlistStore.heart(playlist);
      }
    };

    const handleOpenPlaylist = async () => {
      await playlistStore.getPlaylistOwnerUser(playlist.id);
      playlistStore.setOpenedPlaylist(playlist);
      onOpen();
    };

    const cardHeaderBackgroundColor = useColorModeValue(
      'blue.300',
      'dark.secondary',
    );

    const cardBackgroundColor = useColorModeValue('white', 'dark.ternary');

    return (
      <>
        <Box
          onClick={handleOpenPlaylist}
          cursor='pointer'
          _hover={{ filter: 'brightness(120%)' }}
          transition='filter 0.15s'
          ref={ref as any}
          position='relative'
          maxW={['100%', '100%', '100%', 'calc(100%/3)', 'calc(100%/3)']}
          flex='1'
          sx={{
            '&:nth-of-type(3n - 1)': {
              marginTop: ['0', '0', '0', '-2.4vw', '-2.4vw'],
              paddingBottom: ['0', '0', '0', '2.4vw', '2.4vw'],
            },
            '&:nth-of-type(3n)': {
              marginTop: ['0', '0', '0', '-1.5vw', '-1.5vw'],
              paddingBottom: ['0', '0', '0', '1.5vw', '1.5vw'],
            },
          }}
          px={[4, 4, 8, 0, 0]}
        >
          <Clothespin
            boxStyle={{
              position: 'absolute',
              left: '50%',
              top: '-25px',
              transform: 'translateX(-50%)',
            }}
          />
          <Box
            bgColor={cardHeaderBackgroundColor}
            roundedTop='lg'
            paddingX={4}
            paddingY={2}
          >
            <Flex justifyContent='space-between' alignItems='center'>
              <Text fontWeight='medium' noOfLines={1} color='white'>
                {playlist.title}
              </Text>
              <HStack>
                <Text fontSize='sm' color='white'>{playlist.heartsCount}</Text>
                <IconButton
                  disabled={!authStore.isAuthenticated}
                  onClick={handleClickHeart}
                  shadow='lg'
                  rounded='full'
                  icon={
                    playlistStore.isHearted(playlist.id) ? (
                      <RiHeart3Fill size='28px' color='#F36073' />
                    ) : (
                      <RiHeart3Line size='28px' color='#F36073' />
                    )
                  }
                  aria-label='heart'
                />
              </HStack>
            </Flex>
          </Box>
          <VStack
            height='100%'
            alignItems='stretch'
            padding={4}
            shadow='lg'
            roundedBottom='lg'
            bgColor={cardBackgroundColor}
            divider={<StackDivider />}
          >
            {playlist.songs.map((song) => (
              <Box paddingY={1} key={song.id}>
                <PlaylistSongItem song={song} />
              </Box>
            ))}
          </VStack>
        </Box>
        <Protected renderIf={playlistStore.openedPlaylist != null}>
          <SinglePlaylistModal isOpen={isOpen} onClose={onClose} />
        </Protected>
      </>
    );
  }),
);

export default PlaylistCard;
