import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { MapPin } from "lucide-react"

import { bottomBarVariants } from "./heroVariants"

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/pyocusco",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pasionyorgullomarinera",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@pasionyorgullomarinera",
    Icon: FaTiktok,
  },
]

function HeroBottomBar() {
  return (
    <motion.div
      variants={bottomBarVariants}
      className="
        flex
        flex-col
        gap-6
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >

      {/* Social links */}
      <div className="flex items-center gap-3">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/15
              bg-white/5
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:border-[#3ACB16]/50
              hover:bg-[#3ACB16]
              hover:text-black
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#3ACB16]
            "
          >
            <Icon size={16} aria-hidden="true" />
          </a>
        ))}
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-white/60">
        <MapPin size={16} className="text-[#3ACB16]" aria-hidden="true" />
        Wanchaq — Cusco
      </div>

    </motion.div>
  )
}

export default HeroBottomBar
