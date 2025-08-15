/**
 * Testimonials page with video testimonials and detailed success stories
 * Features client stories across different professional sectors
 */
import { Link } from 'react-router'
import { Play, Star, ArrowRight, Quote, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const videoTestimonials = [
  {
    id: 'martinez-legal',
    client: 'Bufete Martínez & Asociados',
    sector: 'Legal',
    representative: 'Ana Martínez',
    position: 'Socia Fundadora',
    thumbnail: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/15987591-cceb-4aea-adca-302e2955c779.jpg',
    duration: '3:45',
    preview: '"En 6 meses recuperamos la inversión completa. Ahora redactamos contratos que antes tomaban 8 horas en solo 2 horas, manteniendo la precisión legal que exigimos."',
    metrics: ['80% reducción tiempo', '$180K ahorro anual', '95% precisión legal'],
    featured: true
  },
  {
    id: 'creativeflow',
    client: 'Agencia CreativeFlow',
    sector: 'Marketing',
    representative: 'Carlos Ruiz',
    position: 'Director Creativo',
    thumbnail: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/a625d70f-572e-4274-b307-f451a8ff4de1.jpg',
    duration: '2:30',
    preview: '"Triplicamos nuestra capacidad de producción de contenido sin contratar más personal. La consistencia de marca es perfecta en todos los canales."',
    metrics: ['300% más contenido', '12 clientes simultáneos', '70% menos revisiones'],
    featured: true
  },
  {
    id: 'salud-plus',
    client: 'Clínica Salud Plus',
    sector: 'Salud',
    representative: 'Dr. Miguel Fernández',
    position: 'Director Médico',
    thumbnail: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/435327ac-4cc2-4b37-b6d6-f414a962e246.jpg',
    duration: '4:12',
    preview: '"Los informes médicos que generamos ahora son más completos y precisos. Nuestros pacientes notan la diferencia en la calidad de atención."',
    metrics: ['50% menos tiempo documentación', '40% mejora seguimiento', '95% satisfacción pacientes'],
    featured: false
  },
  {
    id: 'financiera-andina',
    client: 'Corporación Financiera Andina',
    sector: 'Finanzas',
    representative: 'Laura Gómez',
    position: 'VP Análisis de Riesgo',
    thumbnail: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/1a1d23cb-62ce-4686-9a04-006c600cb756.jpg',
    duration: '3:20',
    preview: '"El análisis crediticio pasó de 4 horas a 15 minutos con mayor precisión. Nuestro equipo ahora se enfoca en decisiones estratégicas, no en tareas repetitivas."',
    metrics: ['90% reducción tiempo análisis', '99.2% precisión', '$2M ahorro operativo'],
    featured: true
  },
  {
    id: 'instituto-futuro',
    client: 'Instituto Tecnológico Futuro',
    sector: 'Educación',
    representative: 'Profesora Carmen López',
    position: 'Directora Académica',
    thumbnail: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/38016383-a161-4dde-8e05-fc44dba2cd45.jpg',
    duration: '2:50',
    preview: '"Crear material didáctico personalizado para cada nivel es ahora cuestión de minutos. El engagement de nuestros estudiantes mejoró significativamente."',
    metrics: ['75% más engagement', '60% menos tiempo prep', '40% mejora aprobación'],
    featured: false
  },
  {
    id: 'constructora-avanzada',
    client: 'Constructora Ingeniería Avanzada',
    sector: 'Ingeniería',
    representative: 'Ing. Roberto Díaz',
    position: 'Gerente de Proyectos',
    thumbnail: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/c59f9bf0-a3a7-4eaf-bb9f-54b5541c408f.jpg',
    duration: '3:05',
    preview: '"La documentación técnica y especificaciones se generan automáticamente. Entregamos proyectos 25% más rápido con la misma calidad de siempre."',
    metrics: ['65% menos tiempo documentación', '25% entregas más rápidas', '30% optimización costos'],
    featured: false
  }
]

const writtenTestimonials = [
  {
    quote: "SmartPrompt Solutions no solo nos dio una herramienta, nos dio una ventaja competitiva. Nuestros clientes perciben inmediatamente la diferencia en calidad y velocidad de respuesta.",
    author: "Patricia Morales",
    position: "CEO, ConsulLegal Pro",
    sector: "Legal",
    company: "ConsulLegal Pro",
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/083c4d9f-b5a2-47bd-9247-c1babffbbd23.jpg',
    metric: "ROI del 340% en primer año"
  },
  {
    quote: "La precisión del GPT personalizado superó nuestras expectativas. Análisis que nos tomaban días, ahora los completamos en horas con mejor calidad y menor riesgo de error.",
    author: "Dr. Alejandro Herrera",
    position: "Jefe de Cardiología",
    sector: "Salud",
    company: "Hospital Central",
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/9adcfca1-0fca-4943-bd7f-26eacae8a228.jpg',
    metric: "95% precisión diagnóstica"
  },
  {
    quote: "Pasamos de ser una agencia pequeña a competir con las grandes, gracias a la capacidad de producción que nos dio el GPT personalizado. Ahora manejamos clientes que antes eran inalcanzables.",
    author: "Sofía Ramírez",
    position: "Directora de Cuentas",
    sector: "Marketing",
    company: "Digital Boost",
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/dbf07591-37fd-4abf-959e-ae91cca3a4c2.jpg',
    metric: "500% crecimiento clientes"
  },
  {
    quote: "La automatización de reportes financieros nos liberó tiempo para análisis estratégico. Nuestros clientes reciben insights más profundos y oportunos.",
    author: "Fernando Castro",
    position: "CFO",
    sector: "Finanzas",
    company: "InvestPro Capital",
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/f52a5e8e-673d-4092-b8f8-ebc470289d39.jpg',
    metric: "68% más tiempo estratégico"
  }
]

const successMetrics = [
  { metric: '200+', description: 'Clientes Transformados', icon: TrendingUp },
  { metric: '75%', description: 'Reducción Promedio de Tiempo', icon: Clock },
  { metric: '$15M+', description: 'Ahorros Generados Acumulados', icon: DollarSign },
  { metric: '6', description: 'Sectores Profesionales', icon: Star }
]

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 border border-blue-200">
                <Star className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Testimonios Verificados</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Casos de Éxito Reales
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubre cómo profesionales de diferentes sectores han transformado sus empresas 
              con GPTs personalizados, con métricas reales y resultados medibles.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{item.metric}</div>
                <div className="text-gray-600 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Testimonios en Video
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Escucha directamente de nuestros clientes sobre su experiencia de transformación
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className={`overflow-hidden ${testimonial.featured ? 'border-2 border-blue-200' : ''}`}>
                <div className="relative">
                  {testimonial.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-blue-600">⭐ Destacado</Badge>
                    </div>
                  )}
                  <div className="relative aspect-video bg-gray-900">
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.representative}
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors group">
                        <Play className="h-8 w-8 text-blue-600 ml-1 group-hover:text-blue-700" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {testimonial.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary">{testimonial.sector}</Badge>
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{testimonial.client}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>{testimonial.representative}</strong> - {testimonial.position}
                  </p>
                  
                  <blockquote className="text-gray-700 italic mb-4">
                    {testimonial.preview}
                  </blockquote>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {testimonial.metrics.map((metric, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                        <span className="text-green-800 text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Testimonios Escritos
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Reflexiones profundas sobre el impacto de los GPTs personalizados en diferentes organizaciones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <Quote className="h-12 w-12 text-blue-600/30" />
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg italic mb-6 text-center">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{testimonial.sector}</Badge>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                    <p className="text-blue-800 font-medium text-sm">{testimonial.metric}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resultados por Sector
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cada industria tiene sus desafíos únicos. Aquí los resultados promedio por sector profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📄⚖️</div>
                <CardTitle className="mb-4">Sector Legal</CardTitle>
                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-green-800 font-semibold">78%</span>
                    <span className="text-gray-600 text-sm ml-2">reducción tiempo contratos</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-blue-800 font-semibold">$165K</span>
                    <span className="text-gray-600 text-sm ml-2">ahorro promedio anual</span>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <span className="text-purple-800 font-semibold">96%</span>
                    <span className="text-gray-600 text-sm ml-2">precisión jurisprudencial</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link to="/solutions#legal">Ver Caso Legal</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💬📈</div>
                <CardTitle className="mb-4">Marketing Digital</CardTitle>
                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-green-800 font-semibold">285%</span>
                    <span className="text-gray-600 text-sm ml-2">aumento producción</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-blue-800 font-semibold">65%</span>
                    <span className="text-gray-600 text-sm ml-2">mejora engagement</span>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <span className="text-purple-800 font-semibold">12x</span>
                    <span className="text-gray-600 text-sm ml-2">capacidad clientes</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                  <Link to="/solutions#marketing">Ver Caso Marketing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📊💼</div>
                <CardTitle className="mb-4">Sector Financiero</CardTitle>
                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-green-800 font-semibold">92%</span>
                    <span className="text-gray-600 text-sm ml-2">reducción tiempo análisis</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-blue-800 font-semibold">$2.1M</span>
                    <span className="text-gray-600 text-sm ml-2">ahorro operativo promedio</span>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <span className="text-purple-800 font-semibold">99.1%</span>
                    <span className="text-gray-600 text-sm ml-2">precisión evaluaciones</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  <Link to="/solutions#finance">Ver Caso Finanzas</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Quieres Ser Nuestro Próximo Caso de Éxito?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Únete a más de 200 empresas que ya han transformado sus procesos con GPTs personalizados. 
            Tu historia de éxito podría ser la siguiente.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link to="/contact">
                Solicitar Consulta Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/roi-calculator">Calcular Mi ROI</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
