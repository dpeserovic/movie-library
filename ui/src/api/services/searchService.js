import httpClient from '../httpClient';

const searchService = () => {
    const BASE = 'search';
    return {
        getMovies: params => httpClient.get(`${BASE}/movie`, params),
    }
}

export default searchService();