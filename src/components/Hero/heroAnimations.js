// heroAnimations.js

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.1,
  },

  transition: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const fadeScale = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport: {
    once: true,
    amount: 0.1,
  },

  transition: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  },
};
