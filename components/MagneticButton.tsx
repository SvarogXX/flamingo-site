"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 15,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Normalized distance from center (-1 to 1)
    const distanceX = (clientX - centerX) / (width / 2);
    const distanceY = (clientY - centerY) / (height / 2);

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handlePointerOut = () => {
    if (reducedMotion) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerOut}
      style={{
        x: reducedMotion ? 0 : springX,
        y: reducedMotion ? 0 : springY,
        display: "inline-flex",
        position: "relative",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
