/**
 * Blog page with detailed case studies for SmartPrompt Solutions
 * Features success stories and technical insights about GPT implementations
 */
import { Link } from 'react-router'
import { ArrowRight, Clock, User, BookOpen, TrendingUp, Lightbulb, Target } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const featuredPost = {
  title: 'Cómo un Bufete Legal Redujo 80% el Tiempo de Redacción de Contratos',
  excerpt: 'Caso de estudio completo: Martínez & Asociados implementó nuestro GPT legal personalizado y transformó completamente sus procesos de documentación jurídica.',
  image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/1fda9db1-90b9-4232-ba26-3ef67d4f0a81.jpg',
  category: 'Caso de Éxito',
  sector: 'Legal',
  readTime: '8 min',
  date: '15 Dic 2024',
  author: 'Andrés Martín',
  link: '#'
}

const blogPosts = [
  {
    title: 'Prompt Engineering: 7 Técnicas Avanzadas para Maximizar Precisión',
    excerpt: 'Descubre las técnicas propietarias que utilizamos para crear prompts que superan el 95% de precisión en terminología especializada.',
    category: 'Técnico',
    sector: 'Todos',
    readTime: '12 min',
    date: '10 Dic 2024',
    author: 'Dra. Elena Rodríguez',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/6d169c6e-e92b-433f-b3fc-311bfaccd4a6.jpg',
    featured: false
  },
  {
    title: 'ROI Real: Marketing Agency Triplica Productividad con GPT Personalizado',
    excerpt: 'CreativeFlow transformó su operación: de 8 horas por campaña a 2.5 horas, manteniendo calidad premium y consistencia de marca.',
    category: 'Caso de Éxito',
    sector: 'Marketing',
    readTime: '6 min',
    date: '8 Dic 2024',
    author: 'Laura Chen',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/8746a6b4-2e03-4ea6-b3fc-4bd79a96e1b7.jpg',
    featured: true
  },
  {
    title: 'IA en Salud: Cómo Personalizar GPTs para Informes Médicos Precisos',
    excerpt: 'Guía técnica sobre adaptación de modelos de lenguaje para terminología médica, cumplimiento HIPAA y protocolos clínicos.',
    category: 'Técnico',
    sector: 'Salud',
    readTime: '10 min',
    date: '5 Dic 2024',
    author: 'Dr. Carlos Mendoza',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/e7da8293-3346-4b17-9a12-0d665117f009.jpg',
    featured: false
  },
  {
    title: 'Fintech Revolution: Automatización de Análisis Crediticio con IA',
    excerpt: 'Corporación Financiera Andina redujo tiempo de análisis de riesgo de 4 horas a 15 minutos con 99.2% de precisión.',
    category: 'Caso de Éxito',
    sector: 'Finanzas',
    readTime: '9 min',
    date: '2 Dic 2024',
    author: 'Andrés Martín',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/357d3ae0-73fd-4d39-ab37-ad1fc04f8367.jpg',
    featured: true
  },
  {
    title: 'Educación 4.0: GPTs que Generan Material Didáctico Personalizado',
    excerpt: 'Instituto Tecnológico Futuro implementó IA para crear contenido educativo adaptivo, mejorando engagement estudiantil 75%.',
    category: 'Caso de Éxito',
    sector: 'Educación',
    readTime: '7 min',
    date: '28 Nov 2024',
    author: 'Laura Chen',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/f2aa97b2-b7bb-4f03-9315-8c3ae914cdb9.jpg',
    featured: false
  },
  {
    title: 'Ingeniería Predictiva: IA para Optimización de Proyectos Constructivos',
    excerpt: 'Constructora Ingeniería Avanzada utiliza GPTs para análisis predictivo, reduciendo costos 30% y acelerando entregas 25%.',
    category: 'Caso de Éxito',
    sector: 'Ingeniería',
    readTime: '11 min',
    date: '25 Nov 2024',
    author: 'Dr. Carlos Mendoza',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/b1957ead-4b84-4b25-9759-eda62876c224.jpg',
    featured: false
  },
  {
    title: 'Metodología SmartPrompt: De la Evaluación a la Implementación',
    excerpt: 'Análisis detallado de nuestro proceso de 5 fases para implementar GPTs personalizados con garantía de éxito.',
    category: 'Metodología',
    sector: 'Todos',
    readTime: '15 min',
    date: '20 Nov 2024',
    author: 'Andrés Martín',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/ec42b1a2-5a38-4cbd-a5ec-363d02c0df7b.jpg',
    featured: false
  },
  {
    title: 'Seguridad y Compliance en GPTs Empresariales',
    excerpt: 'Guía completa sobre implementación segura de IA personalizada: encriptación, auditoría y cumplimiento normativo.',
    category: 'Técnico',
    sector: 'Todos',
    readTime: '13 min',
    date: '18 Nov 2024',
    author: 'Dra. Elena Rodríguez',
    image: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68902b460cd2d7c5a266e6a1/resource/14226f1c-55e5-41e7-87cf-636992468ef7.jpg',
    featured: false
  }
]

