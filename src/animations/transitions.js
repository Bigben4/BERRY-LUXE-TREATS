// Premium cubic-bezier easings and transition presets for luxury, smooth feel
export const luxuryEase = [0.22, 1, 0.36, 1];
export const smoothEase = [0.16, 1, 0.3, 1];
export const gentleEase = [0.25, 0.1, 0.25, 1];

export const transitions = {
  default: {
    duration: 0.65,
    ease: luxuryEase,
  },
  slow: {
    duration: 0.85,
    ease: luxuryEase,
  },
  fast: {
    duration: 0.3,
    ease: smoothEase,
  },
  hero: {
    duration: 0.75,
    ease: luxuryEase,
  },
  stagger: {
    staggerChildren: 0.1,
    delayChildren: 0.05,
  },
  staggerFast: {
    staggerChildren: 0.06,
    delayChildren: 0.03,
  },
  staggerCards: {
    staggerChildren: 0.12,
    delayChildren: 0.08,
  },
  imageReveal: {
    duration: 0.85,
    ease: [0.25, 1, 0.5, 1],
  },
};
