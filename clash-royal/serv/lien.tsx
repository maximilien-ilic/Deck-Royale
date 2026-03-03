import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.CLASH_API_KEY;

if (!API_KEY) {
  throw new Error("CLASH_API_KEY non définie dans le .env");
}
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

export async function fetchCards(): Promise<Card[]> {
  try {
    const response = await fetch('https://api.clashroyale.com/v1/cards', {
      headers: {
        Authorization: `Bearer ${API_KEY}`, 
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.items as Card[]; 
  } catch (error) {
    console.error('Erreur lors de l’appel API :', error);
    return [];
  }
}