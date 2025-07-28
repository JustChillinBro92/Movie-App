import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchAnimes, getPopularAnimes } from "../services/api";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // [] -> dependency array -> any change inside [] invokes the useEffect function
  useEffect(() => {
    const loadPopularAnimes = async () => {
      try {
        const popularAnimes = await getPopularAnimes();
        setMovies(popularAnimes);
      } catch (err) {
        console.log(err);
        setError("Failed to load animes....")
      } 
      finally {
        setLoading(false);
      }
    }
    
    loadPopularAnimes();
  }, [])


  // const movies = [
  //   { id: 1, title: "Your Name", release: "2020" },
  //   { id: 2, title: "Weathering With You", release: "2022" },
  //   { id: 3, title: "A Tunnel To Summer", release: "2024" },
  // ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.node.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.node.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
