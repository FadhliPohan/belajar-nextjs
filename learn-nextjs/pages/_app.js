import { UserContextProvider } from "@/context/userContext";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Chakra UI theme configuration (optional)
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
