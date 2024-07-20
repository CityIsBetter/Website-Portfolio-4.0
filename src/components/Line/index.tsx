'use client';
import React, { useEffect, useRef, useCallback } from 'react';
import styles from './style.module.scss';

type LineProps = {
  scolor: string;
  sright: number;
  w: number;
};

const Line: React.FC<LineProps> = ({ scolor, sright, w }) => {
  const path = useRef<SVGPathElement>(null);
  const progressRef = useRef<number>(0);
  const xRef = useRef<number>(0.5);
  const reqIdRef = useRef<number | null>(null);

  const setPath = useCallback((progress: number) => {
    const ww = window.innerWidth;
    const width = (ww <= 700 ? 0.9 : 0.8) * window.innerWidth;

    if (path.current) {
      path.current.setAttribute("d", `M 0 50 Q${width * xRef.current} ${50 + progress} ${width} 50`);
    }
  }, []);

  const animateIn = useCallback(() => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
    }
    setPath(progressRef.current);
    reqIdRef.current = requestAnimationFrame(animateIn);
  }, [setPath]);

  const manageMouseMove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const { movementY } = e;
    const box = e.currentTarget.getBoundingClientRect();
    xRef.current = (e.clientX - box.left) / box.width;
    progressRef.current += movementY;
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = useCallback(() => {
    let newProgress = progressRef.current * Math.sin(Math.PI / 2);
    setPath(newProgress);

    progressRef.current = lerp(progressRef.current, 0, 0.04);
    
    if (Math.abs(progressRef.current) > 0.5) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      progressRef.current = 0;
    }
  }, [setPath]);

  const resetAnimation = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
    }
    animateOut();
  };

  useEffect(() => {
    setPath(progressRef.current);
    const handleResize = () => setPath(progressRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setPath]);

  return (
    <div className={styles.line} style={{ right: `${sright}%` }}>
      <span
        onMouseEnter={animateIn}
        onMouseLeave={resetAnimation}
        onMouseMove={manageMouseMove}
        className={styles.box}
        style={{ left: `${sright}%` }}
      ></span>
      <svg>
        <path ref={path} style={{ stroke: `${scolor}` }}></path>
      </svg>
    </div>
  );
};

export default Line;
