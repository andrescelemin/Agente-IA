/**
 * Página de servicios para SmartPrompt Solutions
 * Especializada en GPTs personalizados y Prompt Engineering
 */
import { Link } from 'react-router'
import { ArrowRight, Search, MessageSquare, Cog, Monitor, BarChart, HeadphonesIcon } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const services = [
  {
    name: 'Evaluación y Diagnóstico Inicial',
    description: 'Análisis completo de necesidades y identificación de oportunidades de IA',
    icon: Search,
    features: [
      'Análisis de procesos actuales',
      'Identificación de casos de uso',
      'Evaluación de ROI potencial',
      'Roadmap de implementación'
    ],
    price: 'Desde $2,500',
    duration: '2-3 semanas',
    popular: false,
  },
  {
    name: 'Desarrollo de Prompts Personalizados',
    description: 'Creación de prompts específicos adaptados a tareas concretas',
    icon: MessageSquare,
    features: [
      'Prompts optimizados por sector',
      'Iteración y refinamiento',
      'Testing y validación',
      'Documentación completa'
    ],
    price: 'Desde $5,000',
    duration: '3-4 semanas',
    popular: true,
  },
  {
    name: 'Configuración y Entrenamiento',
    description: 'Selección de plataforma y entrenamiento con datos específicos',
    icon: Cog,
    features: [
      'Selección de plataforma óptima',
      'Entrenamiento con datos cliente',
      'Optimización de parámetros',
      'Pruebas de rendimiento'
    ],
    price: 'Desde $8,000',
    duration: '4-6 semanas',
    popular: true,
  },
  {
    name: 'Integración y Automatización',
    description: 'Integración en sistemas existentes y desarrollo de interfaces',
    icon: Monitor,
    features: [
      'APIs y conectores personalizados',
      'Integración con sistemas legacy',
      'Interfaces de usuario intuitivas',
      'Automatización de workflows'
    ],
    price: 'Desde $12,000',
    duration: '6-8 semanas',
    popular: false,
  },
  {
    name: 'Monitoreo y Mejora Continua',
    description: 'Seguimiento de rendimiento y optimización constante',
    icon: BarChart,
    features: [
      'Dashboard de métricas',
      'Alertas automáticas',
      'Análisis de performance',
      'Actualizaciones periódicas'
    ],
    price: 'Desde $3,000/mes',
    duration: 'Continuo',
    popular: false,
  },
  {
    name: 'Soporte y Capacitación',
    description: 'Formación del equipo y soporte técnico especializado',
    icon: HeadphonesIcon,
    features: [
      'Capacitación personalizada',
      'Soporte técnico 24/7',
      'Documentación detallada',
      'Sesiones de seguimiento'
    ],
    price: 'Desde $2,000/mes',
    duration: 'Continuo',
    popular: false,
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$3,000',
    period: '/mes',
    description: 'Ideal para pequeñas empresas que inician con IA',
    features: [
      '1 GPT personalizado',
      'Soporte por email',
      'Actualizaciones trimestrales',
      'Documentación básica',
      'Hasta 1,000 consultas/mes'
    ],
    cta: 'Empezar Ahora',
    popular: false
  },
  {
    name: 'Professional',
    price: '$8,000',
    period: '/mes',
    description: 'Para empresas que buscan transformación completa',
    features: [
      'Hasta 3 GPTs personalizados',
      'Soporte prioritario',
      'Actualizaciones mensuales',
      'Capacitación incluida',
      'Hasta 10,000 consultas/mes',
      'Integraciones personalizadas'
    ],
    cta: 'Más Popular',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    period: '',
    description: 'Soluciones a medida para grandes organizaciones',
    features: [
      'GPTs ilimitados',
      'Soporte dedicado 24/7',
      'Actualizaciones en tiempo real',
      'Consultoría estratégica',
      'Consultas ilimitadas',
      'SLA garantizado'
    ],
    cta: 'Contactar Ventas',
    popular: false
  }
]

const industries = [
  {
    title: 'Sector Legal',
    description: 'Automatización de documentos legales y análisis de jurisprudencia',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/cd2e3eac-c2df-465a-b962-0ec2af12721b.jpg',
    benefits: ['80% menos tiempo en contratos', 'Análisis jurisprudencial automático', 'Generación de briefs']
  },
  {
    title: 'Marketing Digital',
    description: 'Contenido adaptado a la voz de marca y optimización de campañas',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/87cb416b-9884-4508-9890-11a9b2edb77c.jpg',
    benefits: ['Contenido consistente', 'Campañas optimizadas', 'Análisis de audiencia']
  },
  {
    title: 'Sector Salud',
    description: 'Informes médicos y gestión eficiente de pacientes',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/786a064b-443d-4201-b270-345bb368cc7c.jpg',
    benefits: ['Informes médicos precisos', 'Gestión de citas', 'Análisis de síntomas']
  }
]

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Servicios de IA Personalizada
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Desde la evaluación inicial hasta el mantenimiento continuo, te acompañamos en cada paso 
              de tu transformación con IA personalizada
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro Proceso Completo
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Metodología probada para implementar GPTs personalizados con éxito garantizado
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <Card key={service.name} className={`relative ${service.popular ? 'border-blue-500 shadow-lg' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      Más Solicitado
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                        <div className="text-sm text-gray-500">{service.duration}</div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-blue-600 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Link to="/contact">
                      Consultar Servicio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Planes de Suscripción
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Elige el plan que mejor se adapte al tamaño y necesidades de tu organización
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 text-sm font-medium rounded-full">
                      Más Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                      : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Casos de Éxito por Industria
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubre cómo hemos transformado diferentes sectores con soluciones personalizadas
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Link to="/solutions">Ver Caso Completo</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Necesitas una Solución Personalizada?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Cada empresa es única. Trabajemos juntos para crear el GPT perfecto para tus necesidades específicas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link to="/contact">
                Solicitar Propuesta Personalizada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
