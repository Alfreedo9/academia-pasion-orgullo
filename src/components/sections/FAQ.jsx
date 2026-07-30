import { useState } from "react"
import { faqs } from "../../data/faqs"
import FadeIn from "../ui/FadeIn"
import { ChevronDown } from "lucide-react"

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <FadeIn>
    <section id="faq" className="scroll-mt-28 py-16 md:py-24 lg:py-32 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-10 md:mb-16 lg:mb-20">

          <span className="text-[#B7FF3C] font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-[Poppins]">
            Preguntas frecuentes.
          </h2>

        </div>

        {/* Accordion */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  transition-all
                  duration-300
                  ease-out
                  ${isOpen
                    ? "border-[#B7FF3C]/40 bg-white/5"
                    : "border-white/10 bg-white/3 hover:border-white/20"
                  }
                  backdrop-blur-xl
                `}
              >

                {/* Glow when open */}
                {isOpen && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#B7FF3C]/10 blur-[80px] rounded-full pointer-events-none" />
                )}

                {/* Question button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-6 p-8 text-left"
                >
                  <h3 className="text-xl font-semibold leading-snug">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    strokeWidth={2}
                    className={`
                      shrink-0
                      text-[#B7FF3C]
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ease-out
                    ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-white/70 leading-relaxed px-8 pb-8">
                    {faq.answer}
                  </p>
                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
    </FadeIn>
  )
}

export default FAQ
