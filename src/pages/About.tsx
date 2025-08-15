/**
 * Página "Sobre Nosotros" para SmartPrompt Solutions
 * Historia, equipo y valores de la empresa especializada en GPTs personalizados
 */
import { Link } from 'react-router'
import { ArrowRight, Brain, Target, Award, Heart, Users, Lightbulb, TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

const values = [
  {
    name: 'Innovación Constante',
    description: 'Desarrollamos técnicas propietarias de Prompt Engineering que mantienen a nuestros clientes a la vanguardia.',
    icon: Lightbulb,
  },
  {
    name: 'Personalización Extrema',
    description: 'Cada GPT que creamos es único, diseñado específicamente para el contexto y necesidades de cada cliente.',
    icon: Target,
  },
  {
    name: 'Excelencia Técnica',
    description: 'Combinamos expertise en IA con profundo conocimiento de procesos empresariales para crear soluciones superiores.',
    icon: Award,
  },
  {
    name: 'Compromiso Cliente',
    description: 'Nos convertimos en socios estratégicos, acompañando cada transformación con dedicación absoluta.',
    icon: Heart,
  },
]

const team = [
  {
    name: 'Andrés Martín',
    role: 'CEO & Fundador',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/ae2e1358-a639-42b2-befc-a39fb21aa390.jpg',
    bio: 'Experto en IA y Prompt Engineering con 8+ años transformando empresas con soluciones personalizadas.',
    speciality: 'Estrategia de IA y Prompt Engineering Avanzado'
  },
  {
    name: 'Dra. Elena Rodríguez',
    role: 'Directora de Investigación',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/0cc3239f-b4da-4a8f-a9bb-9ad61b485eb6.jpg',
    bio: 'PhD en Machine Learning, especialista en adaptación de modelos de lenguaje para contextos empresariales.',
    speciality: 'Investigación en IA y Desarrollo de Algoritmos'
  },
  {
    name: 'Carlos Mendoza',
    role: 'Director de Implementación',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/b2c7f955-0228-431a-90f3-3b6d141836d7.jpg',
    bio: 'Ingeniero de sistemas con experiencia en integración de IA en entornos empresariales complejos.',
    speciality: 'Arquitectura e Integración de Sistemas'
  },
  {
    name: 'Laura Chen',
    role: 'Directora de Éxito del Cliente',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/c87737ba-7ff1-45b6-b795-97cfefda18e8.jpg',
    bio: 'Experta en transformación digital y adopción de tecnologías de IA en diferentes sectores profesionales.',
    speciality: 'Adopción de IA y Cambio Organizacional'
  },
]

const milestones = [
  { 
    year: '2023', 
    title: 'Fundación de SmartPrompt', 
    description: 'Nace con la visión de democratizar IA personalizada para profesionales',
    metric: 'Primera ronda de financiación seed'
  },
  { 
    year: '2023', 
    title: 'Primeros Clientes Piloto', 
    description: 'Implementación exitosa en sectores legal y marketing',
    metric: '20 clientes beta con 95% satisfacción'
  },
  { 
    year: '2024', 
    title: 'Expansión Sectorial', 
    description: 'Incorporación de soluciones para salud, finanzas y educación',
    metric: '100+ GPTs personalizados desarrollados'
  },
  { 
    year: '2024', 
    title: 'Reconocimiento Industria', 
    description: 'Premio "AI Innovation Leader" por técnicas de Prompt Engineering',
    metric: '200+ empresas transformadas'
  },
  { 
    year: '2024', 
    title: 'Presente y Futuro', 
    description: 'Consolidación como líderes en IA personalizada para profesionales',
    metric: '500+ modelos activos, 6 sectores'
  },
]

const certifications = [
  { name: 'OpenAI Partner Program', description: 'Socio certificado en desarrollo de GPTs' },
  { name: 'Microsoft AI Partner', description: 'Especialista en Azure AI Services' },
  { name: 'Google Cloud AI', description: 'Certificación en ML y AI Platform' },
  { name: 'ISO 27001', description: 'Seguridad de la información garantizada' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 border border-blue-200">
                <Brain className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Líderes en IA Personalizada</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sobre SmartPrompt Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Somos pioneros en la creación de GPTs personalizados usando técnicas avanzadas de Prompt Engineering. 
              Desde 2023, transformamos profesiones con IA que realmente entiende cada contexto empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestra Misión
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proveer a empresas de todos los tamaños con modelos de lenguaje personalizados que no solo generen contenido, 
              sino que también optimicen y transformen sus procesos internos mediante soluciones altamente adaptadas y específicas.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
                </div>
                <p className="text-gray-700 leading-7">
                  Convertirnos en líderes globales en la creación de soluciones de inteligencia artificial 
                  adaptadas específicamente a las necesidades de cada entorno profesional, utilizando 
                  técnicas avanzadas de Prompt Engineering.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Propósito</h3>
                </div>
                <p className="text-gray-700 leading-7">
                  Democratizar el acceso a IA personalizada, permitiendo que profesionales de cualquier 
                  sector puedan transformar sus procesos con herramientas que realmente comprenden 
                  su contexto específico.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestros Valores Fundamentales
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Los principios que guían cada desarrollo, implementación y relación con nuestros clientes
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <Card key={value.name} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-7">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro Equipo Experto
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Profesionales especializados en IA, Prompt Engineering y transformación empresarial
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-6 mb-3">{member.bio}</p>
                      <div className="bg-blue-50 rounded-lg px-3 py-2">
                        <p className="text-blue-800 text-xs font-medium">{member.speciality}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro Recorrido
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              De startup visionaria a líder en IA personalizada para profesionales
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">  
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{milestone.year}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                    <div className="mt-2 bg-blue-50 rounded-lg px-3 py-2 inline-block">
                      <p className="text-blue-800 text-sm font-medium">{milestone.metric}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Certificaciones y Alianzas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Respaldados por las principales plataformas de IA y estándares de calidad internacional
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Quieres Conocer Más Sobre Nuestro Enfoque?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Descubre cómo nuestras técnicas propietarias de Prompt Engineering pueden transformar tu sector específico.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link to="/contact">
                Agendar Reunión con Fundador
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/solutions">Ver Casos de Éxito</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
