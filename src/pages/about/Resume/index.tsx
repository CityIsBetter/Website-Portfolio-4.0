'use client';
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

import styles from './style.module.scss'
import Line from '@/components/Line'
import Magnetic from '@/components/Magnetic'

const Resume = () => {

  const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.resume}>
      <div className={styles.resumeContainer}>
        <div className={styles.title}>The Resume</div>
        <Line scolor={"#000"} w={.8} sright={0}/>
          <div className={styles.resumeText}>
            <p>Tech Enthusiast CS <span>student</span> at SRM University, Kattankulathur with a passion for technology. Possesses strong foundational skills in
            <span> Python, Java, C, C++,  Web Development(HTML, JS, CSS, ReactJS, NodeJS, NextJS)</span> and <span>AI/ML</span> gained through coursework and personal projects.</p>
            <div className="" data-scroll data-scroll-speed={0.05}>
            <a href='/assets/resume.pdf' target='_blank'><Magnetic>
              <div className={styles.button} >Resume</div>
            </Magnetic></a>
          </div>
          </div>
          <div className={styles.skillText}>
            <p className={styles.subTitle}>01 Skills</p>
            <Line scolor={"#000"} w={.8} sright={0}/>
            <table>
              <td>
                <tr>Python</tr>
                <tr>C</tr>
                <tr>C++</tr>
                <tr>Java</tr>
              </td>
              <td>
                <tr>HTML</tr>
                <tr>CSS/SCSS</tr>
                <tr>JavaScript</tr>
              </td>
              <td>
                <tr>ReactJS</tr>
                <tr>NodeJS</tr>
                <tr>NextJS</tr>
                <tr>TailwindCSS</tr>
              </td>
              <td>
                <tr>MySQL</tr>
                <tr>Oracle SQL</tr>
                <tr>Firebase</tr>
              </td>
              <td>
                <tr>Git</tr>
                <tr>Vercel</tr>
                <tr>Netlify</tr>
                <tr>MATLAB</tr>
              </td>
            </table>
          </div>
          <div className={styles.skillText}>
            <p className={styles.subTitle}>02 Certifications</p>
            <Line scolor={"#000"} w={.8} sright={0}/>
            <table>
              <tr>
                  <td>Python for Data Science</td>
                  <td>NPTEL</td>
                  <td>2023</td>
              </tr>
              <tr>
                  <td>Programming in Java</td>
                  <td>NPTEL</td>
                  <td>2023</td>
              </tr>
              <tr>
                  <td>Introduction to Database System</td>
                  <td>NPTEL</td>
                  <td>2024</td>
              </tr>
              <tr>
                  <td>AWS Certified Machine Learning</td>
                  <td>Amazon Web Services</td>
                  <td>2024</td>
              </tr>
              <tr>
                  <td>Digital Image Processing</td>
                  <td>Great Learning</td>
                  <td>2024</td>
              </tr>
              <tr>
                  <td>Computer Vision Essentials</td>
                  <td>Great Learning</td>
                  <td>2024</td>
              </tr>
              <tr>
                  <td>Image Processing Onramp</td>
                  <td>MathWorks</td>
                  <td>2024</td>
              </tr>
              <tr>
                  <td>MATLAB Onramp</td>
                  <td>MathWorks</td>
                  <td>2024</td>
              </tr>
          </table>
            <p className={styles.proofText}>proofs in my <a href='https://www.linkedin.com/in/mahesh-paul/details/certifications/' target='_blank'>LinkedIn <svg width="12" height="12" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 24.5L24.5 1M24.5 1V24.5M24.5 1H1" stroke="black" stroke-width="2"/></svg></a></p>
          </div>
      </div>
      <motion.div style={{height}} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  )
}

export default Resume