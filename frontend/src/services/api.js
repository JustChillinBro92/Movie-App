const BASE_URL = "https://api.jikan.moe/v4";

export const getPopularAnimes = async () => {
    const response = await fetch(`${BASE_URL}/top/anime?filter=bypopularity`);
    const data = await response.json();
    // console.log(data.data);
    return data.data;
}

export const searchAnimes = async (query) => {
    const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.data;
}