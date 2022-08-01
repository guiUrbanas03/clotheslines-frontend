import React, { FC, Fragment } from 'react';
import { Box, Fade, Stack, VStack } from '@chakra-ui/react';
import Clothesline from '../../../../components/Clothesline/Clothesline';
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import { PlaylistsRowProps } from './PlaylistsRow.types';
import { observer } from 'mobx-react';

const PlaylistsRow: FC<PlaylistsRowProps> = observer(
  ({ playlistsRow }): JSX.Element => {
    return (
      <Fade in>
        <VStack
          flex='1'
          alignItems='stretch'
          ml={['0', '0', '65px', '65px', '200px']}
        >
          <Box display={['none', 'none', 'none', 'block', 'block']}>
            <Clothesline />
          </Box>
          <Box paddingX={[0, 0, 0, 6, 8]}>
            <Stack
              direction={['column', 'column', 'column', 'row', 'row']}
              alignItems='stretch'
              justifyContent={[
                'center',
                'center',
                'center',
                'flex-start',
                'flex-start',
              ]}
              minH='380px'
              width='100%'
            >
              {playlistsRow.map((playlist) => (
                <Fragment key={playlist.id}>
                  <Box display={['block', 'block', 'block', 'none', 'none']}>
                    <Clothesline />
                  </Box>
                  <PlaylistCard playlist={playlist} />
                </Fragment>
              ))}
            </Stack>
          </Box>
        </VStack>
      </Fade>
    );
  },
);

export default PlaylistsRow;
