import httpClient from '../httpClient';

const movieService = () => {
    const BASE = 'movie';
    return {
        getCredits: id => httpClient.get(`${BASE}/${id}/credits`),
    }
}

export default movieService();