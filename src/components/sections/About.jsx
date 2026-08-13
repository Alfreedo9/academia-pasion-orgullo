import { useEffect, useRef } from "react"
import FadeIn from "../ui/FadeIn"

function About() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="nosotros"
      className="scroll-mt-28 py-16 md:py-24 lg:py-32 px-6 relative"
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Left Content */}
        <FadeIn delay={0.1}>

          <div>

            <span className="text-[#B7FF3C] font-semibold">
              Desde 2022
            </span>

            <h2 className="text-4xl md:text-5xl leading-tight font-bold mt-4 font-[Poppins]">
              Una academia creada con pasión por la cultura peruana.
            </h2>

            <p className="text-white/70 mt-8 text-lg leading-relaxed">
              Fundamos la academia en 2022 con una idea simple: enseñar marinera norteña de forma cercana y profesional, sin perder la esencia de la tradición.
            </p>

            <p className="text-white/60 mt-6 text-lg leading-relaxed">
              Hoy formamos niños, jóvenes y adultos en dos sedes de Cusco. Cada clase mezcla disciplina y técnica con el orgullo de bailar algo que nos representa como peruanos.
            </p>

          </div>

        </FadeIn>

        {/* Right Visual */}
        <FadeIn delay={0.3}>

          <div
            className="
              relative
              aspect-video
              w-full
              rounded-[40px]
              overflow-hidden
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >

            {/* Green Glow */}
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#B7FF3C]/10 blur-[120px] rounded-full z-10" />

            {/* Blue Glow */}
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/10 blur-[100px] rounded-full z-10" />

            {/* Video */}
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              aria-label="Marinera Norteña"
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                ease-out
                hover:scale-105
              "
            >
              <source src="/videos/marinera.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

          </div>

        </FadeIn>

      </div>

    </section>
  )
}

export default About