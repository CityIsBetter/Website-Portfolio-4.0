import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Magnetic from '../Magnetic';
import Nav from '../Nav';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Add or remove the 'no-scroll' class based on 'isActive'
    if (isActive) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Cleanup function to remove 'no-scroll' when component unmounts
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isActive]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href='/'>
              <Image
                alt="logo"
                src="/assets/Logo.png"
                draggable={false}
                width={290}
                height={50}
              />
            </Link>
          </div>
          <div className={styles.nav}>
            <Magnetic>
              <div className={styles.el}>
                <Link href='/'>Home</Link>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <Link href='/about'>About</Link>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <Link href='/projects'>Projects</Link>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <Link href='/contact'>Contact</Link>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </div>
          <div className={styles.menuButton} onClick={() => setIsActive(!isActive)}>
            <div className={styles.el}>
              Menu
              <div className={styles.indicator}></div>
            </div>
          </div>
        </div>
        <AnimatePresence mode='wait'>
          {isActive && <Nav close={() => setIsActive(false)} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
