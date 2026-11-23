import { SYLLABLE_WORDS, type Letter } from '@/data/alphabet'

type SyllableBoardProps = {
  letter: Letter | null
  syllables: readonly string[]
  selectedSyllable: string | null
  onSelectSyllable: (syllable: string) => void
}

function WordResult({ syllable }: { syllable: string }) {
  const word = SYLLABLE_WORDS[syllable] ?? ''
  const prefix = word.slice(0, syllable.length)
  const rest = word.slice(syllable.length)

  return (
    <span className="text-4xl font-extrabold leading-tight uppercase break-words sm:text-5xl">
      <span className="text-brand">{prefix}</span>
      {rest}
    </span>
  )
}

export default function SyllableBoard({
  letter,
  syllables,
  selectedSyllable,
  onSelectSyllable,
}: SyllableBoardProps) {
  return (
    <div className="mt-8 flex min-h-45 w-full max-w-4xl flex-col items-center justify-center gap-2 rounded-2xl bg-white p-6 text-center shadow-md">
      {letter ? (
        <>
          <span className="text-5xl font-extrabold leading-none text-brand sm:text-6xl">
            {letter}
          </span>

          <div className="flex flex-wrap justify-center gap-3">
            {syllables.map((syllable) => {
              const isActive = selectedSyllable === syllable

              return (
                <button
                  key={syllable}
                  type="button"
                  onClick={() => onSelectSyllable(syllable)}
                  aria-pressed={isActive}
                  className={`rounded-xl border-2 px-4 py-2 text-3xl font-bold transition duration-100 active:scale-95 sm:text-4xl ${
                    isActive
                      ? 'border-brand bg-brand-soft'
                      : 'border-transparent bg-brand-soft hover:bg-brand-hover'
                  }`}
                >
                  {syllable}
                </button>
              )
            })}
          </div>

          <div className="mt-2 flex min-h-14 items-center justify-center">
            {selectedSyllable ? (
              <WordResult syllable={selectedSyllable} />
            ) : (
              <span className="text-lg text-muted">Clique em uma sílaba para ver uma palavra</span>
            )}
          </div>
        </>
      ) : (
        <span className="text-lg text-muted">Escolha uma letra acima</span>
      )}
    </div>
  )
}
