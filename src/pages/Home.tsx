/**
 * Página de inicio para SmartPrompt Solutions
 * Especializada en GPTs personalizados y Prompt Engineering
 */
import { Link } from 'react-router'
import { ArrowRight, Brain, Zap, Target, Users, CheckCircle, Cpu, MessageSquare, Cog } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

const features = [
  {
    name: 'Personalización Extrema',
    description: 'GPTs diseñados y ajustados específicamente para cada cliente y sector profesional.',
    icon: Target,
  },
  {
    name: 'Prompt Engineering Avanzado',
    description: 'Técnicas propietarias para adaptar modelos de lenguaje a necesidades específicas.',
    icon: MessageSquare,
  },
  {
    name: 'Evolución Continua',
    description: 'Modelos que aprenden y mejoran con el tiempo, adaptándose a cambios empresariales.',
    icon: Zap,
  },
  {
    name: 'Soporte Experto',
    description: 'Acompañamiento continuo desde implementación hasta mantenimiento y actualización.',
    icon: Users,
  },
]

const stats = [
  { name: 'Clientes Transformados', value: '200+' },
  { name: 'Sectores Profesionales', value: '6+' },
  { name: 'Modelos Personalizados', value: '500+' },
  { name: 'Eficiencia Promedio', value: '75%' },
]

const sectors = [
  { name: 'Legal', icon: '📄⚖️', description: 'Automatización de documentos y análisis jurisprudencial' },
  { name: 'Marketing', icon: '💬📈', description: 'Contenido adaptado y optimización de campañas' },
  { name: 'Salud', icon: '📋🏥', description: 'Informes médicos y gestión de pacientes' },
  { name: 'Finanzas', icon: '📊💼', description: 'Reportes financieros y gestión de riesgos' },
  { name: 'Educación', icon: '📚🎓', description: 'Material educativo y evaluación automatizada' },
  { name: 'Ingeniería', icon: '📐🏗️', description: 'Documentación técnica y análisis predictivo' },
]

const benefits = [
  'Reducción de tiempo en tareas repetitivas hasta 80%',
  'Mejora en precisión y consistencia del contenido',
  'Adaptación perfecta al lenguaje y procesos de tu sector',
  'ROI visible desde el primer mes de implementación',
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 via-indigo-200 to-purple-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 border border-blue-200">
                <Brain className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">GPTs Personalizados para Profesionales</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transforma tu Negocio con
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> IA Personalizada</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Creamos GPTs específicamente diseñados para tu sector profesional usando técnicas avanzadas de 
              Prompt Engineering. No más soluciones genéricas, obtén IA que entiende tu negocio.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Link to="/contact">
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/solutions">Ver Soluciones</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-200 via-indigo-200 to-purple-200 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Resultados que Hablan por Sí Solos
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Transformando empresas con IA personalizada desde 2023
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Por Qué SmartPrompt Solutions?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestra diferencia está en la personalización extrema y las técnicas avanzadas de Prompt Engineering
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Soluciones Específicas por Sector
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              GPTs personalizados que entienden el lenguaje y procesos únicos de tu industria
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {sectors.map((sector) => (
              <Card key={sector.name} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{sector.name}</h3>
                  <p className="text-gray-600 text-sm leading-6">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Link to="/solutions">
                Ver Todas las Soluciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Impacto Inmediato</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resultados Desde el Primer Día
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestros clientes experimentan mejoras significativas desde la implementación inicial
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para Personalizar tu IA?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Descubre cómo un GPT diseñado específicamente para tu sector puede revolucionar tus procesos
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                <Link to="/contact">
                  Consulta Gratuita Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/products">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
