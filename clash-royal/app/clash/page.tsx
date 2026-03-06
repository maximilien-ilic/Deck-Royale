import style from './clash.module.css';
import { fetchCards, Card } from "@/serv/api"; 
import SearchBar from "@/components/Searchbar/Searchbar";

export default async function Home() {
const cards: Card[] = await fetchCards();

  return (
    <main className={style.main}>
      <h1 className={style.titre}>DECK ROYAL</h1>
      <SearchBar cards={cards}/>
    </main>
  );
}
