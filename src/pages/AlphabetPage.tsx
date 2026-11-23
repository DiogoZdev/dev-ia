import { useState } from 'react'

import LetterGrid from '@/components/alphabet/LetterGrid'
import SyllableBoard from '@/components/alphabet/SyllableBoard'
import type { Letter } from '@/data/alphabet'
import { buildSyllables } from '@/lib/syllables'

export default function AlphabetPage() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)
  const [selectedSyllable, setSelectedSyllable] = useState<string | null>(null)

  const syllables = selectedLetter ? buildSyllables(selectedLetter) : []

  function handleSelectLetter(letter: Letter) {
    setSelectedLetter(letter)
    setSelectedSyllable(null)
  }

  function handleSelectSyllable(syllable: string) {
    setSelectedSyllable(syllable)
  }

  function handleClear() {
    setSelectedLetter(null)
    setSelectedSyllable(null)
  }

  return (
    <section className="flex w-full flex-col items-center">
      <h1 className="mb-6 text-center text-xl font-bold sm:text-2xl">Clique em uma letra</h1>

      <LetterGrid
        selectedLetter={selectedLetter}
        hasSelection={selectedLetter !== null}
        onSelectLetter={handleSelectLetter}
        onClear={handleClear}
      />

      <SyllableBoard
        letter={selectedLetter}
        syllables={syllables}
        selectedSyllable={selectedSyllable}
        onSelectSyllable={handleSelectSyllable}
      />
    </section>
  )
}
