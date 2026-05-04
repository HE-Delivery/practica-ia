export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold mb-2">{import.meta.env.VITE_APP_NAME}</h3>
            <p className="text-gray-400">Proyecto de práctica con React y Node.js</p>
          </div>
          <div className="text-right text-gray-400 text-sm">
            <p>© 2026 Todos los derechos reservados</p>
            <p>Desarrollado con ❤️ usando React y Express</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
