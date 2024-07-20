import BurgerMenu from "@/components/BurgerMenu";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import '@/styles/styles.scss';
import Navbar from "@/components/Navbar";
import { Raleway } from "@next/font/google";
import Router from "next/router";

const raleway = Raleway({
  subsets: ['latin'],
})

export default function App({ Component, pageProps, router }: AppProps) {
  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

 Router.events.on("routeChangeComplete", routeChange );
 Router.events.on("routeChangeStart", routeChange );
 
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
