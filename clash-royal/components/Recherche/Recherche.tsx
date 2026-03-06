"use client"

import { Player } from "@/serv/lien"
import { useFormState } from "react-dom"
import { searchPlayer } from "@/actions/player"
import styles from "./Recherche.module.css"

export default function Recherche() {
  const [state, action] = useFormState<Player | null, FormData>(searchPlayer, null) 

  return (  
    <div>  
      <form action={action} className={styles.form}>
        <input className={styles.input} type="text" name="tag" placeholder="#TAG du joueur" />
        <button className={styles.bouton} type="submit">Rechercher</button>
      </form>
      {state && (
        <div className={styles.joueur}>
          <h3 >{state.name}</h3>
          <p>Clan : {state.clan?.name}</p>
          <p>Arena : {state.arena?.name}</p>
          <p>Wins : {state.wins}</p>
          <p>Losses : {state.losses}</p>
          <p>Carte favorite : {state.currentFavouriteCard?.name}</p>
          <div className={styles.deck}>
            {state.currentDeck.map((card) => (
              <div key={card.id} className={styles.carte}>
                <img src={card.iconUrls.medium} alt={card.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}