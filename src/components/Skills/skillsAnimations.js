export const smoothEase = [0.22, 1, 0.36, 1];

export const skillsHeaderAnimation = {
  initial: {
    opacity: 0,
    x: -25,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: false,
    amount: 0.15,
  },

  transition: {
    duration: 0.4,
    ease: smoothEase,
  },
};

export const skillCardAnimation = (index) => ({
  initial: {
    opacity: 0,
    x: 25,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: false,
    amount: 0.1,
  },

  transition: {
    duration: 0.35,
    delay: index * 0.04,
    ease: smoothEase,
  },
});
