/**
 * Página de contacto para SmartPrompt Solutions
 * Formulario especializado para consultas sobre GPTs personalizados
 */
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Brain, MessageSquare } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: ['info@smartprompt.com', 'andres@smartprompt.com'],
    description: 'Respuesta en menos de 2 horas'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    details: ['+1 (555) 123-4567', 'WhatsApp: +1 (555) 987-6543'],
    description: 'Consultas de 9:00 AM a 6:00 PM'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    details: ['Silicon Valley, CA', 'Trabajo 100% remoto'],
    description: 'Reuniones virtuales disponibles'
  },
  {
    icon: Clock,
    title: 'Horarios',
    details: ['Lun - Vie: 9:00 AM - 6:00 PM PST', 'Soporte: 24/7 para clientes'],
    description: 'Flexibilidad horaria internacional'
  }
]

const sectors = [
  'Legal - Automatización de documentos y análisis jurisprudencial',
  'Marketing - Contenido de marca y optimización de campañas',
  'Salud - Informes médicos y gestión de pacientes',
  'Finanzas - Reportes financieros y gestión de riesgos',
  'Educación - Material educativo y evaluación automatizada',
  'Ingeniería - Documentación técnica y análisis predictivo',
  'Otro sector - Cuéntanos sobre tu industria'
]

const projectTypes = [
  'Evaluación y diagnóstico inicial (2-3 semanas)',
  'Desarrollo de prompts personalizados (3-4 semanas)',
  'GPT completo con integración (6-8 semanas)',
  'Consultoría estratégica en IA',
  'Plan de suscripción mensual',
  'No estoy seguro - necesito orientación'
]

