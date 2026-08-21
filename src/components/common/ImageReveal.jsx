import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { defaultViewport } from '../../animations/motionConfig';
import { imageRevealVariants } from '../../animations/variants';

export default function ImageReveal({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  loading = 'lazy',
  viewport = defaultViewport,
  aspectRatio,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden relative ${className}`}>
      {shouldReduceMotion ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${imageClassName}`}
          loading={loading}
          {...props}
        />
      ) : (
        <motion.img
          src={src}
          alt={alt}
          variants={imageRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className={`w-full h-full object-cover ${imageClassName}`}
          loading={loading}
          {...props}
        />
      )}
    </div>
  );
}
