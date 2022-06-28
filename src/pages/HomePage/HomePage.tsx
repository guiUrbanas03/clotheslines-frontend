import React, { ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Clothesline from '../../components/Clothesline/Clothesline';
import { useStores } from '../../hooks';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { LoginFormField } from './HomePage.types';

export const HomePage: React.FunctionComponent = observer((): JSX.Element => {
  const store = useStores();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    await store.authStore.login(loginData.email, loginData.password);
  };

  const handleChangeLoginData = (
    event: ChangeEvent<HTMLInputElement>,
    field: LoginFormField,
  ) => {
    setLoginData((previous: any) => ({
      ...previous,
      [field]: event.target.value,
    }));
  };

  return (
    <>
      <Box ml={['0', '0', '220px']} mt='80px' paddingX={[4, 6, 8]}>
        <Heading size='lg' textAlign={['center', 'left']}>
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
            <VStack position='relative' alignItems='stretch' spacing={4}>
              <Input
                size='lg'
                placeholder='Email'
                fontSize='md'
                value={loginData.email}
                onChange={(event) => handleChangeLoginData(event, 'email')}
              />
              <Input
                size='lg'
                fontSize='md'
                placeholder='Password'
                value={loginData.password}
                onChange={(event) => handleChangeLoginData(event, 'password')}
              />
              <Button
                fontWeight='normal'
                fontSize='md'
                bgColor={useColorModeValue('light.secondary', '#325596')}
                size='lg'
                onClick={handleLogin}
              >
                Login
              </Button>
              <Text fontSize='md' alignSelf='center'>
                or
              </Text>
              <Button
                fontWeight='normal'
                bgColor={useColorModeValue('light.primary', '#415F96')}
                shadow='md'
                size='lg'
                fontSize='md'
              >
                Enter as a guest
              </Button>
              <HStack alignSelf='center'>
                <Text fontSize='sm'>New here?</Text>
                <Text
                  fontSize='sm'
                  color='light.ternary'
                  textDecoration='underline'
                >
                  <Link to='register'>Register now</Link>
                </Text>
              </HStack>
            </VStack>
          </Card>
        </Box>
      </Box>
    </>
  );
});
