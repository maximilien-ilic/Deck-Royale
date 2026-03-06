export interface IconUrls {
  medium: string;
  heroMedium: string;
  evolutionMedium: string;
}
export interface Card {
  name: string;
  id: number;
  maxLevel: number;
  maxEvolutionLevel: number;
  elixirCost: number;
  iconUrls: IconUrls;
  rarity: string;
}
export function getRandomCards(cards: Card[], count: number = 8): Card[] {
  const shuffled = [...cards];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}