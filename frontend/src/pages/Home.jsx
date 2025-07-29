import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchAnimes, getPopularAnimes } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animes, setAnime] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // [] -> dependency array -> any change inside [] invokes the useEffect function
  useEffect(() => {
    const loadPopularAnimes = async () => {
      try {
        const popularAnimes = await getPopularAnimes();
        setAnime(popularAnimes);
      } catch (err) {
        console.log(err);
        setError("Failed to load animes....");
      } finally {
        setLoading(false);
      }
    };

    loadPopularAnimes();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if(loading) return;
    
    try{
      const searchResults = await searchAnimes(searchQuery);
      setAnime(searchResults);
      setError(null);
    } catch(err) {
      console.log(err);
      setError("Failed to load animes....")
    }
    finally {
      setLoading(false);
    }

    // setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for animes...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {animes.map(
            (anime) => (
                <MovieCard movie={anime} key={anime.mal_id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
