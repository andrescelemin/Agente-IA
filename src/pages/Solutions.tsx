/**
 * Página de soluciones por sector para SmartPrompt Solutions
 * Casos de uso específicos de GPTs personalizados por industria
 */
import { Link } from 'react-router'
import { ArrowRight, Scale, Megaphone, Heart, Building, GraduationCap, Ruler } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

const industries = [
  {
    id: 'legal',
    name: 'Sector Legal',
    icon: Scale,
    emoji: '📄⚖️',
    description: 'Automatización de documentos legales y asistencia en investigación jurisprudencial',
    color: 'from-amber-500 to-orange-600',
    solutions: [
      'Automatización de redacción de documentos legales',
      'Análisis y síntesis de jurisprudencia',
      'Generación de briefs y memorandos',
      'Revisión automática de contratos',
      'Investigación legal asistida por IA',
      'Generación de argumentos legales'
    ],
    caseStudy: {
      client: 'Bufete Legal Martínez & Asociados',
      challenge: 'Reducir tiempo en redacción de contratos y análisis jurisprudencial',
      solution: 'GPT especializado en derecho comercial con base de conocimiento jurisprudencial',
      results: [
        '80% reducción en tiempo de redacción de contratos',
        '65% mejora en precisión de citas jurisprudenciales',
        '$150K ahorro anual en horas de investigación',
        '95% satisfacción del equipo legal'
      ]
    },
    prompt_example: `Actúa como un especialista en derecho comercial. Analiza el siguiente contrato y identifica: 1) Cláusulas potencialmente problemáticas, 2) Sugerencias de mejora, 3) Precedentes jurisprudenciales relevantes. Formato: análisis estructurado con referencias legales.`
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    icon: Megaphone,
    emoji: '💬📈',
    description: 'Generación de contenido adaptado a la voz de marca y optimización de campañas',
    color: 'from-pink-500 to-rose-600',
    solutions: [
      'Generación de contenido adaptado a voz de marca',
      'Optimización de campañas publicitarias',
      'Análisis predictivo de audiencias',
      'Creación de copies para diferentes canales',
      'Automatización de respuestas en redes sociales',
      'Personalización de mensajes por segmento'
    ],
    caseStudy: {
      client: 'Agencia Digital CreativeFlow',
      challenge: 'Mantener consistencia de voz de marca en múltiples clientes y canales',
      solution: 'GPTs específicos por cliente con guías de estilo y tono integradas',
      results: [
        '70% aumento en velocidad de producción de contenido',
        '45% mejora en engagement rates',
        '60% reducción en tiempo de revisión',
        '12 clientes gestionados simultáneamente'
      ]
    },
    prompt_example: `Como especialista en marketing digital para [MARCA], crea contenido que mantenga el tono [JOVIAL/PROFESIONAL/TÉCNICO]. Incluye: 1) Hook atractivo, 2) Valor agregado, 3) Call-to-action específico. Formato: post optimizado para [PLATAFORMA] con hashtags relevantes.`
  },
  {
    id: 'health',
    name: 'Sector Salud',
    icon: Heart,
    emoji: '📋🏥',
    description: 'Creación de informes médicos y gestión eficiente de pacientes',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      'Generación de informes médicos estructurados',
      'Resúmenes de investigaciones médicas',
      'Gestión de recordatorios de citas',
      'Análisis de síntomas y triaje inicial',
      'Traducción de terminología médica',
      'Protocolos de atención personalizados'
    ],
    caseStudy: {
      client: 'Clínica Integral Salud Plus',
      challenge: 'Agilizar documentación médica y mejorar seguimiento de pacientes',
      solution: 'GPT médico con terminología especializada y protocolos de la clínica',
      results: [
        '50% reducción en tiempo de documentación',
        '40% mejora en seguimiento post-consulta',
        '90% precisión en terminología médica',  
        '35% aumento en satisfacción del paciente'
      ]
    },
    prompt_example: `Como asistente médico especializado, genera un informe estructurado basado en: [SÍNTOMAS], [EXAMEN FÍSICO], [ANTECEDENTES]. Incluye: 1) Resumen ejecutivo, 2) Impresión diagnóstica, 3) Plan de tratamiento, 4) Recomendaciones de seguimiento. Usa terminología médica precisa.`
  },
  {
    id: 'finance',
    name: 'Sector Financiero',
    icon: Building,
    emoji: '📊💼',
    description: 'Análisis y reportes financieros automáticos, gestión de riesgos',
    color: 'from-blue-500 to-indigo-600',
    solutions: [
      'Análisis y reportes financieros automáticos',
      'Gestión de riesgos y cumplimiento normativo',
      'Evaluación crediticia asistida',
      'Análisis de tendencias de mercado',
      'Generación de propuestas de inversión',
      'Automatización de procesos de auditoría'
    ],
    caseStudy: {
      client: 'Corporación Financiera Andina',
      challenge: 'Automatizar análisis de riesgo crediticio y reportes regulatorios',
      solution: 'GPT financiero con modelos de riesgo y marcos regulatorios actualizados',
      results: [
        '60% reducción en tiempo de análisis crediticio',
        '85% precisión en evaluación de riesgos',
        '$2M ahorro anual en procesos manuales',
        '100% cumplimiento normativo'
      ]
    },
    prompt_example: `Como analista financiero senior, evalúa el riesgo crediticio de [EMPRESA] considerando: [ESTADOS FINANCIEROS], [SECTOR], [MACROECONOMÍA]. Proporciona: 1) Score de riesgo, 2) Factores críticos, 3) Recomendaciones, 4) Monitoreo sugerido. Incluye análisis cuantitativo y cualitativo.`
  },
  {
    id: 'education',
    name: 'Sector Educativo',
    icon: GraduationCap,
    emoji: '📚🎓',
    description: 'Generación de material educativo y asistencia en evaluación',
    color: 'from-purple-500 to-violet-600',
    solutions: [
      'Generación de material educativo personalizado',
      'Creación de planes de lecciones adaptivos',
      'Asistencia en evaluación de tareas',
      'Retroalimentación automatizada',
      'Análisis de rendimiento estudiantil',
      'Creación de exámenes y ejercicios'
    ],
    caseStudy: {
      client: 'Instituto Tecnológico Futuro',
      challenge: 'Personalizar material educativo para diferentes niveles de aprendizaje',
      solution: 'GPT educativo con pedagogías adaptativas y contenido por competencias',
      results: [
        '75% mejora en engagement estudiantil',
        '50% reducción en tiempo de preparación',
        '40% aumento en tasas de aprobación',
        '90% satisfacción docente'
      ]
    },
    prompt_example: `Como especialista pedagógico en [MATERIA], crea material para nivel [BÁSICO/INTERMEDIO/AVANZADO]. Incluye: 1) Objetivos de aprendizaje, 2) Contenido estructurado, 3) Actividades prácticas, 4) Criterios de evaluación. Adapta al estilo de aprendizaje [VISUAL/AUDITIVO/KINESTÉSICO].`
  },
  {
    id: 'engineering',
    name: 'Ingeniería y Arquitectura',
    icon: Ruler,
    emoji: '📐🏗️',
    description: 'Automatización de documentación técnica y análisis predictivo',
    color: 'from-gray-600 to-slate-700',
    solutions: [
      'Automatización de planos y documentos técnicos',
      'Análisis predictivo de proyectos',
      'Optimización de materiales y costos',
      'Generación de especificaciones técnicas',
      'Cálculos de ingeniería automatizados',
      'Reportes de inspección y calidad'
    ],
    caseStudy: {
      client: 'Constructora Ingeniería Avanzada',
      challenge: 'Agilizar documentación técnica y optimizar costos de materiales',
      solution: 'GPT técnico con estándares de construcción y bases de datos de materiales',
      results: [
        '65% reducción en tiempo de documentación',
        '30% optimización en costos de materiales',
        '95% precisión en especificaciones técnicas',
        '25% aceleración en entrega de proyectos'
      ]
    },
    prompt_example: `Como ingeniero especialista en [ÁREA], genera especificaciones técnicas para [PROYECTO]. Considera: [NORMATIVAS], [MATERIALES], [PRESUPUESTO]. Incluye: 1) Especificaciones detalladas, 2) Lista de materiales, 3) Cronograma, 4) Consideraciones de seguridad. Formato técnico profesional.`
  }
]

