import React, { FC } from 'react';
import { Formik, FormikProps } from 'formik';
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
import { showFormikFormError } from '../../../utils';
import { UserProfileFormValues } from './UserProfileForm.types';
import { userProfileValidation } from '../../../validations/user/userProfile.validation';

const UserProfileForm: FC = (): JSX.Element => {
  const { authStore, userStore } = useStores();
  const { user } = authStore;
  const navigate = useNavigate();
  const toast = useToast();
  const registerButtonColor = useColorModeValue('light.secondary', '#325596');

  const handleSubmitRegisterUserForm = async (
    values: UserProfileFormValues,
  ): Promise<void> => {
    const res = await userStore.update({
      user: {
        email: values.email,
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
        email: user.email,
        nickname: user.profile.nickname,
        firstName: user.profile.firstName,
        lastName: user.profile.lastName,
        country: user.profile.country,
      }}
      validationSchema={userProfileValidation}
      onSubmit={(values) => handleSubmitRegisterUserForm(values)}
    >
      {(formik: FormikProps<UserProfileFormValues>) => (
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
              show={showFormikFormError<UserProfileFormValues>(formik, 'email')}
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
              show={showFormikFormError<UserProfileFormValues>(
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
              show={showFormikFormError<UserProfileFormValues>(
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
              show={showFormikFormError<UserProfileFormValues>(
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
              show={showFormikFormError<UserProfileFormValues>(
                formik,
                'country',
              )}
              message={formik.errors.country}
            />

            <Button
              type='submit'
              fontWeight='normal'
              fontSize='md'
              bgColor={registerButtonColor}
              size='lg'
              width='100%'
            >
              Save
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default UserProfileForm;
