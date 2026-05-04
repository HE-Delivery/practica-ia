import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { userService } from '../services/userService'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Profile() {
  const { user, isAuthenticated } = useAuth()
  const [profile, setProfile] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/login'
      return
    }

    loadProfile()
  }, [isAuthenticated])

  const loadProfile = async () => {
    try {
      setLoading(true)
      const response = await userService.getProfile()
      setProfile(response.data)
      setName(response.data.name)
      setEmail(response.data.email)
      setError(null)
    } catch (err) {
      setError('Error al cargar el perfil')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await userService.updateProfile({ name, email })
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError('Error al actualizar el perfil')
    }
  }

  if (!isAuthenticated) {
    return null
  }

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-error rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-100 text-success rounded">
            ✓ Perfil actualizado exitosamente
          </div>
        )}

        {profile && (
          <form onSubmit={handleUpdate}>
            <div className="mb-4 p-4 bg-gray-100 rounded">
              <p className="text-sm text-gray-600">ID</p>
              <p className="font-mono text-sm">{profile._id}</p>
            </div>

            <Input
              type="text"
              label="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="mb-4 p-4 bg-gray-100 rounded">
              <p className="text-sm text-gray-600">Rol</p>
              <p className="font-medium capitalize">{profile.role}</p>
            </div>

            <div className="mb-4 p-4 bg-gray-100 rounded">
              <p className="text-sm text-gray-600">Creado</p>
              <p className="text-sm">{new Date(profile.createdAt).toLocaleDateString()}</p>
            </div>

            <div className="flex gap-4">
              <Button type="submit" variant="primary">
                Guardar Cambios
              </Button>
              <Button type="button" variant="error" onClick={() => {
                if (window.confirm('¿Estás seguro de eliminar tu cuenta?')) {
                  userService.deleteProfile().then(() => {
                    window.location.href = '/'
                  })
                }
              }}>
                Eliminar Cuenta
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  )
}
