import Curve from '@/components/Curve'
import React, { useRef } from 'react'
import styles from './style.module.scss'
import Line from '@/components/Line'
import Contact from '@/components/Contact'
import Project from './project'
import Magnetic from '@/components/Magnetic'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { slideUp } from '@/components/anim/anim'
import { Head } from 'next/document'

export default function Projects() {

  const phraseP = "My selected Projects showcase, All personal projects done purely by myself. Every project source code can be found in my Github profile. These are Open-Source Projects, so if you are interested check out and feel free to contribute and make the projects better for everyone!";

  const phrasePContainer = useRef(null);
  const container = useRef<HTMLDivElement>(null);

  const isPInView = useInView(phrasePContainer);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <Head>
        <title>Mahesh Paul | Projects</title>
        <meta name="description" content="Mahesh Paul's Website Portfolio, Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Curve>
      <main className={styles.main}>
        <div className={styles.projects}>
          <div className={styles.projectContainer} ref={container}>
            <div className={styles.title}>My Projects</div>
            <motion.div className={styles.buttonContainer} style={{x}}>
              <Magnetic>
                <div className={styles.button}>
                  <svg width="103" height="74" viewBox="0 0 103 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.0909 1L34.7273 73M83 18.1818L101 36.1818L83 54.1818M20 18.1818L2 36.1818L20 54.1818" stroke="white" stroke-width="2"/></svg>
                </div>
              </Magnetic>
            </motion.div>
            <Line scolor='#fff' w={.8} sright={0} />
            <div className={styles.content}>
              <motion.svg style={{scale: 7}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
              </motion.svg>
              <p>
                {
                  phraseP.split(" ").map((word, index) => (
                    <span className={styles.mask} ref={phrasePContainer} key={index}>
                      <motion.span variants={slideUp} custom={index} animate={isPInView ? "open" : "closed"}>{word}</motion.span>
                    </span>
                  ))
                }
                <br/>
                <br/>
                <br/>
                <br/>
                <span className={styles.span}>Constantly creating and developing ideas...</span>
              </p>
              </div>
            </div>
        </div>
        <Project />
        <Contact />
      </main>
    </Curve>
    </>
  )
}
