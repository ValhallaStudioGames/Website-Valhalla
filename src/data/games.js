// De games van de originele site (bauwendr.com/games). Teksten en afbeeldingen komen daar vandaan.
// `id` wordt gebruikt in de URL: /games/valman
const SITE = 'https://www.bauwendr.com'

export const games = [
  {
    id: 'valman',
    title: 'Valman',
    description: 'Valman is a game where you are a viking, and do stuff.',
    image: `${SITE}/media/games/valman.png`,
  },
  {
    id: 'space-bits',
    title: 'Space Bits',
    description: 'A game, set in space. Also has a vriable called youDiedText ;D',
    image: `${SITE}/media/games/space-bits.png`,
  },
  {
    id: 'basepong',
    title: 'BasePong',
    description: "It's pong, but in the BaseEngine!",
    image: `${SITE}/media/games/basepong.png`,
  },
]
