import { FormikProps } from 'formik';
import { CreatePlaylistFormValues } from '../../CreatePlaylistForm.types';

export type SongFormItemProps = {
  formik: FormikProps<CreatePlaylistFormValues>;
};
