import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
        <Link 
          to="/" 
          className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Volver al Inicio
        </Link>
      </Card>
    </div>
  )
}
