import FadeIn from "../ui/FadeIn"

function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-28 py-32 px-6 relative"
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

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
              La Academia de Marinera Norteña Pasión y Orgullo - Cusco fue fundada por Alfredo y Lidia Quispe con el objetivo de enseñar marinera norteña de manera moderna, divertida y profesional.
            </p>

            <p className="text-white/60 mt-6 text-lg leading-relaxed">
              Formamos niños, jóvenes y adultos promoviendo disciplina, elegancia, identidad cultural y amor por las tradiciones peruanas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>

                <h3 className="text-4xl font-bold text-[#B7FF3C]">
                  +3
                </h3>

                <p className="text-white/60 mt-2">
                  Años enseñando
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#B7FF3C]">
                  +200
                </h3>

                <p className="text-white/60 mt-2">
                  Alumnos
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#B7FF3C]">
                  +20
                </h3>

                <p className="text-white/60 mt-2">
                  Concursos
                </p>

              </div>

            </div>

          </div>

        </FadeIn>

        {/* Right Visual */}
        <FadeIn delay={0.3}>

          <div
            className="
              relative
              h-[600px]
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

            {/* Image */}
            <img
              src="/images/barra.jpg"
              alt="Marinera Norteña"
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                ease-out
                hover:scale-105
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

          </div>

        </FadeIn>

      </div>

    </section>
  )
}

export default About