const methodology = [
  {
    step: '1',
    title: 'Análisis Sectorial',
    description: 'Estudio profundo del lenguaje, procesos y necesidades específicas del sector'
  },
  {
    step: '2', 
    title: 'Diseño de Prompts',
    description: 'Creación de prompts especializados con técnicas avanzadas de ingeniería'
  },
  {
    step: '3',
    title: 'Entrenamiento Específico',
    description: 'Configuración y ajuste del modelo con datos y contexto del cliente'
  },
  {
    step: '4',
    title: 'Implementación',
    description: 'Integración en flujos de trabajo existentes con interfaces intuitivas'
  },
  {
    step: '5',
    title: 'Optimización',
    description: 'Monitoreo continuo y refinamiento basado en feedback y rendimiento'
  }
]

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Soluciones por Sector Profesional
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              GPTs personalizados diseñados específicamente para las necesidades únicas de cada industria, 
              con casos de éxito comprobados y resultados medibles
            </p>
          </div>
        </div>
      </section>

      {/* Industries Tabs */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expertise Sectorial Especializado
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cada sector tiene su propio lenguaje, procesos y desafíos. Nuestros GPTs están diseñados para comprenderlos perfectamente.
            </p>
          </div>

          <Tabs defaultValue="legal" className="mt-16">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {industries.map((industry) => (
                <TabsTrigger 
                  key={industry.id} 
                  value={industry.id}
                  className="flex flex-col items-center gap-1 py-3"
                >
                  <span className="text-lg">{industry.emoji}</span>
                  <span className="text-xs font-medium hidden sm:block">{industry.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Solutions & Case Study */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${industry.color}`}>
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                        <p className="text-gray-600">{industry.description}</p>
                      </div>
                    </div>

                    <Card className="mb-8">
                      <CardHeader>
                        <CardTitle>Soluciones Específicas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Case Study */}
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-800">Caso de Éxito: {industry.caseStudy.client}</CardTitle>
                        <CardDescription className="text-green-600">
                          <strong>Desafío:</strong> {industry.caseStudy.challenge}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-700 mb-4">
                          <strong>Solución:</strong> {industry.caseStudy.solution}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {industry.caseStudy.results.map((result, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 border border-green-200">
                              <p className="text-green-800 text-sm font-medium">{result}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Prompt Example */}
                  <div>
                    <Card className="h-fit">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <span>Ejemplo de Prompt Especializado</span>
                        </CardTitle>
                        <CardDescription>
                          Muestra de cómo estructuramos prompts específicos para {industry.name.toLowerCase()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                          <pre className="whitespace-pre-wrap">{industry.prompt_example}</pre>
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Características del Prompt:</h4>
                          <ul className="text-blue-800 text-sm space-y-1">
                            <li>• Terminología específica del sector</li>
                            <li>• Estructura de salida personalizada</li>
                            <li>• Contexto profesional integrado</li>
                            <li>• Validaciones y estándares del sector</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-6 text-center">
                      <Button asChild className={`bg-gradient-to-r ${industry.color} text-white hover:opacity-90`}>
                        <Link to="/contact">
                          Solicitar GPT para {industry.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestra Metodología Especializada
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proceso refinado que garantiza GPTs perfectamente adaptados a cada contexto profesional
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {methodology.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold">
                      {step.step}
                    </div>
                    {index < methodology.length - 1 && (
                      <div className="hidden md:block ml-4 flex-1 h-0.5 bg-gray-300"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-6">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resultados Comprobados Across Sectores
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Métricas reales de transformación en diferentes industrias profesionales
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-gray-600">Promedio de reducción en tiempo de tareas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Precisión en terminología especializada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Sectores profesionales transformados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">ROI</div>
              <div className="text-gray-600">Positivo en primer mes de implementación</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para Revolucionar tu Sector?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Cada profesión tiene sus particularidades. Creemos el GPT perfecto para la tuya.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link to="/contact">
                Solicitar Análisis Sectorial Gratuito
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
