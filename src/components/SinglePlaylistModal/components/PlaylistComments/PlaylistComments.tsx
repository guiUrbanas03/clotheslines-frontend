import React, { FC, useEffect } from 'react';
import {
  Box,
  Center,
  HStack,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useStores } from '../../../../hooks';
import { observer } from 'mobx-react';
import { FaCommentSlash } from 'react-icons/fa';
import PlaylistComment from '../PlaylistComment/PlaylistComment';

const PlaylistComments: FC = observer(() => {
  const { commentStore, playlistStore } = useStores();

  useEffect(() => {
    const fetchComments = async () => {
      await commentStore.fetchPlaylistComments(playlistStore.openedPlaylist.id);
    };

    fetchComments();
  }, []);

  return commentStore.comments.length !== 0 ? (
    <VStack
      divider={<StackDivider opacity={0.6} />}
      alignItems='start'
      w='full'
    >
      {commentStore.comments.map((comment) => (
        <PlaylistComment key={comment.id} comment={comment} />
      ))}
    </VStack>
  ) : (
    <Center py={4} flex={1}>
      <Box>
        <FaCommentSlash size='120px' opacity={0.2} />
        <Text opacity={0.3}>No comments yet :(</Text>
      </Box>
    </Center>
  );
});

export default PlaylistComments;
