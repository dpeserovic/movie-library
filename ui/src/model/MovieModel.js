import { getItem } from '../utils/handleStorage';

class MovieModel {
    constructor({ id, original_title, genre_ids, release_date }) {
        this.id = id;
        this.originalTitle = original_title;
        this.genre = this.setGenre(genre_ids);
        this.releaseDate = release_date;
        this.actors = null;
        this.directors = null;
    }

    setGenre = (ids) => {
        const genres = getItem('genres');
        return genres.filter(i => ids.includes(i.id)).map(i => i.name).join(',');
    }
}

export default MovieModel;
