import { useAuth } from '../hooks/useAuth'
import Card from '../components/Card'

export default function Home() {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Practica IA</h1>
        <p className="text-xl text-gray-600 mb-6">
          Proyecto fullstack con React, Express, y MongoDB
        </p>
        
        {isAuthenticated ? (
          <div>
            <p className="text-lg mb-4">
              ¡Hola <span className="font-bold text-primary">{user?.name}</span>! 👋
            </p>
            <p className="text-gray-600">
              Accede a tu perfil para ver y actualizar tu información
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-600 mb-6">
              Inicia sesión o regístrate para comenzar
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="/login" 
                className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Iniciar Sesión
              </a>
              <a 
                href="/register" 
                className="bg-secondary text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Registrarse
              </a>
            </div>
          </div>
        )}
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-bold mb-3">🚀 Frontend React</h3>
          <p className="text-gray-600">
            Construido con React 18, Hooks, Context API y Tailwind CSS para una interfaz moderna y responsiva.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-3">⚙️ Backend Express</h3>
          <p className="text-gray-600">
            API REST con Node.js, Express, MongoDB y autenticación JWT para seguridad y escalabilidad.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-3">🔐 Autenticación JWT</h3>
          <p className="text-gray-600">
            Sistema seguro de autenticación con tokens JWT y encriptación bcryptjs.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-3">💾 Base de Datos</h3>
          <p className="text-gray-600">
            MongoDB con Mongoose para gestión flexible de datos y modelos bien definidos.
          </p>
        </Card>
      </div>
    </div>
  )
}
