import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { PlaylistSongItemProps } from './PlaylistSongItem.types';

const PlaylistSongItem: FC<PlaylistSongItemProps> = ({ song }) => {
  return (
    <Box>
      <Text fontWeight='semibold' noOfLines={1}>
        {song.name}
      </Text>
      <Text noOfLines={1}>{song.artist}</Text>
    </Box>
  );
};

export default PlaylistSongItem;
