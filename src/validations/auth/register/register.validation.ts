import * as Yup from 'yup';

export const registerUserValidation = Yup.object({
  email: Yup.string().email('Valid email').required('Required'),
  nickname: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  passwordConfirmation: Yup.string().required('Required'),
});
