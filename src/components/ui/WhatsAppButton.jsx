import { FaWhatsapp } from "react-icons/fa"

function WhatsAppButton() {
  return (
    <a
  href="https://wa.me/51984490413"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-4
    right-4
    sm:bottom-6
    sm:right-6
    z-50
    bg-[#25D366]
    w-14
    h-14
    sm:w-16
    sm:h-16
    rounded-full
    flex
    items-center
    justify-center
    shadow-lg
    hover:scale-110
    transition
  "
>
  <FaWhatsapp size={28} className="sm:hidden" />
  <FaWhatsapp size={32} className="hidden sm:block" />
</a>
  )
}

export default WhatsAppButton