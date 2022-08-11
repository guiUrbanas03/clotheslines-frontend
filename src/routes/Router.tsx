import React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import { HomePage, ProfilePage, RegisterPage } from '../pages';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { useStores } from '../hooks';
import PlaylistFeedPage from '../pages/PlaylistFeedPage/PlaylistFeedPage';
import CreatePlaylistPage from '../pages/CreatePlaylistPage/CreatePlaylistPage';

const Router: React.FunctionComponent = observer((): JSX.Element => {
  const { authStore } = useStores();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/'>
            <Route path='playlists' element={<PlaylistFeedPage />} />
            <Route
              element={
                <ProtectedRoute
                  hasAccess={!authStore.isAuthenticated}
                  redirectTo='playlists'
                />
              }
            >
              <Route index element={<HomePage />} />
              <Route path='register' element={<RegisterPage />} />
            </Route>
            <Route
              element={
                <ProtectedRoute
                  hasAccess={authStore.isAuthenticated}
                  redirectTo='/'
                />
              }
            >
              <Route path='create-playlist' element={<CreatePlaylistPage />} />
              <Route path='profile' element={<ProfilePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export { Router };
