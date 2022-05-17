import React, { useEffect, useState } from 'react';
import ClotheslinesApiService from './services/clotheslinesApiService/clothesLinesApiService';
import { RootStoreProvider } from './contexts';
import { Router } from './routes';

const App: React.FunctionComponent = (): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        ClotheslinesApiService.init();
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return appIsReady ? (
    <RootStoreProvider>
      <Router />
    </RootStoreProvider>
  ) : null;
};

export default App;
