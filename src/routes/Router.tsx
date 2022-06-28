import React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import { HomePage, LoginPage, ProfilePage, RegisterPage } from '../pages';

const Router: React.FunctionComponent = observer((): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/'>
            <Route index element={<HomePage />}></Route>
            <Route path='register' element={<RegisterPage />}></Route>
            <Route path='login' element={<LoginPage />}></Route>
            <Route path='profile' element={<ProfilePage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export { Router };
