function Button({ children, primary }) {
  return (
    <button
      className={`
        relative
        overflow-hidden
        px-7
        py-4
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        shadow-xl
        ${primary
          ? "bg-[#B7FF3C] text-black hover:shadow-[#B7FF3C]/30"
          : "bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10"
        }
      `}
    >

      {/* Glow */}
      {
        primary && (
          <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-all duration-500 ease-out" />
        )
      }

      <span className="relative z-10">
        {children}
      </span>

    </button>
  )
}

export default Button