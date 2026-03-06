import Recherche from "@/components/Recherche/Recherche"
import style from './search.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <h1 className={style.title}>Rechercher profil:</h1>
      <Recherche />
    </main>
  )
}