import { locations } from "../../data/locations"
import Card from "../ui/Card"
import FadeIn from "../ui/FadeIn"


function Locations() {
  
  return (
    <FadeIn>
    <section id="horarios" className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-20">

          <span className="text-[#B7FF3C] font-semibold">
            Horarios y Sedes
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-[Poppins]">
            Encuentra el horario ideal para ti.
          </h2>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {locations.map((location, index) => (

            <Card key={index}>

              <span className="text-[#B7FF3C] text-sm font-semibold">
                Sede
              </span>

              <h3 className="text-4xl font-bold mt-4">
                {location.name}
              </h3>

              <p className="text-white/70 mt-4">
                {location.place}
              </p>

              <p className="text-white/50 text-sm mt-2">
                {location.address}
              </p>

              {/* Horarios */}
              <div className="mt-10 space-y-4">

                {location.schedules.map((schedule, idx) => (

                  <div
                    key={idx}
                    className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
                  >
                    {schedule}
                  </div>

                ))}

              </div>

            </Card>

          ))}

        </div>

      </div>

    </section>
    </FadeIn>
  )
}

export default Locations