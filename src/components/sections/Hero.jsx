import { MotionConfig, motion } from "framer-motion"

import HeroHeading from "./hero/HeroHeading"
import HeroImage from "./hero/HeroImage"
import HeroDescription from "./hero/HeroDescription"
import HeroBottomBar from "./hero/HeroBottomBar"
import {
  heroContainerVariants,
  backgroundVariants,
} from "./hero/heroVariants"

function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="inicio"
        className="relative min-h-svh overflow-hidden bg-[#0A2213] pt-28 sm:pt-32"
      >

        {/* Background */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backgroundVariants}
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#173F20_0%,#0A2213_55%,#071A0E_100%)]
          "
        />

        {/* Ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[600px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/3
            rounded-full
            bg-[#3ACB16]/10
            blur-[160px]
          "
        />

        {/* Fade into the rest of the page */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-b
            from-transparent
            to-[#070B14]
          "
        />

        {/* Noise texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100svh-7rem)]
            max-w-7xl
            flex-col
            px-6
            pb-10
            sm:min-h-[calc(100svh-8rem)]
            sm:pb-12
          "
        >

          <div
            className="
              flex
              flex-1
              flex-col
              justify-center
              gap-12
              py-10
              lg:grid
              lg:grid-cols-[1fr_1.1fr]
              lg:grid-rows-2
              lg:items-stretch
              lg:gap-x-10
              lg:gap-y-0
              lg:py-0
            "
          >

            <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
              <HeroHeading />
            </div>

            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
              <HeroImage />
            </div>

            <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
              <HeroDescription />
            </div>

          </div>

          <HeroBottomBar />

        </motion.div>

      </section>
    </MotionConfig>
  )
}

export default Hero
