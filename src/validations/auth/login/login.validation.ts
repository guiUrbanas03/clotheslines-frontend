import * as Yup from 'yup';

export const loginValidation = Yup.object({
  email: Yup.string().email('Valid email').max(320, 'Max 320').required('Required'),
  password: Yup.string().min(8, 'Min 8').max(999, 'Max 999').required('Required'),
});
