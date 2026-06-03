import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-24 px-6 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#B7FF3C]/5 via-transparent to-transparent" />

      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[300px]
          bg-[#B7FF3C]/5
          blur-[120px]
          rounded-full
          -z-10
        "
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <h3 className="text-3xl font-bold font-[Poppins]">
            Pasión y Orgullo
          </h3>

          <div className="w-20 h-1 bg-[#B7FF3C] rounded-full mt-3" />

          <p className="text-white/60 mt-6 leading-relaxed">
            Academia de Marinera Norteña en Cusco dedicada a formar niños,
            jóvenes y adultos mediante una enseñanza moderna, profesional
            y comprometida con la cultura peruana.
          </p>

        </div>

        {/* Navegación */}
        <div>

          <h4 className="font-semibold text-lg mb-6">
            Navegación
          </h4>

          <ul className="space-y-4 text-white/60">

            <li>
              <a href="#" className="hover:text-[#B7FF3C] transition">
                Inicio
              </a>
            </li>

            <li>
              <a href="#nosotros" className="hover:text-[#B7FF3C] transition">
                Nosotros
              </a>
            </li>

            <li>
              <a href="#niveles" className="hover:text-[#B7FF3C] transition">
                Niveles
              </a>
            </li>

            <li>
              <a href="#profesores" className="hover:text-[#B7FF3C] transition">
                Profesores
              </a>
            </li>

            <li>
              <a href="#galeria" className="hover:text-[#B7FF3C] transition">
                Galería
              </a>
            </li>

            <li>
              <a href="#testimonios" className="hover:text-[#B7FF3C] transition">
                Testimonios
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-[#B7FF3C] transition">
                Preguntas Frecuentes
              </a>
            </li>

          </ul>

        </div>

        {/* Contacto */}
        <div>

          <h4 className="font-semibold text-lg mb-6">
            Contacto
          </h4>

          <ul className="space-y-4 text-white/60">

            <li>
              📍 Wanchaq - Plaza Túpac Amaru
            </li>

            <li>
              📍 San Sebastián - Al costado del parque Cachimayo.
            </li>

            <li>
              📱 +51 984 490 413
            </li>

            <li>
              🇵🇪 Cusco, Perú
            </li>

          </ul>

        </div>

        {/* Redes Sociales */}
        <div>

          <h4 className="font-semibold text-lg mb-6">
            Redes Sociales
          </h4>

          <div className="flex gap-4">

            <a
              href="https://www.facebook.com/pyocusco"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-[#B7FF3C]
                hover:text-black
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/pasionyorgullomarinera"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-[#B7FF3C]
                hover:text-black
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@pasionyorgullomarinera"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-[#B7FF3C]
                hover:text-black
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaTiktok size={18} />
            </a>

          </div>

          <a
            href="https://wa.me/51984490413"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              rounded-xl
              bg-[#B7FF3C]
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-[#B7FF3C]/30
            "
          >
            Escribir por WhatsApp
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div
        className="
          max-w-7xl
          mx-auto
          border-t
          border-white/10
          mt-16
          pt-8
          text-white/40
          text-sm
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
        "
      >

        <p>
          © 2026 Academia de Marinera Norteña Pasión y Orgullo.
          Todos los derechos reservados.
        </p>

        <p>
          Diseñado y desarrollado por Alfreedo en Cusco, Perú.
        </p>

      </div>

    </footer>
  )
}

export default Footer