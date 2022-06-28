import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import { RootStoreProvider } from './contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RootStoreProvider>
      <ColorModeScript initialColorMode='light' />
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
);
