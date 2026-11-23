# dev-ia

IA driven development experiment

Clone do [TabNews](https://www.tabnews.com.br/) do Filipe Deschamps, feito com IA e agentes.

## Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## Rotas

| Rota        | Descrição                                   |
| ----------- | ------------------------------------------- |
| `/`         | Página principal (aviso de "Em Construção") |
| `/alphabet` | Quadro de letras, sílabas e palavras        |

## Scripts

O projeto usa [Yarn 1](https://classic.yarnpkg.com/). Com [Corepack](https://nodejs.org/api/corepack.html) habilitado, a versão é aplicada automaticamente.

```bash
yarn install          # instala as dependências
yarn dev              # servidor de desenvolvimento
yarn build            # checagem de tipos + build de produção
yarn preview          # serve o build de produção
yarn lint             # ESLint
yarn lint:fix         # ESLint com correção automática
yarn format           # Prettier (escrita)
yarn format:check     # Prettier (verificação)
yarn typecheck        # checagem de tipos
```

## Qualidade de código

- **Prettier** formata o projeto e ordena as classes do Tailwind (`prettier-plugin-tailwindcss`).
- **ESLint** roda com checagem de tipos (`typescript-eslint`) e regras de hooks/refresh do React.
- **Pre-commit** (Husky + lint-staged) roda ESLint e Prettier apenas nos arquivos staged.
- **CI** no GitHub Actions executa `lint`, `format:check`, `typecheck` e `build` em pushes na `main` e pull requests.

## Ferramentas

- OpenCode
- DeepSeek V4
