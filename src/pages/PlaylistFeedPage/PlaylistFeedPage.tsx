import React, { FC, useEffect, useCallback } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import PlaylistsRow from './components/PlaylistsRow/PlaylistsRow';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import { useIntersectionObserverRef } from '../../hooks/useIntersectionObserverRef';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import Fab from '../../components/Fab/Fab';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { HearteableType } from '../../enums';

const PlaylistFeedPage: FC = observer((): JSX.Element => {
  const { playlistStore, heartStore } = useStores();
  const navigate = useNavigate();

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

  const fetchHearts = useCallback(async () => {
    await heartStore.fetchHeartedIds(HearteableType.playlist);
    await heartStore.fetchHeartedIds(HearteableType.comment);
  }, [heartStore]);

  useEffect(() => {
    fetchHearts();
  }, []);

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
      <Fab
        onClick={() => navigate('/create-playlist')}
        label='Create playlist'
        iconButtonProps={{
          icon: <FaPlus />,
          size: 'lg',
          color: 'white',
          rounded: 'full',
          right: [4, 4, 8, 6, 8],
          bottom: 6,
          'aria-label': 'Create playlist fab',
        }}
      />
    </Box>
  );
});

export default PlaylistFeedPage;
