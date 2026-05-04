import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-8 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
