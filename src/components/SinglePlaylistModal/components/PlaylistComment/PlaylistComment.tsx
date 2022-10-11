import React, { FC } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
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
        <Flex alignItems='center' justifyContent='space-between' p={0} m={0} gap={1}>
          <Box w='full' flex={1}>
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
          <Button
            variant='link'
            p={0}
            m={0}
            alignItems='flex-end'
            justifyContent='flex-end'
            minW='auto'
            cursor='pointer'
            _hover={{ filter: 'brightness(150%)' }}
            onClick={handleClickHeart}
            disabled={!authStore.isAuthenticated}
          >
            <Box
              textAlign='center'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
            >
              <Box margin={0}>
                {heartStore.isHearted(hearteable) ? (
                  <RiHeart3Fill size='14px' color='#F36073' />
                ) : (
                  <RiHeart3Line size='14px' color='#F36073' />
                )}
              </Box>
              <Text color='#F36073' fontSize='12px' fontWeight='normal'>
                {comment.heartsCount}
              </Text>
            </Box>
          </Button>
        </Flex>
      </Box>
    );
  },
);

export default PlaylistComment;
