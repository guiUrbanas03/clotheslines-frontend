import { StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const PlaylistComments = () => {
  return (
    <VStack divider={<StackDivider opacity={0.5} />} alignItems='stretch'>
      <VStack alignItems='stretch'>
        <Text fontSize='sm' fontWeight='semibold'>
          Comment_nickname 1
        </Text>
        <Text fontSize='sm' fontWeight='light'>
          Comment 1 Comment 1 Comment 1 Comment 1
        </Text>
      </VStack>
      <VStack alignItems='stretch'>
        <Text fontSize='sm' fontWeight='semibold'>
          Comment_nickname 2
        </Text>
        <Text fontSize='sm' fontWeight='light'>
          Comment 2 Comment 2 Comment 2 Comment 2
        </Text>
      </VStack>
      <VStack alignItems='stretch'>
        <Text fontSize='sm' fontWeight='semibold'>
          Comment_nickname 3
        </Text>
        <Text fontSize='sm' fontWeight='light'>
          Comment 3 Comment 3
        </Text>
      </VStack>
      <VStack alignItems='stretch'>
        <Text fontSize='sm' fontWeight='semibold'>
          Comment_nickname 4
        </Text>
        <Text fontSize='sm' fontWeight='light'>
          Comment 4 Comment 4 Comment 4 Comment 4 Comment 4 Comment 4 Comment 4
          Comment 4 Comment 4
        </Text>
      </VStack>
      <VStack alignItems='stretch'>
        <Text fontSize='sm' fontWeight='semibold'>
          Comment_nickname 5
        </Text>
        <Text fontSize='sm' fontWeight='light'>
          Comment 5
        </Text>
      </VStack>
    </VStack>
  );
};

export default PlaylistComments;
