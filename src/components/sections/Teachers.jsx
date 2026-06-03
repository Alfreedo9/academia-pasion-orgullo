import { teachers } from "../../data/teachers"
import FadeIn from "../ui/FadeIn"


function Teachers() {
  return (
    <section
  id="profesores"
  className="scroll-mt-28 py-32 px-6"
>

  {/* Ambient Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <FadeIn>

      <div className="max-w-2xl mb-20">

        <span className="text-[#B7FF3C] font-semibold">
          Profesores
        </span>

        <h2 className="text-4xl md:text-5xl leading-tight font-bold mt-4 font-[Poppins]">
          Aprende junto a profesionales apasionados por la marinera.
        </h2>

      </div>

    </FadeIn>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {teachers.map((teacher, index) => (

        <FadeIn
          key={index}
          delay={index * 0.2}
        >

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              h-[550px]
            "
          >

            {/* Image */}
            <img
              src={teacher.image}
              alt={teacher.name}
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Glow */}
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#B7FF3C]/10 blur-[120px] rounded-full" />

            {/* Content */}
            <div
              className="
                absolute
                bottom-0
                left-0
                p-8
                translate-y-4
                group-hover:translate-y-0
                transition-all
                duration-500
              "
            >

              <p className="text-[#B7FF3C] text-sm font-semibold">
                Profesor(a)
              </p>

              <h3 className="text-3xl font-bold mt-3">
                {teacher.name}
              </h3>

              <p className="text-white/70 mt-4 leading-relaxed max-w-md">
                {teacher.description}
              </p>

            </div>

          </div>

        </FadeIn>

      ))}

    </div>

  </div>

</section>
  )
}

export default Teachers