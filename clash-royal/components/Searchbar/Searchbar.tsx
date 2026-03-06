"use client";
import { useState } from "react";
import { Card } from "@/serv/api";
import style from './Searchbar.module.css';

interface SearchBarProps {
  cards: Card[];
}

export default function SearchBar({ cards }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const filtered = cards.filter((card) =>
    card.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input className={style.searchbar}
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher une carte..."
      />

      <div className ={style.cardcontainer}>
        {filtered.map((card) => (
          <div key={card.id} className={style.card}>
            <h3 className={style.cardTitle}>{card.name}</h3>
            <p className={style.cardRarity}>Rareté : {card.rarity}</p>
            <p className={style.cardElixir}>Elixir : {card.elixirCost}</p>
            <img src={card.iconUrls.medium} alt={card.name} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
}