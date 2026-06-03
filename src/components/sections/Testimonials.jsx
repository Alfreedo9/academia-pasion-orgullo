import FadeIn from "../ui/FadeIn"

const testimonials = [
  {
    name: "María Fernanda",
    role: "Alumna",
    text: "La academia me ayudó a desarrollar disciplina, seguridad y amor por nuestra cultura peruana.",
  },
  {
    name: "Carlos Ramos",
    role: "Padre de familia",
    text: "Excelente enseñanza y ambiente familiar. Mi hija disfruta cada clase y ha crecido muchísimo.",
  },
  {
    name: "Valeria Quispe",
    role: "Alumna competitiva",
    text: "Gracias a Pasión y Orgullo pude participar en concursos nacionales y mejorar mi nivel profesional.",
  },
]

function Testimonials() {
  return (
    <section
      id="testimonios"
      className="scroll-mt-28 py-32 px-6"
    >

      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <FadeIn>

          <div className="max-w-2xl mb-20">

            <span className="text-[#B7FF3C] font-semibold">
              Testimonios
            </span>

            <h2 className="text-4xl md:text-5xl leading-tight font-bold mt-4 font-[Poppins]">
              Historias que inspiran y transforman vidas.
            </h2>

          </div>

        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {testimonials.map((testimonial, index) => (

            <FadeIn
              key={index}
              delay={index * 0.15}
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:border-[#B7FF3C]/30
                  hover:bg-white/[0.05]
                "
              >

                {/* Glow */}
                <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#B7FF3C]/10 blur-[100px] rounded-full" />

                {/* Stars */}
                <div className="flex gap-1 text-[#B7FF3C] text-lg">
                  ★★★★★
                </div>

                {/* Text */}
                <p className="text-white/70 leading-relaxed mt-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-10">

                  {/* Avatar */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-white/10
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-lg
                      font-bold
                    "
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div>

                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>

                    <p className="text-white/50 text-sm mt-1">
                      {testimonial.role}
                    </p>

                  </div>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials