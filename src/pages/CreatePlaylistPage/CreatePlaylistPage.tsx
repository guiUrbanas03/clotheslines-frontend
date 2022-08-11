import React from 'react';
import { Box } from '@chakra-ui/react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import Clothesline from '../../components/Clothesline/Clothesline';
import CreatePlaylistForm from '../../components/forms/CreatePlaylistForm/CreatePlaylistForm';

const CreatePlaylistPage = () => {
  return (
    <LayoutContainer
      gap={false}
      boxProps={{ mt: '40px', paddingX: 0, pb: '50px' }}
    >
      <Clothesline />
      <Box paddingX={[4, 6, 8]} mt={2}>
        <CreatePlaylistForm />
      </Box>
    </LayoutContainer>
  );
};

export default CreatePlaylistPage;
