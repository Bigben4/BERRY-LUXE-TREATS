import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { defaultViewport } from '../../animations/motionConfig';

export default function StaggerContainer({
  children,
  staggerDelay = 0.1,
  initialDelay = 0.05,
  className = '',
  viewport = defaultViewport,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : initialDelay,
      },
    },
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
