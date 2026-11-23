import { useEffect, useRef } from 'react'

import { fireConfetti } from '@/lib/confetti'

export default function HomePage() {
  const hasFiredConfetti = useRef(false)

  useEffect(() => {
    if (hasFiredConfetti.current) {
      return
    }

    hasFiredConfetti.current = true
    fireConfetti()
  }, [])

  return (
    <section className="relative -mx-6 -my-10 flex flex-1 flex-col items-center justify-center self-stretch overflow-hidden bg-slate-950 px-6 py-16 text-center text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-32 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
      />

      <div className="relative flex max-w-xl flex-col items-center gap-5">
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-slate-300 uppercase">
          dev-ia
        </span>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Em Construção</h1>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          Este projeto é um clone do projeto tabnews do Filipe Deschamps feito com IA e agentes
        </p>
      </div>
    </section>
  )
}
