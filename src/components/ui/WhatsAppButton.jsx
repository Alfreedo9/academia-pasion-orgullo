import { FaWhatsapp } from "react-icons/fa"

function WhatsAppButton() {
  return (
    <a
  href="https://wa.me/51984490413"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-6
    right-6
    z-50
    bg-[#25D366]
    w-16
    h-16
    rounded-full
    flex
    items-center
    justify-center
    shadow-lg
    hover:scale-110
    transition
  "
>
  <FaWhatsapp size={32} />
</a>
  )
}

export default WhatsAppButton