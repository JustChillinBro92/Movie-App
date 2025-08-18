import "../css/Favourites.css";
import { useAnimeContext } from "../contexts/AnimeContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useAnimeContext();
  
  return (
    <>
      {favourites.length != 0 ? (
        <div className="favourites">
          <h2>Your Favourites</h2>
          <div className="movies-grid">
            {favourites.map((anime) => (
              <MovieCard anime={anime} key={anime.mal_id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="favourites-empty">
          <h2>No Favourite Movies Yet</h2>
          <p>
            Start adding movies to your favourites and they will appear here
          </p>
        </div>
      )}
    </>
  );
}

export default Favourites;
