import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar will go here */}
      <header className="h-16 border-b flex items-center px-6">
        Navbar
      </header>

      {/* Page content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer will go here */}
      <footer className="h-16 border-t flex items-center px-6">
        Footer
      </footer>
    </div>
  )
}

export default RootLayout