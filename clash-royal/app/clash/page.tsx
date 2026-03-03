import { fetchCards, Card } from "@/serv/lien"; // adapte le chemin

export default async function Home() {
  const cards: Card[] = await fetchCards();

  return (
    <main>
      <h1>Cartes Clash Royale</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {cards.map((card) => (
          <div key={card.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <h3>{card.name}</h3>
            <p>Rareté : {card.rarity}</p>
            <p>Elixir : {card.elixirCost}</p>
            <img
            src={card.iconUrls.medium}
            alt={card.name}
            width={100}
            />
          </div>
        ))}
      </div>
    </main>
  );
}