'use client';
import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';

import Router from 'next/router'

export const fixTimeoutTransition = (timeout) => {
  Router.events.on('beforeHistoryChange', () => {
    // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
    // if Next.js is going to remove them or not since we are going to remove the copies ourselves
    // later on when the transition finishes.
    const nodes = document.querySelectorAll('link[rel=stylesheet], style:not([media=x])')
    const copies = [...nodes].map((el) => el.cloneNode(true))

    for (let copy of copies) {
      // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
      // change process.
      copy.removeAttribute('data-n-p')
      copy.removeAttribute('data-n-href')

      // Add duplicated nodes to the DOM.
      document.head.appendChild(copy)
    }

    const handler = () => {
      // Emulate a `.once` method using `.on` and `.off`
      Router.events.off('routeChangeComplete', handler)

      window.setTimeout(() => {
        for (let copy of copies) {
          // Remove previous page's styles after the transition has finalized.
          document.head.removeChild(copy)
        }
      }, timeout)
    }

    Router.events.on('routeChangeComplete', handler)
  })
}

fixTimeoutTransition(1000)

const Line = ({scolor, sright, w}) => {
    const path = useRef(null)
    let progress = 0;
    let x = 0.5;
    let reqId = null;

    const animateIn = () => {
        if(reqId){
          cancelAnimationFrame(reqId);
          time = Math.PI / 2;
        }
        setPath(progress);
        reqId = requestAnimationFrame(animateIn);
    }    

    const manageMouseMove = (e) => {
        const { movementY } = e;
        const box = e.target.getBoundingClientRect();
        x = (e.clientX - box.left) / box.width;
        progress += movementY;
    };

    const resetAnimation = () => {
        cancelAnimationFrame(reqId)
        animateOut();
    };

    useEffect(() => {
        setPath(progress);
        window.addEventListener('resize', () => {
            setPath(progress);
          })
    }, []);

    const setPath = (progress) => {
        var ww = window.innerWidth;
        if(ww <= 700){
          w = .9
        } else{
          w = .8;
        }
        const width = w ? w * window.innerWidth : .75 * window.innerWidth;
        path.current.setAttributeNS(null, "d", `M 0 50 Q${width * x} ${50 + progress} ${width} 50`)
    };

    let time = Math.PI / 2;

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const animateOut = () => {
        let newProgress = progress * Math.sin(time);
        setPath(newProgress)

        progress = lerp(progress, 0, .04);
        time+=0.2;

        if(Math.abs(progress) > 0.5){
            reqId = requestAnimationFrame(animateOut)
        }
        else{
        time = Math.PI / 2;
        progress = 0;
        }
    };
    
  return (
    <div className={styles.line} style={{right: `${sright}%`}}>
        <span onMouseEnter={() => {animateIn()}} onMouseLeave={() => {resetAnimation()}} onMouseMove={(e) => {manageMouseMove(e)}} className={styles.box} style={{left: `${sright}%`}}></span>
        <svg>
            <path ref={path} style={{stroke: `${scolor}`}}></path>
        </svg>
    </div>
  )
}

export default Line