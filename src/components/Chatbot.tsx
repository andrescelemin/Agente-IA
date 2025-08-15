/**
 * Intelligent chatbot component for SmartPrompt Solutions
 * Provides initial consultation and lead qualification
 */
import { useState } from 'react'
import { MessageCircle, Send, X, Brain, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Badge } from './ui/badge'

interface Message {
  id: string
  text: string
  isBot: boolean
  options?: string[]
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: '¡Hola! 👋 Soy el asistente de SmartPrompt Solutions. Te ayudo a descubrir cómo un GPT personalizado puede transformar tu empresa.',
    isBot: true,
    timestamp: new Date()
  },
  {
    id: '2',
    text: '¿En qué sector profesional trabajas?',
    isBot: true,
    options: ['Legal 📄⚖️', 'Marketing 💬📈', 'Salud 📋🏥', 'Finanzas 📊💼', 'Educación 📚🎓', 'Ingeniería 📐🏗️', 'Otro sector'],
    timestamp: new Date()
  }
]

const botResponses: Record<string, any> = {
  'Legal 📄⚖️': {
    text: '¡Excelente! El sector legal es uno donde más impacto generamos. Nuestros clientes reducen 80% el tiempo en documentos legales. ¿Qué procesos te toman más tiempo?',
    options: ['Redacción de contratos', 'Análisis jurisprudencial', 'Documentos procesales', 'Investigación legal']
  },
  'Marketing 💬📈': {
    text: 'El marketing es perfecto para GPTs personalizados. Ayudamos a mantener la voz de marca y triplicar la producción de contenido. ¿Cuál es tu mayor desafío?',
    options: ['Consistencia de marca', 'Velocidad de producción', 'Contenido multicanal', 'Optimización de campañas']
  },
  'Salud 📋🏥': {
    text: 'En salud mejoramos significativamente la documentación médica y seguimiento de pacientes. ¿En qué área necesitas más eficiencia?',
    options: ['Informes médicos', 'Historiales clínicos', 'Seguimiento pacientes', 'Documentación administrativa']
  },
  'Finanzas 📊💼': {
    text: 'El sector financiero es ideal para automatización inteligente. Reducimos 90% el tiempo de análisis. ¿Qué procesos consumen más recursos?',
    options: ['Análisis de riesgo', 'Reportes financieros', 'Evaluaciones crediticias', 'Cumplimiento normativo']
  },
  'Educación 📚🎓': {
    text: 'En educación personalizamos el aprendizaje y automatizamos la creación de contenido. ¿Dónde inviertes más tiempo?',
    options: ['Material educativo', 'Evaluación de tareas', 'Planes de lecciones', 'Retroalimentación estudiantil']
  },
  'Ingeniería 📐🏗️': {
    text: 'La ingeniería se beneficia enormemente de la automatización de documentación técnica. ¿Cuál es tu proceso más tedioso?',
    options: ['Documentación técnica', 'Especificaciones', 'Reportes de inspección', 'Análisis predictivo']
  },
  'default_followup': {
    text: 'Perfecto! Basado en tu sector y necesidades, un GPT personalizado podría ahorrarte entre 15-25 horas semanales. ¿Te interesa una consulta gratuita de 60 minutos para analizar tu caso específico?',
    options: ['Sí, agendar consulta', 'Ver calculadora ROI', 'Hablar con un experto']
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputText, setInputText] = useState('')
  const [userSector, setUserSector] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      options,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleOptionClick = (option: string) => {
    addMessage(option, false)
    
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      
      if (option.includes('📄⚖️') || option.includes('💬📈') || option.includes('📋🏥') || 
          option.includes('📊💼') || option.includes('📚🎓') || option.includes('📐🏗️')) {
        setUserSector(option)
        const response = botResponses[option]
        addMessage(response.text, true, response.options)
      } else if (option === 'Otro sector') {
        addMessage('¡Sin problema! Trabajamos con diversos sectores. Cuéntame brevemente sobre tu industria y procesos principales.', true)
      } else if (option === 'Sí, agendar consulta') {
        addMessage('¡Perfecto! Te redirijo a nuestro formulario de contacto donde puedes agendar una consulta gratuita con Andrés, nuestro fundador. 🚀', true, ['Ir a formulario de contacto'])
      } else if (option === 'Ver calculadora ROI') {
        addMessage('¡Excelente idea! La calculadora ROI te ayudará a estimar el impacto financiero específico para tu sector. 📊', true, ['Abrir calculadora ROI'])
      } else if (option === 'Hablar con un experto') {
        addMessage('Te conecto directamente con nuestro equipo. Puedes contactar a Andrés por WhatsApp: +1 (555) 987-6543 o email: andres@smartprompt.com 📞', true)
      } else if (option === 'Ir a formulario de contacto') {
        window.location.href = '/#/contact'
      } else if (option === 'Abrir calculadora ROI') {
        window.location.href = '/#/roi-calculator'
      } else {
        // Default follow-up after specific task selection
        const response = botResponses.default_followup
        addMessage(response.text, true, response.options)
      }
    }, 1500)
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return
    
    addMessage(inputText, false)
    setInputText('')
    
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      addMessage('Gracias por compartir esa información. Un GPT personalizado puede definitivamente ayudarte con eso. ¿Te gustaría conocer casos similares o prefieres una consulta personalizada?', true, ['Ver casos similares', 'Consulta personalizada', 'Calcular ROI'])
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">SmartPrompt Assistant</CardTitle>
                    <p className="text-blue-100 text-sm">Consultor en IA Personalizada</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.isBot 
                        ? 'bg-white text-gray-800 border border-gray-200' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="block w-full text-left px-3 py-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg transition-colors"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className="bg-blue-600 hover:bg-blue-700 px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <Badge variant="secondary" className="text-xs">
                    ⚡ Respuesta instantánea con IA
                  </Badge>
                  <button
                    onClick={() => window.location.href = '/#/contact'}
                    className="text-blue-600 text-xs hover:text-blue-800 flex items-center"
                  >
                    Consulta humana
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
