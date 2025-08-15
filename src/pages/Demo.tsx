/**
 * Demo interactivo de GPT personalizado para SmartPrompt Solutions
 * Simulador que muestra diferentes prompts especializados en acción
 */
import { useState } from 'react'
import { Link } from 'react-router'
import { Play, Send, Sparkles, ArrowRight, Brain, MessageSquare, Zap, Settings } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Textarea } from '../components/ui/textarea'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

const demoScenarios = [
  {
    id: 'legal',
    name: 'Legal - Análisis de Contrato',
    sector: 'Legal',
    emoji: '📄⚖️',
    prompt: 'Actúa como un especialista en derecho comercial. Analiza el siguiente contrato y identifica: 1) Cláusulas potencialmente problemáticas, 2) Sugerencias de mejora, 3) Precedentes jurisprudenciales relevantes.',
    input: 'CONTRATO DE PRESTACIÓN DE SERVICIOS\n\nPRIMERA.- OBJETO: El PROVEEDOR se compromete a desarrollar una aplicación móvil según las especificaciones técnicas que se adjuntan como Anexo I.\n\nSEGUNDA.- PRECIO: El precio total del servicio será de $50,000 USD, pagaderos en tres cuotas iguales.\n\nTERCERA.- PLAZO: El plazo de entrega será de 6 meses contados a partir de la firma del presente contrato.\n\nCUARTA.- PROPIEDAD INTELECTUAL: Todos los derechos de propiedad intelectual del software desarrollado pertenecerán al CLIENTE.',
    output: '## ANÁLISIS DE CONTRATO - PRESTACIÓN DE SERVICIOS\n\n### 🚨 CLÁUSULAS POTENCIALMENTE PROBLEMÁTICAS:\n\n1. **Especificaciones Técnicas Vagas (Cláusula Primera)**\n   - **Problema:** Referencias genéricas a "Anexo I" sin detalles específicos\n   - **Riesgo:** Disputas sobre alcance y funcionalidades\n\n2. **Ausencia de Condiciones de Pago (Cláusula Segunda)**\n   - **Problema:** No especifica fechas de pago ni condiciones\n   - **Riesgo:** Problemas de flujo de caja para el proveedor\n\n3. **Plazo Sin Penalizaciones (Cláusula Tercera)**\n   - **Problema:** No establece consecuencias por retrasos\n   - **Riesgo:** Incumplimiento sin consecuencias\n\n### 📋 SUGERENCIAS DE MEJORA:\n\n- **Agregar cláusula de hitos:** Definir entregables específicos con fechas\n- **Incluir garantías:** Período de soporte post-entrega\n- **Especificar responsabilidades:** Obligaciones de cada parte\n- **Condiciones de terminación:** Causas y procedimientos\n\n### ⚖️ PRECEDENTES JURISPRUDENCIALES:\n\n- **Caso Martinez vs TechCorp (2023):** Importancia de especificaciones detalladas\n- **Sentencia comercial 547/2022:** Validez de contratos con IP predefinida\n\n**Recomendación:** Revisar y ampliar cláusulas antes de la firma.'
  },
  {
    id: 'marketing',
    name: 'Marketing - Campaña Social Media',
    sector: 'Marketing',
    emoji: '💬📈',
    prompt: 'Como especialista en marketing digital para una marca tecnológica innovadora, crea contenido que mantenga un tono profesional pero accesible. Incluye: 1) Hook atractivo, 2) Valor agregado, 3) Call-to-action específico.',
    input: 'Producto: Software de automatización empresarial\nTarget: CEOs y directores de medianas empresas\nObjetivo: Generar leads cualificados\nPlataforma: LinkedIn\nTono: Profesional, confiable, orientado a resultados',
    output: '## 🚀 ¿Tu empresa pierde 40% de productividad en tareas repetitivas?\n\n**Los números no mienten:** Las medianas empresas dedican 16 horas semanales a procesos que podrían automatizarse.\n\n### 💡 **Mientras tu competencia aún hace todo manual, empresas inteligentes ya están:**\n\n✅ Automatizando reportes financieros → **65% menos tiempo**  \n✅ Optimizando flujos de aprobación → **48% más agilidad**  \n✅ Integrando sistemas obsoletos → **$180K ahorro anual**  \n\n### 📊 **Caso Real:** MediCorp redujo sus costos operativos en 45% en solo 3 meses\n\n*"Recuperamos 2 días completos por semana que ahora invertimos en estrategia y crecimiento"* - Ana García, CEO MediCorp\n\n### 🎯 **¿Listo para la transformación?**\n\n**Agenda tu diagnóstico gratuito de automatización** (valorado en $2,500)\n👆 Identifica exactamente dónde estás perdiendo dinero\n\n**[RESERVAR DIAGNÓSTICO GRATUITO]**\n\n#AutomatizaciónEmpresarial #ProductividadCEO #TransformaciónDigital\n\n---\n*¿Cuál es el proceso más tedioso en tu empresa? 👇 Compártelo en comentarios*'
  },
  {
    id: 'health',
    name: 'Salud - Informe Médico',
    sector: 'Salud',
    emoji: '📋🏥',
    prompt: 'Como asistente médico especializado, genera un informe estructurado basado en los síntomas y examen físico proporcionados. Incluye: 1) Resumen ejecutivo, 2) Impresión diagnóstica, 3) Plan de tratamiento, 4) Recomendaciones de seguimiento.',
    input: 'Paciente: Mujer, 45 años\nSíntomas: Fatiga crónica (3 meses), dolores articulares, dificultad para concentrarse\nExamen físico: Tensión arterial 140/85, frecuencia cardíaca 88 lpm, temperatura 36.8°C\nAntecedentes: Hipotiroidismo familiar, estrés laboral elevado\nLaboratorios pendientes: TSH, T4 libre, anticuerpos tiroideos',
    output: '# INFORME MÉDICO\n\n**Paciente:** [Nombre] | **Edad:** 45 años | **Sexo:** Femenino  \n**Fecha:** [Fecha actual] | **Médico:** [Nombre del médico]\n\n---\n\n## 📋 RESUMEN EJECUTIVO\n\nPaciente femenina de 45 años que presenta cuadro de **3 meses de evolución** caracterizado por:\n- Astenia y adinamia progresiva\n- Artralgias generalizadas\n- Alteraciones cognitivas (concentración)\n- Signos vitales: TA 140/85 mmHg, FC 88 lpm, T° 36.8°C\n\n## 🔍 IMPRESIÓN DIAGNÓSTICA\n\n### Diagnóstico Principal (Probable):\n**Hipotiroidismo Subclínico vs. Manifiesto** (Z03.89)\n\n### Diagnósticos Diferenciales:\n1. Síndrome de fatiga crónica\n2. Artritis reumatoide temprana\n3. Trastorno adaptativo con síntomas mixtos\n4. Hipertensión arterial estadio 1\n\n### Fundamentos:\n- **Antecedentes familiares** positivos para patología tiroidea\n- **Sintomatología clásica** de hipofunción tiroidea\n- **Contexto de estrés** como posible factor desencadenante\n\n## 📝 PLAN DE TRATAMIENTO\n\n### Estudios Complementarios (URGENTE):\n✅ **TSH, T4 libre, T3 libre**  \n✅ **Anti-TPO, Anti-tiroglobulina**  \n✅ **Hemograma completo, VSG, PCR**  \n✅ **Perfil lipídico, glucemia en ayunas**\n\n### Medidas Inmediatas:\n- **Manejo sintomático:** Ibuprofeno 400mg c/8h si dolor articular\n- **Modificaciones estilo de vida:** Técnicas de manejo de estrés\n- **Monitoreo tensional:** Control semanal de presión arterial\n\n## 🔄 SEGUIMIENTO\n\n### Control en **2 semanas** con resultados de laboratorio:\n- Evaluación de función tiroidea\n- Decisión terapéutica según TSH/T4L\n- Posible inicio de levotiroxina si se confirma hipotiroidismo\n\n### Signos de Alarma (retorno inmediato):\n- Dolor torácico o palpitaciones\n- Disnea progresiva\n- Alteraciones neurológicas severas\n- Edema facial o extremidades\n\n---\n\n**Pronóstico:** Favorable con tratamiento adecuado  \n**Próxima cita:** [Fecha] | **Médico tratante:** [Nombre]'
  },
  {
    id: 'finance',
    name: 'Finanzas - Análisis de Riesgo',
    sector: 'Finanzas',
    emoji: '📊💼',
    prompt: 'Como analista financiero senior, evalúa el riesgo crediticio considerando los estados financieros, sector de la empresa y contexto macroeconómico. Proporciona: 1) Score de riesgo, 2) Factores críticos, 3) Recomendaciones, 4) Monitoreo sugerido.',
    input: 'Empresa: TechStart Solutions\nSector: Software empresarial\nIngresos anuales: $2.5M (crecimiento 35% anual)\nEBITDA: $450K (18% margen)\nDeuda total: $800K\nFlijo de caja libre: $320K\nAños en operación: 3\nSolicitud: Línea de crédito $500K',
    output: '# ANÁLISIS DE RIESGO CREDITICIO\n\n**Empresa:** TechStart Solutions | **Fecha:** [Fecha actual]  \n**Analista:** [Nombre] | **Solicitud:** Línea de crédito $500K\n\n---\n\n## 🎯 SCORE DE RIESGO: **B+ (RIESGO MODERADO)**\n\n**Puntuación:** 72/100 | **Probabilidad de default:** 8.5% | **Spread sugerido:** +280 bp\n\n## 📊 ANÁLISIS FINANCIERO\n\n### Fortalezas Identificadas ✅\n- **Crecimiento robusto:** 35% anual (vs. 12% promedio sector)\n- **Rentabilidad saludable:** EBITDA 18% (vs. 15% promedio)\n- **Sector resiliente:** Software empresarial en expansión\n- **Flujo de caja positivo:** $320K FCF annual\n- **Gestión eficiente:** Ratio ingresos/empleado superior\n\n### Debilidades Críticas ⚠️\n- **Empresa joven:** Solo 3 años operando (riesgo de supervivencia)\n- **Apalancamiento elevado:** Deuda/EBITDA = 1.78x (límite recomendado 1.5x)\n- **Dependencia sectorial:** Concentración en un nicho específico\n- **Falta de historial crediticio:** Primera solicitud formal\n\n## 🔍 FACTORES CRÍTICOS DE RIESGO\n\n### 1. **Riesgo de Mercado (Alto)**\n- Sector tecnológico volátil\n- Competencia de grandes players (Microsoft, Salesforce)\n- Ciclos económicos pueden afectar inversión IT empresarial\n\n### 2. **Riesgo Operacional (Moderado)**\n- Dependencia de fundadores clave\n- Necesidad de inversión continua en I+D\n- Riesgo de obsolescencia tecnológica\n\n### 3. **Riesgo Financiero (Moderado-Alto)**\n- Alto ratio de endeudamiento\n- Necesidad de capital de trabajo creciente\n- Posible dilución si requiere equity adicional\n\n## 📋 RECOMENDACIONES\n\n### ✅ **APROBACIÓN CONDICIONADA**\n\n**Línea de crédito aprobada:** $350K (70% de lo solicitado)\n\n### Condiciones Sugeridas:\n1. **Garantías:** 150% cobertura en cuentas por cobrar\n2. **Covenants financieros:**\n   - EBITDA mínimo trimestral: $100K\n   - Ratio deuda/EBITDA < 2.0x\n   - FCF mínimo anual: $200K\n3. **Reporting:** Estados financieros mensuales\n4. **Tasa:** Prime + 2.8% (ajustable según performance)\n\n### 🎯 **ESTRUCTURA RECOMENDADA**\n- **Línea revolvente:** $250K para capital de trabajo\n- **Term loan:** $100K para equipment/software\n- **Plazo:** 24 meses con opción a renovación\n- **Comisión apertura:** 1.5%\n\n## 📈 MONITOREO CONTINUO\n\n### Revisiones Trimestrales:\n- [ ] Performance vs. plan de negocio\n- [ ] Métricas operacionales (CAC, LTV, churn)\n- [ ] Análisis competitivo y posición de mercado\n- [ ] Cumplimiento de covenants\n\n### Alertas Tempranas:\n- Reducción >15% en ingresos trimestrales\n- Pérdida de clientes clave (>20% ingresos)\n- Entrada de nuevos competidores directos\n- Cambios en regulación del sector\n\n### Próxima Revisión Completa: **6 meses**\n\n---\n\n**Conclusión:** Empresa prometedora con fundamentales sólidos pero requiere monitoreo estrecho debido a su juventud y sector volátil. La estructura propuesta balancea el apetito de riesgo con potencial de crecimiento.\n\n**Aprobación requerida:** Comité de Crédito Senior'
  }
]

