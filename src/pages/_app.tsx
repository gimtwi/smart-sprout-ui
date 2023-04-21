import { AnimatePresence } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import "src/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default MyApp;
