import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <Layout>
          <Box m="auto 32em">
          <Component {...pageProps} />
          </Box>
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
