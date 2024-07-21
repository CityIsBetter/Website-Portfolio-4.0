import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Curve from "@/components/Curve";
import Landing from "@/components/Home/Landing";
import Description from "@/components/Home/Description";
import Slider from "@/components/Home/Slider";
import Contact from "@/components/Contact";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { slide } from "@/components/anim/anim";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <Head>
        <title>Mahesh Paul | Home</title>
        <meta name="description" content="Mahesh Paul's Website Portfolio, Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve>
        <motion.main
          className={styles.main}
          ref={container}
          initial="initial"
          animate="open"
          exit="closed"
          variants={slide}
        >
          <Landing />
          <Description />
          <Slider />
          <motion.div style={{ height }} className={styles.circleContainer}>
            <div className={styles.circle}></div>
          </motion.div>
          <Contact />
        </motion.main>
      </Curve>
    </>
  );
}
