import "@/styles/globals.css";
import '@/styles/styles.scss';
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Raleway } from "@next/font/google";
import Router from "next/router";
import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "@/components/Navbar";
import BurgerMenu from "@/components/BurgerMenu";

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

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

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
