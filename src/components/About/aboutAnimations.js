export const fadeUp = {
  initial: {
    opacity: 0,
    y: 8,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0,
  },

  transition: {
    duration: 0.22,
    ease: "easeOut",
  },
};
