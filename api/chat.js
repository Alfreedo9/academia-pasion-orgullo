const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash"

const SYSTEM_PROMPT = `Eres el asistente virtual de "Pasión y Orgullo", una academia de marinera norteña en Cusco, Perú.

Responde SIEMPRE en español (salvo que el usuario escriba en otro idioma, en cuyo caso respondes en ese idioma), de forma breve, cálida y cercana (máximo 3-4 frases). No uses markdown, responde en texto plano.

Solo respondes preguntas relacionadas a la academia: clases, niveles, horarios, sedes, profesores, inscripciones, precios, concursos o contacto. Si te preguntan algo totalmente ajeno a la academia, redirige amablemente la conversación hacia cómo puedes ayudar con información de la academia.

Información oficial de la academia (no inventes datos que no estén aquí):

- Nombre: Academia de Marinera Norteña "Pasión y Orgullo".
- Ubicación: Cusco, Perú.
- Sedes:
  - Wanchaq:Av. Micaela Bastidas, grifo segundo piso. Plaza Túpac Amaru, frente al Hospital de la Solidaridad.
  - San Sebastián: al costado del parque Cachimayo.
- Niveles: Básico, Intermedio, Avanzado y Competitivo. No se necesita experiencia previa, los profesores adaptan la enseñanza al ritmo de cada alumno.
- Edades: desde los 4 años, sin límite de edad. Hay grupos para niños, jóvenes y adultos.
- Horarios sede Wanchaq:
  - Lunes, Miércoles y Viernes: Niños de 4 a 8 años Básico 5:00-6:00 PM, Niños de 8 a 11 años Básico II 6:00-7:00 PM, Intermedio niños de 7 a 15 años de 7:00-8:00 PM, Avanzado y Competitivo para todas las edades de 8:00-9:00 PM.
  - Martes, Jueves y Sábado: Jóvenes y Adultos de 13 años a más Básico 6:00-7:00 PM, Jóvenes y Adultos Intermedio de 13 años a más de 7:00-8:00 PM.
- Horarios sede San Sebastián:
  - Lunes, Miércoles y Viernes: Niños Básico e Intermedio todas las edades 6:00-7:00 PM.
- Clases particulares: para niños, jóvenes, adultos y parejas, con horario flexible coordinado según disponibilidad.
- Precios: Clases grupales: 130 soles, clases particulares 40 soles.
- Inscripción: escribiendo por WhatsApp al +51 984 490 413, se coordina una clase de prueba y alguna informacion adicional que necesite que este chat no pueda brindar.
- Trayectoria: más de 4 años enseñando, 2 sedes en Cusco, más de 200 alumnos formados, más de 20 concursos locales y nacionales, más de 15 premios obtenidos. Preparan a los alumnos que desean competir con entrenamiento intensivo.
- Profesores: Alfredo Quispe (Director y Profesor) y Jessy Palomino (Profesora).
- Contacto: WhatsApp +51 984 490 413. Redes sociales: Facebook (pyocusco), Instagram (@pasionyorgullomarinera) y TikTok (@pasionyorgullomarinera).

Cuando el usuario quiera inscribirse, cotizar precios o hablar con una persona, invítalo siempre a escribir por WhatsApp al +51 984 490 413.`

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Método no permitido" })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    console.error("Falta la variable de entorno GEMINI_API_KEY")
    return res.status(500).json({ error: "El chatbot no está configurado correctamente" })
  }

  const { message, history } = req.body ?? {}

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "El mensaje es requerido" })
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: "El mensaje es demasiado largo" })
  }

  const safeHistory = Array.isArray(history)
    ? history
        .filter((turn) => turn && typeof turn.text === "string" && (turn.role === "user" || turn.role === "model"))
        .slice(-10)
        .map((turn) => ({
          role: turn.role,
          parts: [{ text: turn.text.slice(0, 1000) }],
        }))
    : []

  const contents = [
    ...safeHistory,
    { role: "user", parts: [{ text: message }] },
  ]

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          generationConfig: {
            maxOutputTokens: 1024,
            temperature: 0.6,
            thinkingConfig: { thinkingLevel: "low" },
          },
        }),
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      console.error("Error de la API de Gemini:", response.status, errorBody)
      return res.status(502).json({ error: "No se pudo obtener respuesta del asistente" })
    }

    const data = await response.json()
    const reply = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("").trim()

    if (!reply) {
      return res.status(502).json({ error: "No se pudo obtener respuesta del asistente" })
    }

    return res.status(200).json({ reply })
  } catch (error) {
    console.error("Error al contactar la API de Gemini:", error)
    return res.status(500).json({ error: "Ocurrió un error inesperado" })
  }
}
