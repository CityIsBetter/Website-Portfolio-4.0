import React, { forwardRef } from 'react'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

import styles from './style.module.scss';
import { slideUp } from '@/components/anim/anim';
import Line from '@/components/Line';
import Magnetic from '@/components/Magnetic';

import Router from 'next/router'

// export const fixTimeoutTransition = (timeout) => {
//   Router.events.on('beforeHistoryChange', () => {
//     // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
//     // if Next.js is going to remove them or not since we are going to remove the copies ourselves
//     // later on when the transition finishes.
//     const nodes = document.querySelectorAll('link[rel=stylesheet], style:not([media=x])')
//     const copies = [...nodes].map((el) => el.cloneNode(true))

//     for (let copy of copies) {
//       // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
//       // change process.
//       copy.removeAttribute('data-n-p')
//       copy.removeAttribute('data-n-href')

//       // Add duplicated nodes to the DOM.
//       document.head.appendChild(copy)
//     }

//     const handler = () => {
//       // Emulate a `.once` method using `.on` and `.off`
//       Router.events.off('routeChangeComplete', handler)

//       window.setTimeout(() => {
//         for (let copy of copies) {
//           // Remove previous page's styles after the transition has finalized.
//           document.head.removeChild(copy)
//         }
//       }, timeout)
//     }

//     Router.events.on('routeChangeComplete', handler)
//   })
// }

// fixTimeoutTransition(1000)



const Description = forwardRef(function index(props, ref) {

  const phraseA = "CSE student at SRM University, Kattankulathur with a passion for technology. Possesses strong foundational skills in Python, C, and web development gained through coursework and personal projects. ";
  const phraseW = "I dive into web development, Python, Java, C and Database projects with enthusiasm, driven by my own curiosity and passion for technology. My goal is to continuously learn and innovate, creating impactful solutions through my projects.";
  
  const descriptionA = useRef(null);
  const descriptionW = useRef(null);

  const isAInView = useInView(descriptionA);
  const isWInView = useInView(descriptionW);

  return (
    <div className={styles.description} >
        <div className={styles.content}>
          <div ref={descriptionA} className={styles.contentAbout}>
            <p>
            {
              phraseA.split(" ").map( (word, index) => {
                  return <span className={styles.mask} key={index}><motion.span variants={slideUp} custom={index} animate={isAInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
              })
            }
            </p>
            <div data-scroll data-scroll-speed={0.1}>
              
              <Link href={"/About"}><Magnetic><div className={styles.button}>About Me</div></Magnetic></Link>
            </div>
          </div>
          <div ref={descriptionW} className={styles.contentWorks}>
            <div className={styles.wTitle}>
              My <br/>Projects
            </div>
                      <p>{
              phraseW.split(" ").map( (word, index) => {
                  return <span className={styles.mask} key={index}><motion.span variants={slideUp} custom={index} animate={isWInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
              })
            }</p>
          </div>
          <div data-scroll data-scroll-speed={0.1} className={styles.wButton}>
              <Link href={"/Works"}><Magnetic><div className={styles.button}>My Works</div></Magnetic> </Link>             
          </div>  
        </div>
    </div>
  )
}
)
export default Description