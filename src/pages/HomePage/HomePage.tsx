import React from 'react';
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
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { Formik, FormikProps } from 'formik';
import FormValidationError from '../../components/FormValidationError/FormValidationError';
import { loginValidation } from '../../validations/auth/login/login.validation';
import { LoginFormValue, LoginFormValues } from './HomePage.types';

export const HomePage: React.FunctionComponent = observer((): JSX.Element => {
  const shouldShowError = (
    formik: FormikProps<LoginFormValues>,
    field: LoginFormValue,
  ): boolean => !!(formik.touched[field] && formik.errors[field]);

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
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginValidation}
              onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2));
              }}
            >
              {(formik: FormikProps<LoginFormValues>) => (
                <form onSubmit={formik.handleSubmit}>
                  <VStack position='relative' alignItems='stretch' spacing={4}>
                    <Input
                      type='email'
                      size='lg'
                      placeholder='Email'
                      fontSize='md'
                      id='email'
                      {...formik.getFieldProps('email')}
                    />
                    <FormValidationError
                      show={shouldShowError(formik, 'email')}
                      message={formik.errors.email}
                    />

                    <Input
                      type='password'
                      size='lg'
                      fontSize='md'
                      placeholder='Password'
                      id='password'
                      {...formik.getFieldProps('password')}
                    />
                    <FormValidationError
                      show={shouldShowError(formik, 'password')}
                      message={formik.errors.password}
                    />

                    <Button
                      type='submit'
                      fontWeight='normal'
                      fontSize='md'
                      bgColor={useColorModeValue('light.secondary', '#325596')}
                      size='lg'
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
                      onClick={() => alert('hello guest!')}
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
                </form>
              )}
            </Formik>
          </Card>
        </Box>
      </Box>
    </>
  );
});
