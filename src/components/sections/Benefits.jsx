import { benefits } from "../../data/benefits"
import Card from "../ui/Card"
import FadeIn from "../ui/FadeIn"
import {
  Sparkles,
  Trophy,
  Heart,
  Landmark,
} from "lucide-react"


function Benefits() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 relative">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-white/2 to-transparent" />

      
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <FadeIn>
        <div className="max-w-2xl mb-10 md:mb-16 lg:mb-20">

          <span className="text-[#B7FF3C] font-semibold">
            Beneficios
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-[Poppins]">
            Mucho más que aprender a bailar.
          </h2>

          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.2}>
            <Card>

              <div className="mb-6 text-[#B7FF3C]">
            <benefit.icon size={40} strokeWidth={1.5} />
            </div>

              <h3 className="text-2xl font-semibold mb-4">
                {benefit.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {benefit.description}
              </p>

             </Card>
            </FadeIn>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Benefits