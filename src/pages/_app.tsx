import BurgerMenu from "@/components/BurgerMenu";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import '@/styles/styles.scss';
import Navbar from "@/components/Navbar";
import { Raleway } from "@next/font/google";

const raleway = Raleway({
  subsets: ['latin'],
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={raleway.className}>
      <Navbar />
      <BurgerMenu />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
