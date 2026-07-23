import { stats } from "../../data/stats"
import Card from "../ui/Card"
import FadeIn from "../ui/FadeIn"

function Achievements() {
  return (
    <FadeIn>
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-20">

          <span className="text-[#B7FF3C] font-semibold">
            Concursos y Logros
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-[Poppins]">
            Representando a Cusco con pasión y orgullo.
          </h2>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {stats.map((stat, index) => (

            <Card key={index}>

              <h3 className="text-4xl md:text-5xl font-bold text-[#B7FF3C]">
                {stat.number}
              </h3>

              <p className="text-white/70 mt-4 text-lg">
                {stat.label}
              </p>

            </Card>

          ))}

        </div>

      </div>

    </section>
    </FadeIn>
  )
}

export default Achievements