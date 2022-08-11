import React from 'react';
import { Box, Input, Text, useToast } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import Clothespin from '../../Clothespin/Clothespin';
import SongsInputs from './components/SongsInputs/SongsInputs';
import { ErrorMessage, Formik, FormikProps } from 'formik';
import Fab from '../../Fab/Fab';
import { createPlaylistValidation } from '../../../validations/playlist/createPlaylist.validation';
import { CreatePlaylistFormValues } from './CreatePlaylistForm.types';
import { useStores } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

const CreatePlaylistForm = observer(() => {
  const { playlistStore } = useStores();
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Box maxW='600px' margin='0 auto' position='relative' shadow='lg'>
      <Clothespin
        boxStyle={{
          position: 'absolute',
          left: '50%',
          top: '-25px',
          transform: 'translateX(-50%)',
        }}
      />
      <Formik
        initialValues={{
          playlist: {
            title: '',
            description: '',
          },
          songs: [{ name: '', artist: '', album: '' }],
        }}
        validationSchema={createPlaylistValidation}
        onSubmit={async (values) => {
          try {
            const res = await playlistStore.createPlaylist(values);

            if (res && res.status === 200) {
              toast({
                title: res.message,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom-right',
              });

              navigate('/playlists');
            } else {
              toast({
                title: 'Invalid data.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'bottom-right',
              });
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {(formik: FormikProps<CreatePlaylistFormValues>) => (
          <form onSubmit={formik.handleSubmit}>
            <Box bgColor='blue.300' paddingX={6} paddingY={4} roundedTop='lg'>
              <Input
                id='playlist.title'
                color='white'
                variant='unstyled'
                fontWeight='medium'
                placeholder='Playlist name...'
                _placeholder={{ color: 'whiteAlpha.700' }}
                autoFocus
                {...formik.getFieldProps('playlist.title')}
              />
              <Box color='red.600' fontSize='sm' mt={1}>
                <ErrorMessage component='div' name='playlist.title' />
              </Box>
            </Box>
            <Box bgColor='white' roundedBottom='lg'>
              <SongsInputs formik={formik} />
            </Box>
            <Fab
              onClick={formik.submitForm}
              iconButtonProps={{
                icon: <Text fontSize='md'>Submit playlist</Text>,
                padding: 4,
                size: 'lg',
                bgColor: 'blue.300',
                color: 'white',
                rounded: 'full',
                right: [4, 4, 8, 6, 8],
                bottom: 6,
                'aria-label': 'Submit playlist',
              }}
            />
          </form>
        )}
      </Formik>
    </Box>
  );
});

export default CreatePlaylistForm;
