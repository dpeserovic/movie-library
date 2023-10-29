import discoverService from './api/services/discoverService';
import MovieModel from './model/MovieModel';
import EmptyResponseModel from './model/EmptyResponseModel';
import PageableTable from './components/PageableTable';

const MOVIE_TABLE_COLUMNS = [
  { field: 'originalTitle', headerName: 'Title' },
  { field: 'genre', headerName: 'Genre' },
  { field: 'releaseDate', headerName: 'Release date' },
];

const App = () => {
  const apiCall = async (filter) => {
    try {
      const { page } = filter;
      const response = await discoverService.getMovies(`page=${page}`);
      response.results = response.results.map(i => new MovieModel(i));
      if (response.total_pages > 500) response.total_pages = 500;
      return response;
    } catch (e) {
      console.error(e);
      return new EmptyResponseModel();
    }
  }

  return (
    <PageableTable columns={MOVIE_TABLE_COLUMNS} apiCall={apiCall} />
  );
}

export default App;
