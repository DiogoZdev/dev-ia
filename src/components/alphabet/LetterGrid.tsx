import { LETTERS, type Letter } from '@/data/alphabet'

type LetterGridProps = {
  selectedLetter: Letter | null
  hasSelection: boolean
  onSelectLetter: (letter: Letter) => void
  onClear: () => void
}

export default function LetterGrid({
  selectedLetter,
  hasSelection,
  onSelectLetter,
  onClear,
}: LetterGridProps) {
  return (
    <div className="grid w-full max-w-4xl grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-3">
      {LETTERS.map((letter) => {
        const isActive = selectedLetter === letter

        return (
          <button
            key={letter}
            type="button"
            onClick={() => onSelectLetter(letter)}
            aria-pressed={isActive}
            className={`rounded-xl py-4 text-3xl font-bold shadow-sm transition duration-100 hover:bg-brand-soft active:scale-95 sm:text-4xl ${
              isActive ? 'bg-brand text-white hover:bg-brand' : 'bg-white text-ink'
            }`}
          >
            {letter}
          </button>
        )
      })}

      <button
        type="button"
        onClick={onClear}
        disabled={!hasSelection}
        title="Limpar"
        aria-label="Limpar quadro de sílabas"
        className="flex items-center justify-center rounded-xl bg-danger-soft py-4 text-2xl text-danger shadow-sm transition duration-100 hover:bg-danger-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 20H8.5L3.6 15.1a2 2 0 0 1 0-2.8l8.7-8.7a2 2 0 0 1 2.8 0l5.4 5.4a2 2 0 0 1 0 2.8L13 19.6" />
          <path d="M8.5 9.5 15 16" />
        </svg>
      </button>
    </div>
  )
}
