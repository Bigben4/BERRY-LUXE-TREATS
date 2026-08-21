import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { luxuryEase } from '../../animations/transitions';
import { defaultViewport } from '../../animations/motionConfig';

export default function Reveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.65,
  distance = 28,
  scale = false,
  className = '',
  viewport = defaultViewport,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return {};
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: -distance };
      case 'right':
        return { x: distance };
      case 'none':
      default:
        return {};
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
    ...(scale && !shouldReduceMotion ? { scale: 0.97 } : {}),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale ? { scale: 1 } : {}),
    transition: {
      duration: shouldReduceMotion ? 0.2 : duration,
      delay: shouldReduceMotion ? 0 : delay,
      ease: luxuryEase,
    },
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
