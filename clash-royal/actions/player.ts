"use server"
import { Player } from "@/serv/lien"


const API_KEY = process.env.CLASH_API_KEY;

export async function searchPlayer(prevState: Player | null, formData: FormData): Promise<Player | null> {   
     
  const tag = formData.get('tag') as string

  if (!tag) return prevState

  const response = await fetch(`https://api.clashroyale.com/v1/players/${tag.replace('#', '%23')}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  

  return await response.json() as Player;
}