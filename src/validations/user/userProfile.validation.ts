import * as Yup from 'yup';

export const userProfileValidation = Yup.object({
  email: Yup.string()
    .email('Valid email')
    .max(320, 'Max 320')
    .required('Required'),

  nickname: Yup.string().max(20, 'Max 20').required('Required'),

  firstName: Yup.string().max(100, 'Max 100').required('Required'),

  lastName: Yup.string().max(100, 'Max 100').required('Required'),

  country: Yup.string().max(320, 'Max 320').required('Required'),
});
