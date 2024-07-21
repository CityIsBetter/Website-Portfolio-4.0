'use client';
import styles from './style.module.scss';
import { useEffect, useRef, useState } from 'react';
import Nav from '../Nav';
import Magnetic from '../Magnetic';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';

const Rounded: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Magnetic>
      <div className={styles.button}>
        {children}
      </div>
    </Magnetic>
  );
};

export default function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);
  const button = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname, isActive]); // Include `isActive` in the dependency array

  useEffect(() => {
    if (!button.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = gsap.fromTo(
      button.current,
      { scale: 0, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.25,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: '+=200',
          scrub: true,
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              autoAlpha: 0,
              duration: 0.25,
              ease: 'power1.out'
            });
            setIsActive(false);
          },
          onLeave: () =>
            gsap.to(button.current, {
              scale: 1,
              autoAlpha: 1,
              duration: 0.25,
              ease: 'power1.out'
            })
        }
      }
    );

    return () => {
      trigger.scrollTrigger?.kill();
    };
  }, [isActive]);

  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className={styles.buttonContainer}
        ref={button}
      >
        <Rounded>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav close={() => setIsActive(false)} />}
      </AnimatePresence>
    </>
  );
}
