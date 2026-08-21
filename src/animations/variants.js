import { luxuryEase, smoothEase, transitions } from './transitions';

// Standard Fade & Slide Variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.default,
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

// Subtle Scale Reveal (for featured cards, hero containers)
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.default,
  },
};

// Editorial Image Reveal (starts slightly scaled up, zooms to natural 1.0 with fade)
export const imageRevealVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.imageReveal,
  },
};

// Stagger Container Variants
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren || 0.1,
      delayChildren: custom.delayChildren || 0.05,
    },
  }),
};

// Card Entrance and Subtle Hover
export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const cardHoverMotion = {
  whileHover: {
    y: -3,
    transition: { duration: 0.25, ease: smoothEase },
  },
};

// Button Micro-interactions
export const buttonMotion = {
  whileHover: {
    y: -1,
    transition: { duration: 0.18, ease: smoothEase },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: smoothEase },
  },
};

// Hero Specific Orchestration
export const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const heroChildVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.hero,
  },
};

export const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: luxuryEase,
    },
  },
};

// Accordion (FAQ)
export const accordionContentVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: luxuryEase },
      opacity: { duration: 0.25, delay: 0.08 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.28, ease: luxuryEase },
      opacity: { duration: 0.18 },
    },
  },
};

// Floating Mobile WhatsApp entrance on scroll
export const floatingCTAEntrance = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: luxuryEase },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: 12,
    transition: { duration: 0.25, ease: smoothEase },
  },
};
