import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gallery } from "../../data/gallery"
import FadeIn from "../ui/FadeIn"

const INITIAL_COUNT = 8

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? gallery : gallery.slice(0, INITIAL_COUNT)
  return (
    <FadeIn>
    <section
      id="galeria"
      className="scroll-mt-28 py-16 md:py-24 lg:py-32 px-6"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-10 md:mb-16 lg:mb-20">

          <span className="text-[#B7FF3C] font-semibold">
            Galería
          </span>

          <h2 className="text-4xl md:text-5xl leading-tight font-bold mt-4 font-[Poppins]">
            Vive la energía de nuestra academia.
          </h2>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {visibleItems.map((item, index) => (

            <FadeIn
              key={item.image}
              delay={(index % INITIAL_COUNT) * 0.15}
            >

              <div
              onClick={() => setSelectedItem(item)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  h-65
                  sm:h-85
                  lg:h-112.5
                  cursor-pointer
                  bg-white/5
                "
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all duration-500 ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                    opacity-100
                    sm:opacity-0
                    sm:group-hover:opacity-100
                    transition-all duration-500 ease-out
                  "
                />

                {/* Extra Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                {/* Text */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    p-4
                    sm:p-6
                    translate-y-0
                    opacity-100
                    sm:translate-y-6
                    sm:opacity-0
                    sm:group-hover:translate-y-0
                    sm:group-hover:opacity-100
                    transition-all duration-500 ease-out
                  "
                >

                  <p className="text-xs sm:text-sm text-[#B7FF3C]">
                    {item.tag}
                  </p>

                  <h3 className="text-lg sm:text-2xl font-bold mt-1 sm:mt-2">
                    {item.title}
                  </h3>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

        {!showAll && gallery.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                font-semibold
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              Ver más fotos
            </button>
          </div>
        )}

      </div>
          
         <AnimatePresence>

  {selectedItem && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={() => setSelectedItem(null)}
      className="
        fixed
        inset-0
        z-[999]
        bg-black/90
        backdrop-blur-md
        flex
        items-center
        justify-center
        p-6
      "
    >

      <button
        onClick={() => setSelectedItem(null)}
        className="
          absolute
          top-8
          right-8
          w-12
          h-12
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/10
          text-white
          text-2xl
          hover:bg-white/20
          transition
        "
      >
        ×
      </button>

      <motion.img
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.3,
        }}
        src={selectedItem.image}
        alt={selectedItem.alt}
        className="
          max-w-full
          max-h-[90vh]
          rounded-3xl
          shadow-2xl
        "
      />

    </motion.div>

  )}

</AnimatePresence> 


    </section>
    </FadeIn>
  )
}

export default Gallery