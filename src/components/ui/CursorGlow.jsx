import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const updateMouse = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", updateMouse)

    return () => {
      window.removeEventListener("mousemove", updateMouse)
    }

  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        w-[400px]
        h-[400px]
        rounded-full
        bg-[#B7FF3C]/10
        blur-[120px]
        z-0
      "
    />
  )
}

export default CursorGlow