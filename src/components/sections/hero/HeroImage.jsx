import { motion, useReducedMotion } from "framer-motion"

import {
  circleVariants,
  imageVariants,
  floatAnimation,
  floatTransition,
} from "./heroVariants"

function HeroImage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className="
        relative
        mx-auto
        aspect-[4/5]
        w-full
        max-w-[340px]
        sm:max-w-[420px]
        lg:max-w-[560px]
      "
    >

      {/* Ambient glow behind the circle */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-[#3ACB16]/10
          blur-[90px]
        "
      />

      {/* Decorative circle */}
      <motion.div
        variants={circleVariants}
        className="
          absolute
          inset-[9%]
          rounded-full
          bg-[radial-gradient(circle_at_35%_30%,#2E6B36_0%,#163A1E_60%,#0B2412_100%)]
          shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)]
        "
      />

      {/* Dancer */}
      <motion.div variants={imageVariants} className="absolute inset-0">
        <motion.img
          src="/images/hero-ariana.png"
          alt="Bailarina de la Academia Pasión y Orgullo posando con traje tradicional de marinera norteña"
          width={1080}
          height={1350}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          animate={shouldReduceMotion ? undefined : floatAnimation}
          transition={shouldReduceMotion ? undefined : floatTransition}
          className="
            relative
            z-10
            h-full
            w-full
            object-contain
            drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]
          "
        />
      </motion.div>

    </div>
  )
}

export default HeroImage
