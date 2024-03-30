import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import RootLayout from './layout';

function MyApp(Component: any, pageProps: any) {
  return (
    <ChakraProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}

export default MyApp;