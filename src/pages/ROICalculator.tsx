/**
 * Calculadora de ROI interactiva para SmartPrompt Solutions
 * Estima beneficios específicos por sector profesional
 */
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Calculator, TrendingUp, Clock, DollarSign, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Slider } from '../components/ui/slider'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const sectors = [
  {
    id: 'legal',
    name: 'Legal',
    emoji: '📄⚖️',
    avgHourlyRate: 150,
    timeReductionPercent: 70,
    precisionImprovement: 85,
    tasks: ['Redacción de contratos', 'Análisis jurisprudencial', 'Documentos legales', 'Investigación legal']
  },
  {
    id: 'marketing',
    name: 'Marketing',
    emoji: '💬📈',
    avgHourlyRate: 75,
    timeReductionPercent: 60,
    precisionImprovement: 45,
    tasks: ['Creación de contenido', 'Campañas publicitarias', 'Copy para diferentes canales', 'Análisis de audiencia']
  },
  {
    id: 'health',
    name: 'Salud',
    emoji: '📋🏥',
    avgHourlyRate: 120,
    timeReductionPercent: 50,
    precisionImprovement: 40,
    tasks: ['Informes médicos', 'Documentación clínica', 'Seguimiento de pacientes', 'Análisis de síntomas']
  },
  {
    id: 'finance',
    name: 'Finanzas',
    emoji: '📊💼',
    avgHourlyRate: 100,
    timeReductionPercent: 65,
    precisionImprovement: 75,
    tasks: ['Reportes financieros', 'Análisis de riesgo', 'Cumplimiento normativo', 'Evaluación crediticia']
  },
  {
    id: 'education',
    name: 'Educación',
    emoji: '📚🎓',
    avgHourlyRate: 50,
    timeReductionPercent: 55,
    precisionImprovement: 35,
    tasks: ['Material educativo', 'Planes de lecciones', 'Evaluación de tareas', 'Retroalimentación estudiantil']
  },
  {
    id: 'engineering',
    name: 'Ingeniería',
    emoji: '📐🏗️',
    avgHourlyRate: 85,
    timeReductionPercent: 45,
    precisionImprovement: 30,
    tasks: ['Documentación técnica', 'Especificaciones', 'Análisis predictivo', 'Reportes de inspección']
  }
]

