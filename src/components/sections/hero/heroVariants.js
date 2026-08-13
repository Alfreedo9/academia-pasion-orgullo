// Framer Motion variants for the Hero. Each element carries its own
// transition delay so the entrance reads as: fondo -> circulo -> bailarina -> texto.

export const heroContainerVariants = {
  hidden: {},
  visible: {},
}

export const backgroundVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
}

export const circleVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

export const imageVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export const eyebrowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.9, ease: "easeOut" },
  },
}

export const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.0, ease: "easeOut" },
  },
}

export const highlightVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.15, ease: "easeOut" },
  },
}

export const descriptionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.05, ease: "easeOut" },
  },
}

export const ctaVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.2, ease: "easeOut" },
  },
}

export const bottomBarVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.4, ease: "easeOut" },
  },
}

// Continuous, very subtle float for the dancer once she has entered the scene.
export const floatAnimation = {
  y: [0, -6, 0],
}

export const floatTransition = {
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut",
  delay: 1.8,
}
