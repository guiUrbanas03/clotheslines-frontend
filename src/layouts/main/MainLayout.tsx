import React, { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import Header from '../../components/Header/Header';

const MainLayout: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Box>
        <Header />
      </Box>
      <Outlet />
    </>
  );
};

export default MainLayout;
