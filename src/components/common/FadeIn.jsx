import React from 'react';
import Reveal from './Reveal';

export default function FadeIn({ children, delay = 0, duration = 0.6, className = '', ...props }) {
  return (
    <Reveal direction="none" delay={delay} duration={duration} className={className} {...props}>
      {children}
    </Reveal>
  );
}
