import React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import { HomePage, LoginPage, ProfilePage, RegisterPage } from '../pages';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { useStores } from '../hooks';

const Router: React.FunctionComponent = observer((): JSX.Element => {
  const { authStore } = useStores();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/'>
            <Route
              element={
                <ProtectedRoute
                  hasAccess={!authStore.isAuthenticated}
                  redirectTo='profile'
                />
              }
            >
              <Route index element={<HomePage />} />
              <Route path='login' element={<LoginPage />} />
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
              <Route path='profile' element={<ProfilePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export { Router };
