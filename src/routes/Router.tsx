import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, ProfilePage, RegisterPage } from '../pages';

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />}></Route>
          <Route path='register' element={<RegisterPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='profile' element={<ProfilePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