const features = [
  {
    icon: Brain,
    title: 'Prompt Engineering Avanzado',
    description: 'Cada respuesta utiliza técnicas propietarias adaptadas al contexto profesional específico'
  },
  {
    icon: Zap,
    title: 'Velocidad Enterprise',
    description: 'Procesamiento optimizado para entregar resultados en segundos, no minutos'
  },
  {
    icon: Settings,
    title: 'Personalización Completa',
    description: 'Adaptado a tu terminología, procesos y estándares de calidad específicos'
  }
]

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('legal')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [customInput, setCustomInput] = useState('')

  const currentDemo = demoScenarios.find(demo => demo.id === selectedDemo) || demoScenarios[0]

  const handleGenerate = () => {
    setIsGenerating(true)
    setShowOutput(false)
    
    // Simulate processing time
    setTimeout(() => {
      setIsGenerating(false)
      setShowOutput(true)
    }, 3000)
  }

  const handleTryCustom = () => {
    if (!customInput.trim()) return
    handleGenerate()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 border border-blue-200">
                <Play className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Demo Interactivo en Vivo</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Experimenta un GPT Personalizado
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prueba en tiempo real cómo nuestros GPTs especializados transforman tareas complejas 
              de tu sector en resultados profesionales precisos y consistentes.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Demo por Sectores Profesionales
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Selecciona tu sector y observa cómo un GPT personalizado maneja tareas específicas de tu profesión
            </p>
          </div>

          <Tabs value={selectedDemo} onValueChange={setSelectedDemo} className="space-y-8">
            {/* Sector Selection */}
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1">
              {demoScenarios.map((demo) => (
                <TabsTrigger 
                  key={demo.id} 
                  value={demo.id}
                  className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <span className="text-2xl">{demo.emoji}</span>
                  <span className="text-xs font-medium">{demo.sector}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Demo Content */}
            {demoScenarios.map((demo) => (
              <TabsContent key={demo.id} value={demo.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Input Section */}
                  <div>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{demo.emoji}</span>
                          <div>
                            <CardTitle className="text-xl">{demo.name}</CardTitle>
                            <CardDescription>Ejemplo real de caso de uso</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* System Prompt */}
                        <div>
                          <Badge variant="secondary" className="mb-3">System Prompt Especializado</Badge>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-blue-900 text-sm font-mono">{demo.prompt}</p>
                          </div>
                        </div>

                        {/* Input Data */}
                        <div>
                          <Badge variant="secondary" className="mb-3">Datos de Entrada</Badge>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <pre className="text-gray-800 text-sm whitespace-pre-wrap">{demo.input}</pre>
                          </div>
                        </div>

                        <Button 
                          onClick={handleGenerate} 
                          disabled={isGenerating}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          {isGenerating ? (
                            <>
                              <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                              Procesando con IA...
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Ejecutar Demo
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Output Section */}
                  <div>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MessageSquare className="mr-2 h-5 w-5" />
                          Resultado del GPT Personalizado
                        </CardTitle>
                        <CardDescription>Salida procesada y estructurada</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isGenerating ? (
                          <div className="flex flex-col items-center justify-center h-64 space-y-4">
                            <Sparkles className="h-12 w-12 text-blue-600 animate-pulse" />
                            <p className="text-gray-600">Analizando con técnicas avanzadas de Prompt Engineering...</p>
                            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-600 animate-pulse"></div>
                            </div>
                          </div>
                        ) : showOutput ? (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <Badge className="bg-green-100 text-green-800 mb-4">✨ Generado con IA</Badge>
                            <div className="prose prose-sm max-w-none">
                              <pre className="whitespace-pre-wrap text-sm text-gray-800">{demo.output}</pre>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-64 text-gray-400">
                            <div className="text-center">
                              <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                              <p>Ejecuta el demo para ver los resultados</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Custom Input Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Prueba con tu Propio Caso
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Describe una tarea específica de tu sector y observa cómo un GPT personalizado la manejaría
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">Tu Caso de Uso</Label>
                  <Textarea
                    placeholder="Ejemplo: Necesito analizar un contrato de arrendamiento comercial de 15 páginas, identificar cláusulas de riesgo y sugerir modificaciones específicas para proteger los intereses del arrendatario..."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    rows={6}
                    className="mt-3"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleTryCustom}
                    disabled={!customInput.trim() || isGenerating}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Probar Mi Caso
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/contact">
                      Solicitar Demo Personalizado
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Nota:</strong> Este demo utiliza una versión simplificada. Los GPTs reales incluyen 
                    tu terminología específica, procesos internos y estándares de calidad personalizados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Impresionado con los Resultados?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Este es solo el comienzo. Un GPT completamente personalizado para tu empresa incluye 
            tu conocimiento específico, procesos y estándares de calidad.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link to="/roi-calculator">
                Ver ROI Esperado
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Solicitar GPT Personalizado</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
