import { GridActionsCellItem } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import discoverService from './api/services/discoverService';
import MovieModel from './model/MovieModel';
import EmptyResponseModel from './model/EmptyResponseModel';
import PageableTable from './components/PageableTable';

const MOVIE_TABLE_COLUMNS = [
  { field: 'originalTitle', headerName: 'Title', flex: 1, disableColumnMenu: true },
  { field: 'genre', headerName: 'Genre', flex: 1, disableColumnMenu: true, sortable: false },
  { field: 'releaseDate', headerName: 'Release date', flex: 1, disableColumnMenu: true },
  { field: 'actions', type: 'actions', getActions: (props) => [<GridActionsCellItem icon={<InfoIcon />} onClick={(e) => console.log(props)} label='Info' />, <GridActionsCellItem icon={<EditIcon />} onClick={() => console.log(props)} label='Edit' />, <GridActionsCellItem icon={<DeleteIcon />} onClick={() => console.log(props)} label='Delete' />] }
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
