import React, { FC } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import PlaylistsRow from './components/PlaylistsRow/PlaylistsRow';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import { useIntersectionObserverRef } from '../../hooks/useIntersectionObserverRef';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';

const PlaylistFeedPage: FC = observer((): JSX.Element => {
  const { playlistStore } = useStores();

  const {
    isReadyToFetch,
    playlistsArray,
    currentCursor,
    nextCursor,
    fetchCursorPaginatedPlaylists,
    setCurrentPaginationCursor,
  } = playlistStore;

  const fetchPlaylists = async (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && isReadyToFetch) {
      setCurrentPaginationCursor(nextCursor || currentCursor);
      await fetchCursorPaginatedPlaylists();
    }
  };

  const { observedElementRef } = useIntersectionObserverRef(fetchPlaylists);

  return (
    <Box mt='60px'>
      {playlistsArray.map((playlistsRow) => {
        return (
          <Box mb={['0px', '0px', '0px', '60px', '60px']} key={playlistsRow[0]}>
            <PlaylistsRow playlistsRow={playlistsRow[1]} />
          </Box>
        );
      })}

      {isReadyToFetch && (
        <LayoutContainer
          boxProps={{ ml: ['0', '0', '80px', '80px', '220px'], pt: '20px' }}
        >
          <Box ref={observedElementRef} textAlign='center'>
            <Spinner size='xl' />
          </Box>
        </LayoutContainer>
      )}
    </Box>
  );
});

export default PlaylistFeedPage;
