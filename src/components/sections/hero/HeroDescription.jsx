import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

import { descriptionVariants, ctaVariants } from "./heroVariants"

function HeroDescription() {
  return (
    <div className="max-w-md">

      <motion.p
        variants={descriptionVariants}
        className="text-white/70 text-base sm:text-lg leading-relaxed"
      >
        Aprende marinera norteña, fortalece tus valores y vive nuestra
        cultura a través de la danza.
      </motion.p>

      <motion.div
        variants={ctaVariants}
        className="flex flex-wrap items-center gap-4 mt-8"
      >

        <a
          href="https://wa.me/51984490413?text=Hola%20quiero%20información%20sobre%20las%20clases%20de%20marinera."
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-[#25D366]
            px-6
            py-4
            font-semibold
            text-black
            shadow-xl
            shadow-black/20
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[#25D366]/30
            active:scale-95
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#3ACB16]
          "
        >
          <FaWhatsapp size={20} aria-hidden="true" />
          Escríbenos por WhatsApp
        </a>

        <a
          href="#niveles"
          className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            border
            border-white/20
            bg-white/5
            px-6
            py-4
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white/10
            hover:border-white/40
            active:scale-95
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#3ACB16]
          "
        >
          Conoce nuestras clases
        </a>

      </motion.div>

    </div>
  )
}

export default HeroDescription
