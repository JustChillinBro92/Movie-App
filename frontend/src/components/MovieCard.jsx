import "../css/MovieCard.css"

function MovieCard({ movie }) {
  function onFavouriteClick() {    
    alert("clicked!");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.images.jpg.large_image_url} alt={movie.title_english} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
          <h3>{movie.title_english}</h3>
          <p>{movie.season} {movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
