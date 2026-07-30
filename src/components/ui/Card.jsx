function Card({ children, className = "" }) {
  return (
    <div
  className={`
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-6
    sm:p-8
    transition-all
    duration-500
    ease-out
    hover:-translate-y-2
    hover:border-[#B7FF3C]/30
    hover:bg-white/[0.05]

    ${className}
  `}
>

      {/* Glow */}
      <div className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-all duration-500 ease-out
        bg-linear-to-br
        from-[#B7FF3C]/10
        to-transparent
      " />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  )
}

export default Card