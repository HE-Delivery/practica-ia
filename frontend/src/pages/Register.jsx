import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errors, setErrors] = useState({})
  const { register, loading } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})

    if (password !== passwordConfirm) {
      setErrors({ passwordConfirm: 'Las contraseñas no coinciden' })
      return
    }

    try {
      await register(name, email, password, passwordConfirm)
      navigate('/')
    } catch (error) {
      setErrors({ submit: error.message })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Registrarse</h1>
        
        {errors.submit && (
          <div className="mb-4 p-4 bg-red-100 text-error rounded">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Nombre"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            required
          />

          <Input
            type="email"
            label="Email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />

          <Input
            type="password"
            label="Contraseña"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />

          <Input
            type="password"
            label="Confirmar Contraseña"
            placeholder="••••••••"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={errors.passwordConfirm}
            required
          />

          <Button
            type="submit"
            className="w-full mt-6"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Registrarse'}
          </Button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-primary hover:underline font-medium">
            Inicia sesión aquí
          </a>
        </p>
      </Card>
    </div>
  )
}
