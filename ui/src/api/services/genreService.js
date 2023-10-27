import httpClient from '../httpClient';

const genreService = () => {
    const BASE = 'genre';
    return {
        getMovieGenres: () => httpClient.get(`${BASE}/movie/list`),
    }
}

export default genreService();