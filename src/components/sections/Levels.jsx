import { levels } from "../../data/levels"
import Card from "../ui/Card"
import FadeIn from "../ui/FadeIn"



function Levels() {
  return (
    <FadeIn>
    <section id="niveles" className="scroll-mt-28 py-16 md:py-24 lg:py-32 px-6">
      
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-10 md:mb-16 lg:mb-20">

          <span className="text-[#B7FF3C] font-semibold">
            Niveles
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-[Poppins]">
            Un camino de crecimiento para cada bailarín.
          </h2>

        </div>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  {levels.map((level, index) => (

    <FadeIn
      key={index}
      delay={index * 0.15}
    >

      <Card>

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-[#B7FF3C]/10 blur-[100px] rounded-full" />

        {/* Number */}
        <span className="text-[#B7FF3C] text-sm font-semibold">
          Nivel {index + 1}
        </span>

        {/* Title */}
        <h3 className="text-3xl font-bold mt-4 leading-tight">
          {level.title}
        </h3>

        {/* Description */}
        <p className="text-white/70 mt-6 leading-relaxed">
          {level.description}
        </p>

         </Card>

       </FadeIn>

      ))}

    </div>

      </div>

    </section>
    </FadeIn>
  )
}

export default Levels