export default function ROICalculatorPage() {
  const [selectedSector, setSelectedSector] = useState('')
  const [employees, setEmployees] = useState([10])
  const [hoursPerWeek, setHoursPerWeek] = useState([20])
  const [hourlyRate, setHourlyRate] = useState('')
  const [results, setResults] = useState<any>(null)

  const calculateROI = () => {
    if (!selectedSector) return

    const sector = sectors.find(s => s.id === selectedSector)!
    const effectiveRate = parseFloat(hourlyRate) || sector.avgHourlyRate
    
    const weeklyHours = employees[0] * hoursPerWeek[0]
    const monthlyHours = weeklyHours * 4.33
    const annualHours = monthlyHours * 12
    
    const timeSaved = annualHours * (sector.timeReductionPercent / 100)
    const costSavings = timeSaved * effectiveRate
    
    // Costo del servicio (estimado)
    const monthlyCost = employees[0] <= 5 ? 3000 : employees[0] <= 15 ? 8000 : 15000
    const annualCost = monthlyCost * 12
    
    const netBenefit = costSavings - annualCost
    const roiPercent = (netBenefit / annualCost) * 100
    const paybackMonths = annualCost / (costSavings / 12)

    setResults({
      sector: sector.name,
      timeSavedHours: Math.round(timeSaved),
      costSavings: Math.round(costSavings),
      annualCost,
      netBenefit: Math.round(netBenefit),
      roiPercent: Math.round(roiPercent),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      efficiencyGain: sector.timeReductionPercent,
      precisionImprovement: sector.precisionImprovement
    })
  }

  useEffect(() => {
    if (selectedSector) {
      calculateROI()
    }
  }, [selectedSector, employees, hoursPerWeek, hourlyRate])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 border border-blue-200">
                <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Calculadora de ROI Especializada</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Calcula el ROI de tu GPT Personalizado
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubre el impacto financiero específico que un GPT personalizado puede tener en tu sector. 
              Cálculos basados en datos reales de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
            
            {/* Input Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Parámetros de tu Empresa
              </h2>
              
              <div className="space-y-8">
                {/* Sector Selection */}
                <div>
                  <Label className="text-base font-semibold">Sector Profesional</Label>
                  <Select onValueChange={setSelectedSector}>
                    <SelectTrigger className="mt-3">
                      <SelectValue placeholder="Selecciona tu sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector.id} value={sector.id}>
                          <span className="flex items-center space-x-2">
                            <span>{sector.emoji}</span>
                            <span>{sector.name}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Employees */}
                <div>
                  <Label className="text-base font-semibold">
                    Número de Empleados: {employees[0]}
                  </Label>
                  <Slider
                    value={employees}
                    onValueChange={setEmployees}
                    max={100}
                    min={1}
                    step={1}
                    className="mt-3"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1</span>
                    <span>100+</span>
                  </div>
                </div>

                {/* Hours per Week */}
                <div>
                  <Label className="text-base font-semibold">
                    Horas por semana en tareas automatizables: {hoursPerWeek[0]}h
                  </Label>
                  <Slider
                    value={hoursPerWeek}
                    onValueChange={setHoursPerWeek}
                    max={40}
                    min={5}
                    step={5}
                    className="mt-3"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5h</span>
                    <span>40h+</span>
                  </div>
                </div>

                {/* Hourly Rate */}
                <div>
                  <Label htmlFor="hourlyRate" className="text-base font-semibold">
                    Tarifa por hora (USD) - Opcional
                  </Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    placeholder={selectedSector ? `Promedio del sector: $${sectors.find(s => s.id === selectedSector)?.avgHourlyRate}` : 'Ej: 100'}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="mt-3"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Si no especificas, usaremos el promedio de tu sector
                  </p>
                </div>

                {selectedSector && (
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-blue-900 mb-3">
                        Tareas automatizables en {sectors.find(s => s.id === selectedSector)?.name}:
                      </h3>
                      <ul className="space-y-2">
                        {sectors.find(s => s.id === selectedSector)?.tasks.map((task, index) => (
                          <li key={index} className="flex items-center space-x-2 text-blue-800 text-sm">
                            <CheckCircle className="h-4 w-4" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Proyección de Beneficios
              </h2>
              
              {results ? (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-6 text-center">
                        <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-800">
                          ${results.netBenefit.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600">Beneficio Neto Anual</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-blue-200 bg-blue-50">
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-800">
                          {results.roiPercent}%
                        </div>
                        <div className="text-sm text-blue-600">ROI Anual</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-purple-200 bg-purple-50">
                      <CardContent className="p-6 text-center">
                        <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-800">
                          {results.paybackMonths} meses
                        </div>
                        <div className="text-sm text-purple-600">Tiempo de Recuperación</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-orange-200 bg-orange-50">
                      <CardContent className="p-6 text-center">
                        <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-orange-800">
                          {results.timeSavedHours.toLocaleString()}h
                        </div>
                        <div className="text-sm text-orange-600">Horas Ahorradas/Año</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Detailed Breakdown */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Desglose Detallado</CardTitle>
                      <CardDescription>Análisis completo del impacto en tu sector</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Ahorro en costos anuales:</span>
                        <span className="font-semibold text-green-600">${results.costSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Inversión anual estimada:</span>
                        <span className="font-semibold text-red-600">-${results.annualCost.toLocaleString()}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Beneficio neto anual:</span>
                        <span className={results.netBenefit > 0 ? 'text-green-600' : 'text-red-600'}>
                          ${results.netBenefit.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 mt-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Beneficios Adicionales:</h4>
                        <ul className="space-y-1 text-blue-800 text-sm">
                          <li>• {results.efficiencyGain}% reducción en tiempo de tareas</li>
                          <li>• {results.precisionImprovement}% mejora en precisión</li>
                          <li>• Consistencia de calidad garantizada</li>
                          <li>• Disponibilidad 24/7 sin costos adicionales</li>
                          <li>• Escalabilidad inmediata</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="text-center space-y-4">
                    <p className="text-gray-600">
                      ¿Quieres validar estos números con un análisis personalizado?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Link to="/contact">
                          Solicitar Análisis Detallado
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        <Link to="/demo">Ver Demo Interactivo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <Card className="h-64 flex items-center justify-center">
                  <CardContent className="text-center">
                    <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Selecciona tu sector para ver la proyección de beneficios
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Metodología de Cálculo
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestros cálculos se basan en datos reales de +200 implementaciones exitosas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Análisis de Tiempo</h3>
                <p className="text-gray-600 text-sm">
                  Medimos el tiempo actual invertido en tareas automatizables y aplicamos los porcentajes de reducción observados por sector.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full p-3 w-fit mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Valoración Económica</h3>
                <p className="text-gray-600 text-sm">
                  Convertimos el tiempo ahorrado en valor monetario usando tarifas promedio del sector o las especificadas por el usuario.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full p-3 w-fit mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">ROI Conservador</h3>
                <p className="text-gray-600 text-sm">
                  Aplicamos estimaciones conservadoras para garantizar proyecciones realistas y alcanzables en la práctica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
