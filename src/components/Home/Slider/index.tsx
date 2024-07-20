import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
        {
            color: "#B5D3DA",
            src: "/assets/academiaHub.png"
        },
        {
            color: "#455974",
            src: "/assets/weather.png"
        },
        {
            color: "#D2D5DA",
            src: "/assets/portfolio 2.0.png"
        },
        {
            color: "#1E1E1E",
            src: "/assets/viewtubee.png"
        }
    ];
    
    const slider2 = [
        {
            color: "#333333",
            src: "/assets/snake game.png"
        },
        {
            color: "#0D1C46",
            src: "/assets/portfolio 1.0.png"
        },
        {
            color: "#222222",
            src: "/assets/mockups/canvas.png"
        },
        {
            color: "#3B3A45",
            src: "/assets/hoobank clone.png"
        }
    ];

const Slider = () => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div className={styles.project} style={{backgroundColor: project.color}} key={index}>
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}
                                    loading='eager'/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div className={styles.project} style={{backgroundColor: project.color}} key={index}>
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}
                                    loading='eager'/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
        </div>
  )
}

export default Slider