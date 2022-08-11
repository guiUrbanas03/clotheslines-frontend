export type CreatePlaylistFormValues = {
  playlist: {
    title: string;
    description: string;
  };
  songs: Array<{ name: ''; artist: ''; album: '' }>;
};
