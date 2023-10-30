import BasicButton from './BasicButton';
import sortMovieTableUtility from '../utils/sortMovieTableUtility';

const SORT_CONFIGURATION = [
    { label: 'Sort by title [ASC]', field: 'originalTitle', order: 'asc' },
    { label: 'Sort by title [DESC]', field: 'originalTitle', order: 'desc' },
    { label: 'Sort by release date [ASC]', field: 'releaseDate', order: 'asc' },
    { label: 'Sort by release date [DESC]', field: 'releaseDate', order: 'desc' },
]

const MovieTableAdditionalFilter = (props) => {
    const { tableData, setTableData } = props;
    return SORT_CONFIGURATION.map(i => <BasicButton key={i.label} variant='contained' label={i.label} onClick={() => sortMovieTableUtility(i.field, i.order, tableData, setTableData)} />);
}

export default MovieTableAdditionalFilter;
