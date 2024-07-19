import React, { useRef, useEffect } from 'react';
import styles from './style.module.scss';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import gsap from "gsap";
import { slideUp } from '@/components/anim/anim';

import Router from 'next/router'
import Image from 'next/image'

const Landing = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    const container = useRef(null);
    const phraseContainer = useRef(null);

    const isPhraseInView = useInView(phraseContainer);

    const phrase = "Eager to learn and grow, I'm constantly exploring new technological frontiers to develop creative and impactful software projects.";
  
    let xPercent = 0;
    let direction = -1;
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      let animationFrameId;

      const animate = () => {
        if(xPercent <= -100){
          xPercent = 0;
        }
        if(xPercent > 0){
          xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent});
        gsap.set(secondText.current, {xPercent: xPercent});
        xPercent += 0.03 * direction;
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
  
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.05,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => direction = e.direction * -1
        },
        x: "-500px",
      });

      // Cleanup function to stop the animation when the component unmounts
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
  
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    });
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "25vh"]);

    return (
      <main className={styles.Landing} ref={container}>
        <div className={styles.header_bg}> 
            <div >
                <motion.div style={{y}} className={styles.parallaxContainer}>
                    <Image src="/assets/profile.png" alt="profile picture" draggable={false}  fill={true} loading='eager'/>
                </motion.div>
            </div> 
        </div>
        <div className={styles.phraseContainer} >
          <svg className={styles.phraseSvg} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L31 31M31 31V1M31 31H1" stroke="black"/></svg>
          <div className={styles.phrase} >
            <p ref={phraseContainer}>{
              phrase.split(" ").map( (word, index) => {
                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isPhraseInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                })
              }
            </p>
          </div>
        </div>
        <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
                <p ref={firstText}>Student ∘ Developer ∘ Tech Enthusiast ∘ </p>
                <p ref={secondText}>Student ∘ Developer ∘ Tech Enthusiast ∘ </p>
            </div>
        </div>
      </main>
    );
};

export default Landing;
