import { SPECIAL, VOWELS, type Letter } from '@/data/alphabet'

export function buildSyllables(letter: Letter): readonly string[] {
  const specialSyllables = SPECIAL[letter]

  if (specialSyllables) {
    return specialSyllables
  }

  if (VOWELS.includes(letter)) {
    return [letter]
  }

  return VOWELS.map((vowel) => `${letter}${vowel}`)
}
