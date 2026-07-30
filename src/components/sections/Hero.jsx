import {
  motion,
  useScroll,
  useTransform
} from "framer-motion"

import Button from "../ui/Button"

function Hero() {

  const { scrollY } = useScroll()

  const y = useTransform(
    scrollY,
    [0, 500],
    [0, 150]
  )

  return (

    <section className="relative min-h-svh overflow-hidden pt-28 sm:pt-32">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/marinera.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#070B14]" />

      {/* Green Glow */}
      <motion.div
        style={{ y }}
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#B7FF3C]/10
          blur-[120px]
          rounded-full
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-[120px]
          rounded-full
        "
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >

          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-white/10
              border
              border-white/10
              backdrop-blur-md
              px-5
              py-2
              rounded-full
              text-sm
            "
          >
            Cultura • Elegancia • Pasión
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8 font-[Poppins]">
            Vive la marinera norteña con Pasión y Orgullo.
          </h1>

          {/* Description */}
          <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            Aprende marinera norteña desde cero en Cusco, con profesores que compiten y bailan la tradición que te van a enseñar.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
            href="https://wa.me/51984490413?text=Hola%20quiero%20información%20sobre%20las%20clases%20de%20marinera."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button primary>
              Inscribirme por WhatsApp
            </Button>
          </a>

            <a href="#horarios">
            <Button>
              Ver clases y horarios
            </Button>
          </a>

          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-14 text-white/60 text-sm">

            <span>
              <strong className="text-white font-semibold">+4</strong> años enseñando
            </span>

            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />

            <span>
              <strong className="text-white font-semibold">+200</strong> alumnos formados
            </span>

            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />

            <span>
              <strong className="text-white font-semibold">+20</strong> concursos nacionales
            </span>

          </div>

        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 text-xs"
      >
        <span>Desliza para ver más</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1"
        >
          <span className="w-1 h-1.5 rounded-full bg-white/60" />
        </motion.span>
      </motion.div>

    </section>
  )
}

export default Hero