const budgetRanges = [
  '$2,500 - $5,000 (Evaluación inicial)',
  '$5,000 - $15,000 (Desarrollo de prompts)',
  '$15,000 - $30,000 (GPT completo)',
  '$30,000+ (Solución enterprise)',
  'Suscripción mensual ($3K - $8K)',
  'Necesito una cotización personalizada'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    sector: '',
    projectType: '',
    budget: '',
    currentProcess: '',
    painPoints: '',
    expectedResults: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto text-center px-6">
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Consulta Enviada!</h1>
          <p className="text-gray-600 mb-4">
            Gracias por tu interés en SmartPrompt Solutions. Andrés se pondrá en contacto contigo 
            en las próximas 2 horas para discutir tu proyecto de IA personalizada.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800 text-sm">
              <strong>¿Urgente?</strong> Escríbenos directamente a andres@smartprompt.com 
              o por WhatsApp al +1 (555) 987-6543
            </p>
          </div>
          <Button 
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '', email: '', company: '', position: '', phone: '', sector: '',
                projectType: '', budget: '', currentProcess: '', painPoints: '', 
                expectedResults: '', timeline: '', message: ''
              })
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Enviar Otra Consulta
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 border border-blue-200">
                <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Consulta Gratuita Disponible</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hablemos de tu GPT Personalizado
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cuéntanos sobre tu sector y procesos. Diseñaremos una solución de IA 
              que se adapte perfectamente a tus necesidades profesionales específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Brain className="h-8 w-8 text-blue-600" />
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Solicita tu Consulta Gratuita
                  </h2>
                  <p className="text-gray-600">Análisis inicial sin costo de 60 minutos</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-2"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Cargo</Label>
                    <Input
                      id="position"
                      type="text"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      className="mt-2"
                      placeholder="Director, Gerente, etc."
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="sector">Sector Profesional *</Label>
                    <Select onValueChange={(value) => handleInputChange('sector', value)} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecciona tu sector" />  
                      </SelectTrigger>
                      <SelectContent>
                        {sectors.map((sector) => (
                          <SelectItem key={sector} value={sector}>
                            {sector}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="projectType">Tipo de Proyecto *</Label>
                    <Select onValueChange={(value) => handleInputChange('projectType', value)} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="¿Qué necesitas?" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="budget">Presupuesto Estimado</Label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Rango de inversión" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline Deseado</Label>
                    <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="¿Cuándo necesitas iniciar?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inmediato">Inmediatamente</SelectItem>
                        <SelectItem value="1mes">En el próximo mes</SelectItem>
                        <SelectItem value="3meses">En los próximos 3 meses</SelectItem>
                        <SelectItem value="6meses">En los próximos 6 meses</SelectItem>
                        <SelectItem value="flexible">Fecha flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Detailed Requirements */}
                <div>
                  <Label htmlFor="currentProcess">Proceso Actual *</Label>
                  <Textarea
                    id="currentProcess"
                    required
                    value={formData.currentProcess}
                    onChange={(e) => handleInputChange('currentProcess', e.target.value)}
                    className="mt-2"
                    rows={3}
                    placeholder="Describe brevemente cómo manejas actualmente las tareas que quieres automatizar..."
                  />
                </div>

                <div>
                  <Label htmlFor="painPoints">Principales Desafíos *</Label>
                  <Textarea
                    id="painPoints"
                    required
                    value={formData.painPoints}
                    onChange={(e) => handleInputChange('painPoints', e.target.value)}
                    className="mt-2"
                    rows={3}
                    placeholder="¿Qué problemas específicos enfrentas? ¿Qué te lleva más tiempo? ¿Dónde necesitas más precisión?"
                  />
                </div>

                <div>
                  <Label htmlFor="expectedResults">Resultados Esperados</Label>
                  <Textarea
                    id="expectedResults"
                    value={formData.expectedResults}
                    onChange={(e) => handleInputChange('expectedResults', e.target.value)}
                    className="mt-2"
                    rows={3}
                    placeholder="¿Qué mejoras específicas esperas? ¿Reducción de tiempo, mejora en calidad, aumento de productividad?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Información Adicional</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2"
                    rows={4}
                    placeholder="Cualquier detalle adicional que consideres relevante para tu proyecto de IA personalizada..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3"
                >
                  {isSubmitting ? (
                    'Enviando Consulta...'
                  ) : (
                    <>
                      Solicitar Consulta Gratuita
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500">
                  * Campos obligatorios. Andrés responderá personalmente en menos de 2 horas.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex-shrink-0">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-700 mb-1">{detail}</p>
                          ))}
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Founder Info */}
              <Card className="mt-8 border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src="https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/77ab032c-2bca-4cfe-9cf4-b5caba31cab3.jpg"
                      alt="Andrés Martín - Fundador"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Andrés Martín</h4>
                      <p className="text-blue-700 text-sm mb-2">CEO & Fundador de SmartPrompt Solutions</p>
                      <p className="text-blue-600 text-sm leading-6">
                        "Cada empresa es única, por eso creo GPTs personalizados que realmente 
                        entienden tu contexto profesional específico."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Enlaces Rápidos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a 
                      href="https://smartprompt.myshopify.com/pages/gpts-personalizados-para-entornos-profesionales-especificos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 text-sm"
                    >
                      → Ver información detallada de servicios
                    </a>
                    <p className="text-gray-600 text-sm">
                      <strong>WhatsApp:</strong> +1 (555) 987-6543
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Email directo:</strong> andres@smartprompt.com
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Qué hace único a un GPT personalizado?</h4>
              <p className="text-gray-600 mb-6">
                A diferencia de ChatGPT genérico, nuestros GPTs están entrenados específicamente 
                con la terminología, procesos y contexto de tu sector profesional.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">¿Cuánto tiempo toma desarrollar un GPT personalizado?</h4>
              <p className="text-gray-600">
                Desde 3-4 semanas para prompts especializados hasta 6-8 semanas para 
                una solución completa con integración.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿La consulta inicial es realmente gratuita?</h4>
              <p className="text-gray-600 mb-6">
                Sí, ofrecemos 60 minutos de consulta sin costo donde analizamos tu caso 
                específico y proponemos una solución personalizada.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">¿Qué sectores manejan actualmente?</h4>
              <p className="text-gray-600">
                Legal, Marketing, Salud, Finanzas, Educación e Ingeniería. Pero estamos 
                abiertos a explorar cualquier sector profesional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
