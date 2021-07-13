import Link from 'next/link'

const pages = [
  { id: 1, name: 'Home', href: '/' },
  { id: 1, name: 'Resume', href: '/resume' },
  { id: 1, name: 'Contact', href: '/' }
]

function Navigation() {
  return (
    <header className="flex flex-col md:flex-row justify-between align-center">
      <h1 className="text-center text-2xl font-bold">Kevin Zyskowski</h1>
      <nav className="flex flex-row justify-center space-x-6">
        {pages.map(page => (
          <Link key={page.id} href={page.href}>
            <a className="p-2 hover-hover:hover:text-blue-500 font-medium">{page.name}</a>
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navigation