const categories = ['Todos', 'Caso de Éxito', 'Técnico', 'Metodología']
const sectors = ['Todos', 'Legal', 'Marketing', 'Salud', 'Finanzas', 'Educación', 'Ingeniería']

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 border border-blue-200">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Casos de Éxito y Knowledge Base</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Blog SmartPrompt Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Casos de estudio reales, técnicas avanzadas de Prompt Engineering y análisis profundos 
              de transformaciones empresariales con GPTs personalizados.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Artículo Destacado
            </h2>
          </div>

          <Card className="overflow-hidden border-2 border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-64 lg:h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-blue-600">{featuredPost.category}</Badge>
                  <Badge variant="secondary">{featuredPost.sector}</Badge>
                </div>
                <CardTitle className="text-2xl lg:text-3xl mb-4">{featuredPost.title}</CardTitle>
                <CardDescription className="text-lg mb-6">{featuredPost.excerpt}</CardDescription>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime} lectura</span>
                  </div>
                  <span>{featuredPost.date}</span>
                </div>

                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Leer Caso Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Todos los Artículos
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Aprende de casos reales y domina las técnicas más avanzadas de IA personalizada
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className={post.featured ? "bg-blue-600" : "bg-gray-600"}>
                      {post.category}
                    </Badge>
                    <Badge variant="secondary">{post.sector}</Badge>
                  </div>
                  
                  <CardTitle className="text-lg mb-3 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>

                  <Button variant="outline" className="w-full hover:bg-blue-50 hover:border-blue-300">
                    Leer Artículo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Mantente al Día con las Últimas Innovaciones
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Recibe casos de estudio exclusivos, técnicas avanzadas de Prompt Engineering y 
                análisis de tendencias en IA personalizada directamente en tu inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="tu@empresa.com"
                  className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/90 placeholder:text-gray-500"
                />
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50 px-8">
                  Suscribirse
                </Button>
              </div>
              
              <p className="text-blue-200 text-sm mt-4">
                Únete a 2,500+ profesionales que ya reciben nuestros insights semanales
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recursos Adicionales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="mb-4">Calculadora ROI</CardTitle>
                <CardDescription className="mb-6">
                  Estima el impacto financiero de un GPT personalizado en tu sector específico
                </CardDescription>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link to="/roi-calculator">Calcular ROI</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-emerald-100">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <CardTitle className="mb-4">Demo Interactivo</CardTitle>
                <CardDescription className="mb-6">
                  Experimenta cómo funciona un GPT personalizado con ejemplos de tu sector
                </CardDescription>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link to="/demo">Probar Demo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-violet-100">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="mb-4">Consulta Gratuita</CardTitle>
                <CardDescription className="mb-6">
                  Agenda 60 minutos con nuestro fundador para analizar tu caso específico
                </CardDescription>
                <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Link to="/contact">Agendar Consulta</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
