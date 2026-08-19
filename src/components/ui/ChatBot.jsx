import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, Send } from "lucide-react"

const WELCOME_MESSAGE = {
  role: "model",
  text: "¡Hola! 👋 Soy el asistente virtual de Pasión y Orgullo. Puedo ayudarte con horarios, niveles, sedes, inscripciones y más. ¿En qué te ayudo?",
}

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showGreeting, setShowGreeting] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, loading, open])

  useEffect(() => {
    const showTimer = setTimeout(() => setShowGreeting(true), 2000)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!showGreeting) return
    const hideTimer = setTimeout(() => setShowGreeting(false), 10000)
    return () => clearTimeout(hideTimer)
  }, [showGreeting])

  const openChat = () => {
    setOpen(true)
    setShowGreeting(false)
  }

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const nextMessages = [...messages, { role: "user", text }]
    setMessages(nextMessages)
    setInput("")
    setError(null)
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: nextMessages.slice(0, -1),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo obtener respuesta")
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply }])
    } catch (err) {
      setError("No se pudo enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Greeting Bubble */}
      <AnimatePresence>
        {showGreeting && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              bottom-24
              right-4
              sm:bottom-28
              sm:right-6
              z-50
              max-w-[220px]
              rounded-2xl
              rounded-br-sm
              bg-white
              text-black
              px-4
              py-3
              text-sm
              font-medium
              shadow-2xl
              cursor-pointer
            "
            onClick={openChat}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowGreeting(false)
              }}
              aria-label="Cerrar mensaje"
              className="
                absolute
                -top-2
                -right-2
                w-5
                h-5
                rounded-full
                bg-black/70
                text-white
                flex
                items-center
                justify-center
              "
            >
              <X size={12} />
            </button>
            ¡Hola! 👋 ¿Tienes alguna duda? Pregúntame aquí.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="
          fixed
          bottom-4
          right-4
          sm:bottom-6
          sm:right-6
          z-50
          w-16
          h-16
          sm:w-20
          sm:h-20
          rounded-full
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-110
          transition
        "
      >
        <img
          src="/images/chatbot.png"
          alt="Asistente virtual"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              bottom-24
              right-4
              left-4
              sm:left-auto
              sm:right-6
              sm:bottom-28
              sm:w-96
              z-50
              max-h-[70vh]
              flex
              flex-col
              rounded-3xl
              border
              border-white/10
              bg-[#0B0F1A]
              shadow-2xl
              overflow-hidden
            "
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold font-[Poppins]">
                  Asistente Pasión y Orgullo
                </p>
                <p className="text-xs text-white/50">
                  Resuelve tus dudas al instante
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="
                  shrink-0
                  w-8
                  h-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white/60
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      max-w-[85%]
                      rounded-2xl
                      px-4
                      py-2.5
                      text-sm
                      leading-relaxed
                      ${
                        msg.role === "user"
                          ? "bg-[#B7FF3C] text-black"
                          : "bg-white/10 text-white/90"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white/60 rounded-2xl px-4 py-2.5 text-sm">
                    Escribiendo...
                  </div>
                </div>
              )}

              {error && (
                <p className="text-red-400 text-xs px-1">{error}</p>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu pregunta..."
                className="
                  flex-1
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-[#B7FF3C]/50
                "
              />

              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Enviar mensaje"
                className="
                  w-10
                  h-10
                  shrink-0
                  rounded-xl
                  bg-[#B7FF3C]
                  text-black
                  flex
                  items-center
                  justify-center
                  transition
                  hover:scale-105
                  disabled:opacity-40
                  disabled:hover:scale-100
                "
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
