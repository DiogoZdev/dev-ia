// Ordem do alfabeto, incluindo as vogais.
export const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
] as const

export type Letter = (typeof LETTERS)[number]

// Sílabas em português (BR): cada consoante é combinada com as vogais.
export const VOWELS: readonly Letter[] = ['A', 'E', 'I', 'O', 'U']

// Casos especiais que não seguem a regra simples de consoante + vogal.
export const SPECIAL: Partial<Record<Letter, readonly string[]>> = {
  A: ['A'],
  E: ['E'],
  I: ['I'],
  O: ['O'],
  U: ['U'],
  Q: ['QUA', 'QUE', 'QUI', 'QUO'],
}

// Uma palavra em português (BR) para cada sílaba.
export const SYLLABLE_WORDS: Readonly<Record<string, string>> = {
  A: 'abelha',
  E: 'elefante',
  I: 'igreja',
  O: 'ovo',
  U: 'uva',

  BA: 'banana',
  BE: 'bebê',
  BI: 'bicicleta',
  BO: 'bola',
  BU: 'burro',

  CA: 'casa',
  CE: 'cebola',
  CI: 'cidade',
  CO: 'coelho',
  CU: 'cubo',

  DA: 'dado',
  DE: 'dedo',
  DI: 'dinheiro',
  DO: 'doce',
  DU: 'ducha',

  FA: 'faca',
  FE: 'festa',
  FI: 'fita',
  FO: 'fogo',
  FU: 'futebol',

  GA: 'gato',
  GE: 'gelo',
  GI: 'girafa',
  GO: 'gota',
  GU: 'guarda-chuva',

  HA: 'hambúrguer',
  HE: 'helicóptero',
  HI: 'hipopótamo',
  HO: 'hospital',
  HU: 'humano',

  JA: 'janela',
  JE: 'jeito',
  JI: 'jiboia',
  JO: 'jornal',
  JU: 'juiz',

  KA: 'kayak',
  KE: 'ketchup',
  KI: 'kiwi',
  KO: 'koala',
  KU: 'kung fu',

  LA: 'laranja',
  LE: 'leão',
  LI: 'livro',
  LO: 'lobo',
  LU: 'lua',

  MA: 'macaco',
  ME: 'mesa',
  MI: 'milho',
  MO: 'mola',
  MU: 'mundo',

  NA: 'navio',
  NE: 'neve',
  NI: 'ninho',
  NO: 'novelo',
  NU: 'nuvem',

  PA: 'pato',
  PE: 'peixe',
  PI: 'pipa',
  PO: 'porta',
  PU: 'pulga',

  QUA: 'quadro',
  QUE: 'queijo',
  QUI: 'quilo',
  QUO: 'quociente',

  RA: 'rato',
  RE: 'relógio',
  RI: 'rio',
  RO: 'roda',
  RU: 'rua',

  SA: 'sapato',
  SE: 'semente',
  SI: 'sino',
  SO: 'sol',
  SU: 'suco',

  TA: 'tartaruga',
  TE: 'telhado',
  TI: 'tigre',
  TO: 'tomate',
  TU: 'tubarão',

  VA: 'vaca',
  VE: 'vela',
  VI: 'vidro',
  VO: 'vovó',
  VU: 'vulcão',

  WA: 'waffle',
  WE: 'webcam',
  WI: 'windsurf',
  WO: 'wombat',
  WU: 'wushu',

  XA: 'xadrez',
  XE: 'xerife',
  XI: 'xilofone',
  XO: 'xodó',
  XU: 'xucro',

  YA: 'yakisoba',
  YE: 'yeti',
  YI: 'yin',
  YO: 'yoga',
  YU: 'yuzu',

  ZA: 'zabumba',
  ZE: 'zebra',
  ZI: 'zigue-zague',
  ZO: 'zoológico',
  ZU: 'zumbi',
}
