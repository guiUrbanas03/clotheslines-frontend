import { FormikProps } from 'formik';

export function showFormikFormError<FieldValues>(
  formik: FormikProps<FieldValues>,
  field: keyof FieldValues,
) {
  return !!(formik.touched[field] && formik.errors[field]);
}
