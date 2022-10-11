import React, { FC } from 'react';
import {
  Box,
  Center,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { PlaylistCommentProps } from './PlaylistComment.types';
import { useStores } from '../../../../hooks';
import { HearteableType } from '../../../../enums';
import { observer } from 'mobx-react';

const PlaylistComment: FC<PlaylistCommentProps> = observer(
  ({ comment }): JSX.Element => {
    const { authStore, heartStore } = useStores();

    const hearteable = {
      id: comment.id,
      type: HearteableType.comment,
    };

    const textColor = useColorModeValue('blackAlpha.700', 'whiteAlpha.700');
    const nicknameColor = useColorModeValue('black', 'white');

    const handleClickHeart = async () => {
      if (heartStore.isHearted(hearteable)) {
        await heartStore.unheart(hearteable);
      } else {
        await heartStore.heart(hearteable);
      }
    };

    return (
      <Box w='full'>
        <HStack alignItems='stretch'>
          <Box>
            <Text
              fontSize='sm'
              fontWeight='medium'
              color={
                authStore.isAuthenticated &&
                authStore.user.id === comment.profile.userId
                  ? 'blue.500'
                  : nicknameColor
              }
              mb={1}
            >
              {comment.profile.nickname}
            </Text>
            <Text fontSize='sm' color={textColor}>
              {comment.text}
            </Text>
          </Box>
          <Spacer />
          <Center
            flexDirection='column'
            cursor='pointer'
            _hover={{ filter: 'brightness(150%)' }}
            onClick={handleClickHeart}
          >
            {heartStore.isHearted(hearteable) ? (
              <RiHeart3Fill size='14px' color='#F36073' />
            ) : (
              <RiHeart3Line size='14px' color='#F36073' />
            )}
            <Text color='#F36073' fontSize='12px'>
              {comment.heartsCount}
            </Text>
          </Center>
        </HStack>
      </Box>
    );
  },
);

export default PlaylistComment;
