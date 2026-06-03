import { faqs } from "../../data/faqs"
import Card from "../ui/Card"
import FadeIn from "../ui/FadeIn"


function FAQ() {
  return (
    <FadeIn>
    <section id="faq" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-20">

          <span className="text-[#B7FF3C] font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-[Poppins]">
            Preguntas frecuentes.
          </h2>

        </div>

        {/* FAQ List */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <Card key={index}>

              <h3 className="text-2xl font-semibold">
                {faq.question}
              </h3>

              <p className="text-white/70 mt-4 leading-relaxed">
                {faq.answer}
              </p>

            </Card>

          ))}

        </div>

      </div>

    </section>
    </FadeIn>
  )
}

export default FAQ