import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Início' },
  { to: '/alphabet', label: 'Alfabeto' },
] as const

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex w-full max-w-4xl items-center gap-6 px-6 py-4">
          <span className="text-lg font-extrabold tracking-tight text-brand">dev-ia</span>
          <ul className="flex items-center gap-4 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-muted'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center px-6 py-10">
        <Suspense
          fallback={
            <div role="status" className="flex flex-1 items-center justify-center py-16 text-muted">
              Carregando…
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
