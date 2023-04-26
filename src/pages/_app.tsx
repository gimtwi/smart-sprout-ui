import { ApolloProvider } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import "src/styles/globals.css";
import { apolloClient } from "src/utils/apolloClient";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ApolloProvider>
  );
};

export default MyApp;
