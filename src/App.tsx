import React, { useEffect, useState } from 'react';
import ClotheslinesApiService from './services/clotheslinesApiService/clothesLinesApiService';
import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './routes';
import { theme, themeWithGradient } from './themes/chakra-ui';
import { observer } from 'mobx-react';
import { useStores } from './hooks';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const App: React.FunctionComponent = observer((): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const { uiStore } = useStores();

  useEffect(() => {
    async function prepare() {
      try {
        ClotheslinesApiService.init();
        uiStore.fetchActiveGradientBackground();
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return appIsReady ? (
    <ChakraProvider
      theme={uiStore.activeGradientBackground ? themeWithGradient : theme}
    >
      <Router />
    </ChakraProvider>
  ) : null;
});

export default App;
