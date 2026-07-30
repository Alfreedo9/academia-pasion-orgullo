import FadeIn from "../ui/FadeIn"

function CTA() {
  return (
    <section
      className="py-20 md:py-28 lg:py-40 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-[#B7FF3C]/5 to-transparent" />

      {/* Big Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#B7FF3C]/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center">

        <FadeIn>

          <span className="text-[#B7FF3C] font-semibold">
            Forma parte de nuestra familia
          </span>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-6 font-[Poppins]">
            Las inscripciones están abiertas, únete esta semana.
          </h2>

          <p className="text-white/70 text-xl leading-relaxed mt-8 max-w-3xl mx-auto">
            Plazas limitadas por grupo. Escríbenos hoy y asegura tu lugar en la academia que ya formó a más de 200 alumnos en Cusco.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <a
              href="https://wa.me/51984490413"
              target="_blank"
              className="
                px-8
                py-5
                rounded-2xl
                bg-[#B7FF3C]
                text-black
                font-semibold
                transition-all
                duration-500
                ease-out
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-[#B7FF3C]/30
              "
            >
              Inscribirme por WhatsApp
            </a>

            <a
              href="#horarios"
              className="
                px-8
                py-5
                rounded-2xl
                border
                border-white/10
                bg-white/3
                backdrop-blur-xl
                font-semibold
                transition-all
                duration-500
                ease-out
                hover:bg-white/6
              "
            >
              Ver horarios
            </a>

          </div>

        </FadeIn>

      </div>

    </section>
  )
}

export default CTA