import Navigation from '../navigation'

function Layout({ children }) {
  return (
    <div className="container mx-auto p-4">
      <Navigation />
      {children}
      <p className="mt-10 text-center text-gray-400">
        Copyright © Kevin Zyskowski 2021
      </p>
    </div>
  )
}

export default Layout
