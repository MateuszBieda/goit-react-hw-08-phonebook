import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Box
              bgGradient="linear(to-r, green.300, yellow.400, orange.200)"
              minHeight="100vh"
              width="100vw"
              position="relative"
              zIndex="1"
              p='3'
            >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
          
              <App />
           
          </BrowserRouter>
        </PersistGate>
      </Provider>
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
