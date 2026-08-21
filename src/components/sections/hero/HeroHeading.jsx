import { motion } from "framer-motion"

import {
  eyebrowVariants,
  headingVariants,
  highlightVariants,
} from "./heroVariants"

function HeroHeading() {
  return (
    <div className="max-w-xl">

      <motion.span
        variants={eyebrowVariants}
        className="
          inline-flex
          items-center
          gap-3
          text-xs
          sm:text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#BFF2A8]
        "
      >
        <span className="h-px w-8 bg-[#BFF2A8]/60" />
        Academia de Marinera Norteña
      </motion.span>

      <motion.h1
        variants={headingVariants}
        className="
          mt-5
          font-[Poppins]
          font-black
          uppercase
          text-white
          text-5xl
          sm:text-6xl
          lg:text-7xl
          xl:text-[5.25rem]
          leading-[0.94]
          tracking-tight
        "
      >
        Bailamos <br />
        lo que <br />
        somos...
      </motion.h1>

      <motion.p
        variants={highlightVariants}
        className="
          mt-5
          font-[Poppins]
          font-semibold
          text-2xl
          sm:text-3xl
          tracking-wide
          text-[#3ACB16]
        "
      >
        Peruanos con orgullo.
      </motion.p>

    </div>
  )
}

export default HeroHeading
