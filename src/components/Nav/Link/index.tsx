import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../BurgerMenu/anim';
import Magnetic from '@/components/Magnetic';

export default function RLink({data, isActive, setSelectedIndicator, Click} : {data: any, isActive: boolean, setSelectedIndicator: any, Click: any}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
         <Magnetic><Link href={href} onClick={Click}>{title}</Link></Magnetic>
      </motion.div>
    )
}