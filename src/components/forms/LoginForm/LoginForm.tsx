import React, { FC } from 'react';
import {
  Button,
  HStack,
  Input,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Formik, FormikProps } from 'formik';
import FormValidationError from '../../FormValidationError/FormValidationError';
import { Link, useNavigate } from 'react-router-dom';
import { loginValidation } from '../../../validations/auth/login/login.validation';
import { useStores } from '../../../hooks';
import { LoginFormValues } from '../../../pages/HomePage/HomePage.types';
import { showFormikFormError } from '../../../utils';

const LoginForm: FC = (): JSX.Element => {
  const { authStore } = useStores();
  const navigate = useNavigate();
  const toast = useToast();

  const loginButtonColor = useColorModeValue('light.secondary', '#325596');
  const guestButtonColor = useColorModeValue('light.primary', '#415F96');

  const handleSubmitLoginForm = async (
    values: LoginFormValues,
  ): Promise<void> => {
    const res = await authStore.login({
      email: values.email,
      password: values.password,
    });

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
        title: 'Invalid credentials.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginValidation}
      onSubmit={(values) => handleSubmitLoginForm(values)}
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
              show={showFormikFormError<LoginFormValues>(formik, 'email')}
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
              show={showFormikFormError<LoginFormValues>(formik, 'password')}
              message={formik.errors.password}
            />

            <Button
              type='submit'
              fontWeight='normal'
              fontSize='md'
              bgColor={loginButtonColor}
              size='lg'
            >
              Login
            </Button>
            <Text fontSize='md' alignSelf='center'>
              or
            </Text>
            <Button
              fontWeight='normal'
              bgColor={guestButtonColor}
              shadow='md'
              size='lg'
              fontSize='md'
              onClick={() => navigate('playlists')}
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
  );
};

export default LoginForm;
