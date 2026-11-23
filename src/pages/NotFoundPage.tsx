import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="flex w-full max-w-2xl flex-1 flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-extrabold text-ink sm:text-3xl">Página não encontrada</h1>
      <p className="mt-4 text-base text-muted">O endereço acessado não existe neste projeto.</p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:brightness-110"
      >
        Voltar para o início
      </Link>
    </section>
  )
}
