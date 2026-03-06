

import SearchBar from "@/components/Searchbar/Searchbar";
import { fetchCards, Card } from "@/serv/api";
import { getRandomCards } from "@/serv/random";
import style from './random.module.css';
export default async function Home() {
  const cards: Card[] = await fetchCards();

  const randomCards = getRandomCards(cards, 8);

  return (
    <main className={style.main}>
      <h1 className={style.titre}>Deck aléatoire</h1>
      <p className={style.paragraph}>Générez un deck aléatoire en cliquant sur le bouton ci-dessous.</p>
              <a href="./random" className={style.bouton}>Générer un nouveau deck</a>
      <div className={style.cardcontainer}>
      {randomCards.map((card) => (
        <div className={style.card} key={card.id}>
          <img src={card.iconUrls.medium} width={100} />
          <p>{card.name}</p>
        </div>
      ))}
      </div>
    </main>
  );}
  
