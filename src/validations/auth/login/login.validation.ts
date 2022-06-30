import * as Yup from 'yup';

export const loginValidation = Yup.object({
  email: Yup.string().email('Valid email').required('Required'),
  password: Yup.string().required('Required'),
});
