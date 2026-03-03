

import { fetchCards, Card } from "@/serv/api";
import { getRandomCards } from "@/serv/random";

export default async function Home() {
  const cards: Card[] = await fetchCards();

  const randomCards = getRandomCards(cards, 8);

  return (
    <main>
      <h1>Deck aléatoire</h1>
        <a href="./random">relancer</a>
      {randomCards.map((card) => (
        <div key={card.id}>
          <img src={card.iconUrls.medium} width={100} />
          <p>{card.name}</p>
        </div>
      ))}
    </main>
  );}
  
