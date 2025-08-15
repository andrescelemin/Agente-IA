/**
 * Aplicación principal con sistema de enrutamiento para SmartPrompt Solutions
 * Especializada en GPTs personalizados para entornos profesionales específicos
 */
import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import AboutPage from './pages/About'
import SolutionsPage from './pages/Solutions'
import ContactPage from './pages/Contact'
import ROICalculatorPage from './pages/ROICalculator'
import DemoPage from './pages/Demo'
import BlogPage from './pages/Blog'
import TestimonialsPage from './pages/Testimonials'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/roi-calculator" element={<ROICalculatorPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </HashRouter>
  )
}
