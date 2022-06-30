export type RegisterFormValues = {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  country: string;
  password: string;
  passwordConfirmation: string;
};

export type RegisterFormValue = keyof RegisterFormValues;
