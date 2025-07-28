import "../css/MovieCard.css"

function MovieCard({ movie }) {
  function onFavouriteClick() {    
    alert("clicked!");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.node.main_picture.medium} alt={movie.node.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ♥
          </button>
        </div>

        <div className="movie-info">
          <h3>{movie.node.title}</h3>
          <p>{movie.release}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
