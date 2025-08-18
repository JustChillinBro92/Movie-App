import "../css/MovieCard.css"
import { useAnimeContext } from "../contexts/AnimeContext";

function MovieCard({ anime }) {
  const {isFavourite, addToFavourites, removeFromFavourites} = useAnimeContext();
  const favourite = isFavourite(anime.mal_id)

  function onFavouriteClick(e) {    
    e.preventDefault();
    if(favourite) removeFromFavourites(anime.mal_id);
    else addToFavourites(anime);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={anime.images.jpg.large_image_url} alt={anime.title_english} />
        <div className="movie-overlay">
          <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
          <h3>{anime.title_english}</h3>
          <p>{anime.season} {anime.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
