const BASE_URL = "https://api.myanimelist.net/v2";
const API_KEY = import.meta.env.VITE_MAL_API_KEY;

export const getPopularAnimes = async () => {
    // const response = await fetch(`${BASE_URL}/anime/ranking?ranking_type=bypopularity&limit=4`, {
    //     headers: {
    //         "X-MAL-CLIENT-ID": API_KEY
    //     }
    // });

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/anime/ranking?ranking_type=bypopularity&limit=4`,
      {
        headers: {
          "X-MAL-CLIENT-ID": API_KEY
        }
      }
    );

    const data = await response.json();
    // console.log(data.data);
    return data.data;
}

export const searchAnimes = async (query) => {
    const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=4`, {
        headers: {
            "X-MAL-CLIENT-ID": API_KEY
        }
    });
    const data = await response.json();
    return data.data;
}