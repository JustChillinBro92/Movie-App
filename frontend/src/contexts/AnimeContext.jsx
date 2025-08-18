import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    // parsing stringifyed stored favs from local storage
    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites");
        if(storedFavs) setFavourites(JSON.parse(storedFavs));
    }, [])

    // stringifying favs and storing in local storage
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites])

    const addToFavourites = (anime) => {
        setFavourites(prev => [...prev, anime]);
    }

    const removeFromFavourites = (animeId) => {
        setFavourites(prev => prev.filter(anime => anime.mal_id != animeId));
    }

    const isFavourite = (animeId) => {
        return favourites.some(anime => anime.mal_id === animeId);
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
    }

    return <AnimeContext.Provider value={value}>
        {children}
    </AnimeContext.Provider>
}