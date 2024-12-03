import React, { useRef, useState, useEffect, MouseEvent } from "react";
import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const slider1 = [
  { color: "#B5D3DA", src: "/assets/academiaHub.png" },
  { color: "#455974", src: "/assets/weather.png" },
  { color: "#D2D5DA", src: "/assets/portfolio 2.0.png" },
  { color: "#1E1E1E", src: "/assets/viewtubee.png" },
];

const slider2 = [
  { color: "#333333", src: "/assets/snake game.png" },
  { color: "#0D1C46", src: "/assets/portfolio 1.0.png" },
  { color: "#222222", src: "/assets/mockups/canvas.png" },
  { color: "#3B3A45", src: "/assets/hoobank clone.png" },
];

type FollowButtonProps = {
  isVisible: boolean;
  mouseX: number;
  mouseY: number;
};

const FollowButton: React.FC<FollowButtonProps> = ({ isVisible, mouseX, mouseY }) => (
  <motion.div
    className={`${styles.followButton} ${isVisible ? styles.visible : ""}`}
    style={{
      position: "fixed",
      left: mouseX,
      top: mouseY,
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      zIndex: 50,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 15,
    }}
  >Works</motion.div>
);

const Slider: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const offsetY = window.scrollY; // Account for scroll offset
    setCursorPosition({ x: clientX, y: clientY + offsetY });
    mouseX.set(clientX);
    mouseY.set(clientY + offsetY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
        ref={container} 
        className={styles.slidingImages}
        onMouseMove={handleMouseMove}
        style={{ cursor: isHovered ? 'none' : 'default' }}
    >
        <motion.div 
            style={{x: x1}} 
            className={styles.slider}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push('/projects')}
        >
            {slider1.map((project, index) => (
                <div 
                    className={styles.project} 
                    style={{backgroundColor: project.color}} 
                    key={index}
                >
                    <div className={styles.imageContainer}>
                        <Image 
                            fill={true}
                            alt={"image"}
                            src={`${project.src}`}
                            loading='eager'
                            draggable={false}
                        />
                    </div>
                </div>
            ))}
        </motion.div>
        <motion.div 
            style={{x: x2}} 
            className={styles.slider}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push('/projects')}
        >
            {slider2.map((project, index) => (
                <div 
                    className={styles.project} 
                    style={{backgroundColor: project.color}} 
                    key={index}
                >
                    <div className={styles.imageContainer}>
                        <Image 
                            fill={true}
                            alt={"image"}
                            src={`${project.src}`}
                            loading='eager'
                            draggable={false}
                        />
                    </div>
                </div>
            ))}
        </motion.div>
        <FollowButton 
            isVisible={isHovered} 
            mouseX={springX.get()} 
            mouseY={springY.get()} 
        />
    </div>
);
};

export default Slider;
