import FadeIn from "../ui/FadeIn"
import { MapPin } from "lucide-react"

function Schedules() {
  return (
    <section
      id="horarios"
      className="scroll-mt-28 py-32 px-6 relative"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <FadeIn>
          <div className="max-w-3xl mb-20">

            <span className="text-[#B7FF3C] font-semibold">
              Horarios
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight font-[Poppins]">
              Encuentra el horario ideal para ti.
            </h2>

            <p className="text-white/70 text-lg mt-6">
              Contamos con horarios para niños, jóvenes y adultos en nuestras sedes de Wanchaq y San Sebastián.
            </p>

          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Wanchaq */}
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-full">

              <div className="absolute top-0 right-0 w-40 h-40 bg-[#B7FF3C]/10 blur-3xl rounded-full z-10" />

              <img
                src="/images/local-actual-wanchaq.jpg"
                alt="Salón de baile de la sede Wanchaq de la Academia Pasión y Orgullo"
                loading="lazy"
                className="w-full h-40 object-cover"
              />

              <div className="p-8">

              <h3 className="text-2xl font-bold mb-1">
                📍 Sede Wanchaq
              </h3>

              <p className="text-white/50 text-sm mb-6">
                Plaza Túpac Amaru, frente al Hospital de la Solidaridad
              </p>

              <div className="space-y-5 text-white/80">

                <div>
                  <p className="text-[#B7FF3C] font-semibold">
                    Lunes - Miércoles - Viernes
                  </p>

                  <ul className="mt-3 space-y-2">
                    <li>Niños Básico • 5:00 PM - 6:00 PM</li>
                    <li>Niños Básico II • 6:00 PM - 7:00 PM</li>
                    <li>Intermedio • 7:00 PM - 8:00 PM</li>
                    <li>Avanzado y Competitivo • 8:00 PM - 9:00 PM</li>
                  </ul>
                </div>

                <div>
                  <p className="text-[#B7FF3C] font-semibold">
                    Martes - Jueves - Sábado
                  </p>

                  <ul className="mt-3 space-y-2">
                    <li>Jóvenes y Adultos Básico • 6:00 PM - 7:00 PM</li>
                    <li>Jóvenes y Adultos Intermedio • 7:00 PM - 8:00 PM</li>
                  </ul>
                </div>

              </div>

              </div>

            </div>
          </FadeIn>

          {/* San Sebastián */}
          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-full">

              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full z-10" />

              <div className="w-full h-40 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-white/[0.02] text-white/30">
                <MapPin size={32} strokeWidth={1.5} />
              </div>

              <div className="p-8">

              <h3 className="text-2xl font-bold mb-1">
                📍 Sede San Sebastián
              </h3>

              <p className="text-white/50 text-sm mb-6">
                Al costado del parque Cachimayo
              </p>

              <div className="space-y-5 text-white/80">

                <div>
                  <p className="text-[#B7FF3C] font-semibold">
                    Lunes - Miércoles - Viernes
                  </p>

                  <ul className="mt-3 space-y-2">
                    <li>Niños Básico e Intermedio • 6:00 PM - 7:00 PM</li>
                  </ul>
                </div>

              </div>

              </div>

            </div>
          </FadeIn>

          {/* Particulares */}
          <FadeIn delay={0.3}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-full">

              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

              <h3 className="text-2xl font-bold mb-6">
                👤 Clases Particulares
              </h3>

              <p className="text-white/70 leading-relaxed">
                También ofrecemos clases personalizadas para niños, jóvenes, adultos y parejas.
              </p>

              <p className="text-white/70 mt-4 leading-relaxed">
                Los horarios se coordinan de manera flexible según la disponibilidad del alumno y del instructor.
              </p>

              <a
                href="https://wa.me/51984490413"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-8
                  bg-[#B7FF3C]
                  text-black
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  hover:scale-105
                "
              >
                Consultar disponibilidad
              </a>

            </div>
          </FadeIn>

        </div>

      </div>

    </section>
  )
}

export default Schedules