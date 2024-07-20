import Curve from '@/components/Curve';
import React, { useRef } from 'react';
import styles from './style.module.scss';
import { motion, useInView } from 'framer-motion';
import Magnetic from '@/components/Magnetic';
import Line from '@/components/Line';
import { slideUp } from '@/components/anim/anim';
import Image from 'next/image';
import Resume from './Resume';
import Contact from '@/components/Contact';
import Head from 'next/head';

export default function About() {
  const phraseAContainer = useRef(null);
  const phraseA = "I'm a tech enthusiast with a passion for software development. Ever since I was young, I've been fascinated by technology. I'm excited to see where this journey takes me as a developer.";

  const isAInView = useInView(phraseAContainer);

  return (
    <>
      <Head>
        <title>Mahesh Paul | About</title>
        <meta name="description" content="Mahesh Paul's Website Portfolio, About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <Curve>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.aboutContainer}>
            <div className={styles.heading}>About <span>Mahesh Paul</span></div>
            <motion.div className={styles.buttonContainer} >
              <Magnetic>
                <div className={styles.button}>
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7174 117.798L14.5472 117.24L13.7174 117.798ZM138.283 117.798L137.453 117.24L138.283 117.798ZM19.0486 124.803L18.0902 124.518L17.9346 125.04L18.2896 125.454L19.0486 124.803ZM132.951 124.803L133.71 125.454L134.065 125.04L133.909 124.518L132.951 124.803ZM2 76C2 35.1309 35.1309 2 76 2V0C34.0264 0 0 34.0264 0 76H2ZM76 2C116.869 2 150 35.1309 150 76H152C152 34.0264 117.974 0 76 0V2ZM76 150C50.3999 150 27.8355 137.001 14.5472 117.24L12.8876 118.356C26.5315 138.646 49.7061 152 76 152V150ZM14.5472 117.24C6.6237 105.456 2 91.2695 2 76H0C0 91.6793 4.74914 106.252 12.8876 118.356L14.5472 117.24ZM150 76C150 91.2695 145.376 105.456 137.453 117.24L139.112 118.356C147.251 106.252 152 91.6793 152 76H150ZM137.453 117.24C124.165 137.001 101.6 150 76 150V152C102.294 152 125.468 138.646 139.112 118.356L137.453 117.24ZM91.6667 59.3333C91.6667 67.9858 84.6525 75 76 75V77C85.757 77 93.6667 69.0904 93.6667 59.3333H91.6667ZM76 75C67.3475 75 60.3333 67.9858 60.3333 59.3333H58.3333C58.3333 69.0904 66.243 77 76 77V75ZM60.3333 59.3333C60.3333 50.6809 67.3475 43.6667 76 43.6667V41.6667C66.243 41.6667 58.3333 49.5763 58.3333 59.3333H60.3333ZM76 43.6667C84.6525 43.6667 91.6667 50.6809 91.6667 59.3333H93.6667C93.6667 49.5763 85.757 41.6667 76 41.6667V43.6667ZM76 86.25C60.1126 86.25 46.6887 92.2978 36.7275 100.076C26.7909 107.836 20.2142 117.386 18.0902 124.518L20.007 125.089C21.9828 118.455 28.2567 109.228 37.9584 101.653C47.6355 94.0959 60.6374 88.25 76 88.25V86.25ZM76 150C53.5195 150 33.3809 139.977 19.8076 124.152L18.2896 125.454C32.2266 141.703 52.9115 152 76 152V150ZM76 88.25C91.3626 88.25 104.364 94.0959 114.041 101.653C123.743 109.228 130.017 118.455 131.993 125.089L133.909 124.518C131.785 117.386 125.209 107.836 115.272 100.076C105.311 92.2978 91.8874 86.25 76 86.25V88.25ZM132.192 124.152C118.619 139.977 98.4805 150 76 150V152C99.0886 152 119.773 141.703 133.71 125.454L132.192 124.152Z" fill="white"/>
                  </svg>
                </div>
              </Magnetic>
            </motion.div>
            <div className={styles.line}><Line scolor={"#fff"} w={.8} sright={0} /></div>
            <div className={styles.aboutText} >
              <motion.svg style={{scale: 7}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
              </motion.svg>
              <p >
                {
                  phraseA.split(" ").map((word, index) => (
                    <span className={styles.mask} ref={phraseAContainer} key={index}>
                      <motion.span variants={slideUp} custom={index} animate={isAInView ? "open" : "closed"}>{word}</motion.span>
                    </span>
                  ))
                }
                <br />
                <br />
                <br />
                <br />
                <span className={styles.span}>Always growing and learning...</span>
              </p>
              {/* <div className={styles.imgContainer}>
                <Image alt='portrait' src='/assets/temp.JPG' width={300} height={500} />
              </div> */}
            </div>
          </div>
        </div>
        <Resume />
        <Contact />
      </main>
    </Curve>
    </>
  );
}
