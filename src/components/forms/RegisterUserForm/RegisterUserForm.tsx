import React, { FC } from 'react';
import { Formik, FormikProps } from 'formik';
import { registerUserValidation } from '../../../validations/auth/register/register.validation';
import { useStores } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import FormValidationError from '../../FormValidationError/FormValidationError';
import { UserRole, UserStatus } from '../../../enums';
import { showFormikFormError } from '../../../utils';
import { RegisterUserFormValues } from './RegisterUserForm.types';

const RegisterUserForm: FC = (): JSX.Element => {
  const { authStore } = useStores();
  const navigate = useNavigate();
  const registerButtonColor = useColorModeValue('light.secondary', '#325596');
  const toast = useToast();

  const handleSubmitRegisterUserForm = async (
    values: RegisterUserFormValues,
  ): Promise<void> => {
    const res = await authStore.register({
      user: {
        email: values.email,
        status: UserStatus.active,
        role: UserRole.basic,
        password: values.password,
        password_confirmation: values.passwordConfirmation,
      },
      profile: {
        nickname: values.nickname,
        first_name: values.firstName,
        last_name: values.lastName,
        country: values.country,
      },
    });

    if (res && res.status === 200) {
      toast({
        title: res.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });

      navigate('/profile');
    } else {
      toast({
        title: 'Invalid data.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  return (
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
      onSubmit={(values) => handleSubmitRegisterUserForm(values)}
    >
      {(formik: FormikProps<RegisterUserFormValues>) => (
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
              show={showFormikFormError<RegisterUserFormValues>(
                formik,
                'email',
              )}
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
              show={showFormikFormError<RegisterUserFormValues>(
                formik,
                'nickname',
              )}
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
              show={showFormikFormError<RegisterUserFormValues>(
                formik,
                'firstName',
              )}
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
              show={showFormikFormError<RegisterUserFormValues>(
                formik,
                'lastName',
              )}
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
              show={showFormikFormError<RegisterUserFormValues>(
                formik,
                'country',
              )}
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
              show={showFormikFormError<RegisterUserFormValues>(
                formik,
                'password',
              )}
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
              show={showFormikFormError<RegisterUserFormValues>(
                formik,
                'passwordConfirmation',
              )}
              message={formik.errors.passwordConfirmation}
            />

            <Button
              type='submit'
              fontWeight='normal'
              fontSize='md'
              bgColor={registerButtonColor}
              size='lg'
              width='100%'
            >
              Register
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default RegisterUserForm;
