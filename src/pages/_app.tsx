import BurgerMenu from "@/components/BurgerMenu";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import '@/styles/styles.scss';
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navbar />
      <BurgerMenu />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
