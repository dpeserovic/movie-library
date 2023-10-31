import { GridActionsCellItem } from '@mui/x-data-grid';
import PersonIcon from '@mui/icons-material/Person';
import { modalController } from './utils/modalController';
import discoverService from './api/services/discoverService';
import searchService from './api/services/searchService';
import MovieModel from './model/MovieModel';
import EmptyResponseModel from './model/EmptyResponseModel';
import PageableTable from './components/PageableTable';
import MovieTableAdditionalFilter from './components/MovieTableAdditionalFilter';
import MovieForm from './modals/MovieForm';
import PreviewMovieCrew from './modals/PreviewMovieCrew';
import movieService from './api/services/movieService';

const MOVIE_TABLE_COLUMNS = [
  { field: 'originalTitle', headerName: 'Title', flex: 1, disableColumnMenu: true },
  { field: 'genre', headerName: 'Genre', flex: 1, disableColumnMenu: true, sortable: false },
  { field: 'releaseDate', headerName: 'Release date', flex: 1, disableColumnMenu: true },
  {
    field: 'actions',
    type: 'actions',
    getActions: (props) => [
      <GridActionsCellItem icon={<PersonIcon />} onClick={() => modalController.open(() => <PreviewMovieCrew {...props} service={movieService} />, {})} label='Info' />,
    ]
  }
];

const App = () => {
  const apiCall = async (filter) => {
    try {
      const { page, query } = filter;
      const response = query != '' ?
        await searchService.getMovies(`iniclude_adult=false&language=en-US&page=${page}&query=${query}`)
        :
        await discoverService.getMovies(`include_adult=false&include_video=false&language=en-US&page=${page}`);
      response.results = response.results.map(i => new MovieModel(i));
      if (response.total_pages > 500) response.total_pages = 500;
      return response;
    } catch (e) {
      console.error(e);
      return new EmptyResponseModel();
    }
  }

  return (
    <PageableTable columns={MOVIE_TABLE_COLUMNS} apiCall={apiCall} AdditionalFilterComponent={MovieTableAdditionalFilter} CreateNewComponent={MovieForm} />
  );
}

export default App;
