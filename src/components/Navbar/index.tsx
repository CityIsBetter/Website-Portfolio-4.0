import React, { useState } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Magnetic from '../Magnetic'
import Nav from '../Nav'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href='/'><Image alt="logo" src="/assets/Logo.png" draggable={false} width={290} height={50}/></Link>
          </div>
          <div className={styles.nav}>
          <Magnetic><div className={styles.el}>
                <Link href='/'>Home</Link>
                <div className={styles.indicator}></div>
            </div></Magnetic>
            <Magnetic><div className={styles.el}>
              <Link href='/about'>About</Link>
                <div className={styles.indicator}></div>
            </div></Magnetic>
            <Magnetic><div className={styles.el}>
                <Link href='/projects'>Projects</Link>
                <div className={styles.indicator}></div>
            </div></Magnetic>
            <Magnetic><div className={styles.el}>
                <Link href='/contact'>Contact</Link>
                <div className={styles.indicator}></div>
            </div></Magnetic>
          </div>
          <Magnetic>
              <div className={styles.menuButton} onClick={() => setIsActive(!isActive)}>
                <div className={styles.el}>Menu<div className={styles.indicator}></div></div>
              </div>
            </Magnetic>
            <AnimatePresence mode='wait'>
            { isActive && <Nav close={undefined} />}</AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar