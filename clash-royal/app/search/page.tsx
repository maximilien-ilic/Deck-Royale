import { fetchPlayer, Player } from "@/serv/lien"; 


export default async function Home() {
  const player: Player = await fetchPlayer();
  return (
    <main>
      <h1>Joueur</h1>
      <div style={{ border: "1px solid gray", padding: "10px" }}>
        <h3>{player.name}</h3>
        <p>Clan : {player.clan?.name}</p>
        <p>Arena : {player.arena?.name}</p>
        <p>Wins : {player.wins}</p>
        <p>Losses : {player.losses}</p>
        <p>Carte favorite : {player.currentFavouriteCard?.name}</p>
      </div>
    </main>
  );
}