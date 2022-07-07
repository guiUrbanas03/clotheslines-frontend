import React from 'react';
import { observer } from 'mobx-react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Clothesline from '../../components/Clothesline/Clothesline';
import Card from '../../components/Card/Card';
import LoginForm from '../../components/forms/LoginForm/LoginForm';

export const HomePage: React.FunctionComponent = observer((): JSX.Element => {
  return (
    <>
      <Box ml={['0', '0', '220px']} mt='80px' paddingX={[4, 6, 8]}>
        <Heading size='lg' textAlign={['center', 'left']} mb={2}>
          Share your tiny playlists
        </Heading>
        <Text textAlign={['center', 'left']}>Share and discover new songs</Text>
      </Box>
      <Box ml={['0', '0', '183px']}>
        <Clothesline />
        <Box paddingX={[4, 6, 8]} mt={2}>
          <Card
            boxStyle={{ maxWidth: '500px', marginX: 'auto' }}
            withClothespin
          >
            <LoginForm />
          </Card>
        </Box>
      </Box>
    </>
  );
});
