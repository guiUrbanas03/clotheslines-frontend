import React from 'react';
import { observer } from 'mobx-react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Clothesline from '../../components/Clothesline/Clothesline';
import Card from '../../components/Card/Card';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';

export const HomePage: React.FunctionComponent = observer((): JSX.Element => {
  return (
    <>
      <LayoutContainer boxProps={{ marginTop: '80px' }}>
        <Heading size='lg' textAlign={['center', 'left']} mb={2}>
          A home for tiny playlists
        </Heading>
        <Text textAlign={['center', 'left']}>Share and discover new songs</Text>
      </LayoutContainer>

      <LayoutContainer gap={false} boxProps={{ paddingX: 0 }}>
        <Clothesline />
        <Box paddingX={[4, 6, 8]} mt={2}>
          <Card
            boxStyle={{ maxWidth: '500px', marginX: 'auto' }}
            withClothespin
          >
            <LoginForm />
          </Card>
        </Box>
      </LayoutContainer>
    </>
  );
});
