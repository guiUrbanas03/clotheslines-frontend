import React, { FC } from 'react';
import {
  Box,
  Center,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiHeart3Line } from 'react-icons/ri';
import { PlaylistCommentProps } from './PlaylistComment.types';
import { useStores } from '../../../../hooks';

const PlaylistComment: FC<PlaylistCommentProps> = ({
  comment,
}): JSX.Element => {
  const { authStore } = useStores();

  const textColor = useColorModeValue('blackAlpha.700', 'whiteAlpha.700');
  const nicknameColor = useColorModeValue('black', 'white');
  return (
    <Box w='full'>
      <HStack alignItems='stretch'>
        <Box>
          <Text
            fontSize='sm'
            fontWeight='medium'
            color={
              authStore.isAuthenticated && authStore.user.id === comment.profile.userId
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
        >
          <RiHeart3Line size='14px' color='#F36073' />
          <Text color='#F36073' fontSize='12px'>
            0
          </Text>
        </Center>
      </HStack>
    </Box>
  );
};

export default PlaylistComment;
