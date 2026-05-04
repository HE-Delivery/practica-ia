import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-primary shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          {import.meta.env.VITE_APP_NAME}
        </Link>
        
        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
            <>
              <span className="text-white">Hola, {user?.name || 'Usuario'}</span>
              <Link 
                to="/profile" 
                className="text-white hover:bg-blue-600 px-3 py-2 rounded"
              >
                Perfil
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-white hover:bg-blue-600 px-3 py-2 rounded"
              >
                Iniciar Sesión
              </Link>
              <Link 
                to="/register" 
                className="bg-secondary text-white hover:bg-gray-800 px-4 py-2 rounded"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
