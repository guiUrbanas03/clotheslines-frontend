import * as Yup from 'yup';

export const createPlaylistValidation = Yup.object({
  playlist: Yup.object().shape({
    title: Yup.string().max(255, 'Max 50').min(1, 'Min 1').required('Required'),
    description: Yup.string().max(255, 'Max 255').notRequired().nullable(),
  }),
  songs: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string()
          .max(255, 'Max 50')
          .min(1, 'Min 1')
          .required('Required'),
        artist: Yup.string()
          .max(255, 'Max 50')
          .min(1, 'Min 1')
          .required('Required'),
        album: Yup.string().max(255, 'Max 50').nullable().notRequired(),
      }),
    )
    .required('Songs are required')
    .min(1)
});
