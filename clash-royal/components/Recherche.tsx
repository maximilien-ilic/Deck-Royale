"use client"

import { Player } from "@/serv/lien"
import { useFormState } from "react-dom"
import { searchPlayer } from "@/actions/player"

export default function Recherche() {
  const [state, action] = useFormState<Player | null, FormData>(searchPlayer, null) 

  return (  
    <div>  
      <form action={action}>  
        <input type="text" name="tag" />
        <button type="submit">Rechercher</button>
      </form>

      {state && (  
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <h3>{state.name}</h3>  
          <p>Clan : {state.clan?.name}</p>
          <p>Arena : {state.arena?.name}</p>
          <p>Wins : {state.wins}</p>
          <p>Losses : {state.losses}</p>
          <p>Carte favorite : {state.currentFavouriteCard?.name}</p>
          <div className="grid grid-cols-4 gap-2 p-4 rounded-2xl w-fit">
            {state.currentDeck.map((card) => (
              <div key={card.id} className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-purple-600 shadow-lg hover:scale-105 transition-transform duration-200">
                <img src={card.iconUrls.medium} alt={card.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}