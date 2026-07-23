import { useEffect, useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {

  setScrolled(window.scrollY > 50)

  const sections = [
    "nosotros",
    "niveles",
    "horarios",
    "profesores",
    "galeria",
    "testimonios",
  ]

  let current = "inicio"

  sections.forEach((sectionId) => {

    const section = document.getElementById(sectionId)

    if (!section) return

    const top = section.offsetTop - 150

    if (window.scrollY >= top) {
      current = sectionId
    }

  })

  setActiveSection(current)
}

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

const navLinkClass = (section) =>
  activeSection === section
    ? "text-[#B7FF3C]"
    : "text-white hover:text-[#B7FF3C] transition"

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        transition-all
        duration-500
        ease-out
        ${
          scrolled
            ? "border-white/10 bg-black/70 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3"
        >
          <img
            src="/images/logo.png"
            alt="Academia Pasión y Orgullo"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="font-[Poppins] text-xl font-bold">
              Pasión y Orgullo
            </h1>

            <p className="text-xs text-white/60">
              Academia de Marinera Norteña
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          <a
            href="#"
            className={navLinkClass("inicio")}
          >
            Inicio
          </a>

          <a
            href="#nosotros"
            className={navLinkClass("nosotros")}
          >
            Nosotros
          </a>

          <a
            href="#niveles"
            className={navLinkClass("niveles")}
          >
            Niveles
          </a>

          <a
            href="#horarios"
            className={navLinkClass("horarios")}
          >
            Horarios
          </a>

          <a
            href="#profesores"
            className={navLinkClass("profesores")}
          >
            Profesores
          </a>

          <a
            href="#galeria"
            className={navLinkClass("galeria")}
          >
            Galería
          </a>

          <a
            href="#testimonios"
            className={navLinkClass("testimonios")}
          >
            Testimonios
          </a>

          <a
            href="https://wa.me/51984490413"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#B7FF3C]
              text-black
              px-5
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            WhatsApp
          </a>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            bg-white/10
            border
            border-white/10
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-xl
          "
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div
          className="
            md:hidden
            border-t
            border-white/10
            bg-black/95
            backdrop-blur-2xl
          "
        >

          <div className="flex flex-col p-8 gap-8 text-white/80">

            <a
              href="#"
              onClick={closeMenu}
              className="text-lg font-medium transition hover:text-[#B7FF3C]"
            >
              Inicio
            </a>

            <a
              href="#nosotros"
              onClick={closeMenu}
              className="text-lg font-medium transition hover:text-[#B7FF3C]"
            >
              Nosotros
            </a>

            <a
              href="#niveles"
              onClick={closeMenu}
              className="text-lg font-medium transition hover:text-[#B7FF3C]"
            >
              Niveles
            </a>

            <a
              href="#horarios"
              onClick={closeMenu}
              className="text-lg font-medium transition hover:text-[#B7FF3C]"
            >
              Horarios
            </a>

            <a
              href="#profesores"
              onClick={closeMenu}
              className="text-lg font-medium transition hover:text-[#B7FF3C]"
            >
              Profesores
            </a>

            <a
              href="#galeria"
              onClick={closeMenu}
              className="text-lg font-medium transition hover:text-[#B7FF3C]"
            >
              Galería
            </a>

            <a
              href="#testimonios"
              onClick={closeMenu}
              className="text-lg font-medium transition hover:text-[#B7FF3C]"
            >
              Testimonios
            </a>

            <a
              href="https://wa.me/51984490413"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                bg-[#B7FF3C]
                text-black
                py-4
                rounded-2xl
                font-semibold
                text-center
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              WhatsApp
            </a>

          </div>

        </div>

      )}
    </header>
  )
}

export default Navbar