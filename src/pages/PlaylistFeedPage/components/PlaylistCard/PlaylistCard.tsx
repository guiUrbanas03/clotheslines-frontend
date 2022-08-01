import React, { FC, forwardRef } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Image,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import Clothespin from '../../../../components/Clothespin/Clothespin';
import { PlaylistCardProps } from './PlaylistCard.types';

import HeartIconSvg from '../../../../assets/svg/heart-icon.svg';
import PlaylistSongItem from '../PlaylistSongItem/PlaylistSongItem';

const PlaylistCard: FC<PlaylistCardProps> = observer(
  forwardRef(({ playlist }, ref): JSX.Element => {
    const handleClickHeart = () => {
      alert('dá o like logo ai');
    };

    return (
      <Box
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
        <Box bgColor={useColorModeValue('blue.300', 'dark.secondary')} roundedTop='lg' paddingX={4} paddingY={2}>
          <Flex justifyContent='space-between' alignItems='center'>
            <Text fontWeight='medium' noOfLines={1} color='white'>
              {playlist.title}
            </Text>
            <IconButton
              onClick={handleClickHeart}
              shadow='lg'
              rounded='full'
              icon={<Image src={HeartIconSvg} />}
              aria-label='heart'
            />
          </Flex>
        </Box>
        <VStack
          height='100%'
          alignItems='stretch'
          padding={4}
          shadow='lg'
          roundedBottom='lg'
          bgColor={useColorModeValue('white', 'dark.ternary')}
          divider={<StackDivider />}
        >
          {playlist.songs.map((song) => (
            <Box paddingY={1} key={song.id}>
              <PlaylistSongItem song={song} />
            </Box>
          ))}
        </VStack>
      </Box>
    );
  }),
);

export default PlaylistCard;
