import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Formik, FormikProps } from 'formik';
import { observer } from 'mobx-react';
import Card from '../../components/Card/Card';
import Clothesline from '../../components/Clothesline/Clothesline';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { registerUserValidation } from '../../validations/auth/register/register.validation';
import FormValidationError from '../../components/FormValidationError/FormValidationError';
import { RegisterFormValue, RegisterFormValues } from './RegisterPage.types';

export const RegisterPage: React.FunctionComponent = observer(
  (): JSX.Element => {
    const shouldShowError = (
      formik: FormikProps<RegisterFormValues>,
      field: RegisterFormValue,
    ): boolean => !!(formik.touched[field] && formik.errors[field]);

    return (
      <>
        <Box ml={['0', '0', '220px']} mt='80px' paddingX={[4, 6, 8]}>
          <HStack spacing={2}>
            <Link to='/'>
              <IconButton
                icon={<FaArrowLeft />}
                aria-label='back'
                bgColor={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
              />
            </Link>
            <Heading size='lg'>Register</Heading>
          </HStack>
        </Box>
        <Box ml={['0', '0', '183px']}>
          <Clothesline />
          <Box paddingX={[4, 6, 8]} mt={2}>
            <Card
              withClothespin
              boxStyle={{ maxWidth: '500px', marginX: 'auto' }}
            >
              <Formik
                initialValues={{
                  email: '',
                  nickname: '',
                  firstName: '',
                  lastName: '',
                  country: '',
                  password: '',
                  passwordConfirmation: '',
                }}
                validationSchema={registerUserValidation}
                onSubmit={(values) => {
                  console.log(JSON.stringify(values, null, 2));
                }}
              >
                {(formik: FormikProps<RegisterFormValues>) => (
                  <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} justifyContent='center'>
                      <Input
                        type='email'
                        size='lg'
                        fontSize='md'
                        placeholder='Email'
                        id='email'
                        {...formik.getFieldProps('email')}
                      ></Input>
                      <FormValidationError
                        show={shouldShowError(formik, 'email')}
                        message={formik.errors.email}
                      />

                      <Input
                        size='lg'
                        fontSize='md'
                        placeholder='Nickname'
                        id='nickname'
                        {...formik.getFieldProps('nickname')}
                      ></Input>
                      <FormValidationError
                        show={shouldShowError(formik, 'nickname')}
                        message={formik.errors.nickname}
                      />

                      <Input
                        size='lg'
                        fontSize='md'
                        placeholder='First name'
                        id='firstName'
                        {...formik.getFieldProps('firstName')}
                      ></Input>
                      <FormValidationError
                        show={shouldShowError(formik, 'firstName')}
                        message={formik.errors.firstName}
                      />

                      <Input
                        size='lg'
                        fontSize='md'
                        placeholder='Last name'
                        id='lastName'
                        {...formik.getFieldProps('lastName')}
                      ></Input>
                      <FormValidationError
                        show={shouldShowError(formik, 'lastName')}
                        message={formik.errors.lastName}
                      />

                      <Input
                        size='lg'
                        fontSize='md'
                        placeholder='Country'
                        id='country'
                        {...formik.getFieldProps('country')}
                      ></Input>
                      <FormValidationError
                        show={shouldShowError(formik, 'country')}
                        message={formik.errors.country}
                      />

                      <Input
                        type='password'
                        size='lg'
                        fontSize='md'
                        placeholder='Password'
                        id='password'
                        {...formik.getFieldProps('password')}
                      ></Input>
                      <FormValidationError
                        show={shouldShowError(formik, 'password')}
                        message={formik.errors.password}
                      />

                      <Input
                        type='password'
                        size='lg'
                        fontSize='md'
                        placeholder='Confirm password'
                        id='passwordConfirmation'
                        {...formik.getFieldProps('passwordConfirmation')}
                      ></Input>
                      <FormValidationError
                        show={shouldShowError(formik, 'passwordConfirmation')}
                        message={formik.errors.passwordConfirmation}
                      />

                      <Button
                        type='submit'
                        fontWeight='normal'
                        fontSize='md'
                        bgColor={useColorModeValue(
                          'light.secondary',
                          '#325596',
                        )}
                        size='lg'
                        width='100%'
                      >
                        Register
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Card>
          </Box>
        </Box>
      </>
    );
  },
);
