import httpClient from '../httpClient';

const discoverService = () => {
    const BASE = 'discover';
    return {
        getMovies: params => httpClient.get(`${BASE}/movie`, params),
    }
}

export default discoverService();