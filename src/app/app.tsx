import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';

function MyApp(Component: any, pageProps: any ) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;