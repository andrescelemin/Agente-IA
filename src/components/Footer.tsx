/**
 * Componente de pie de página para SmartPrompt Solutions
 * Especializada en GPTs personalizados y Prompt Engineering
 */
import { Link } from 'react-router'
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/products' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Soluciones', href: '/solutions' },
    { name: 'Contacto', href: '/contact' },
  ],
  social: [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">SmartPrompt</span>
                <span className="text-sm text-blue-400 font-medium">Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 text-base">
              Revolucionamos empresas con GPTs personalizados y técnicas avanzadas de Prompt Engineering, 
              creando soluciones de IA adaptadas específicamente a cada entorno profesional.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navegación</h3>
            <ul className="mt-4 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-base text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contacto</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@smartprompt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 SmartPrompt Solutions. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Transformando profesiones con IA personalizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
