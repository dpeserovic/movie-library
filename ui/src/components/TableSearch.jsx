import Stack from '@mui/material/Stack';
import InputTextField from './InputTextField';
import BasicButton from './Button';

const TableSearch = ({ query, setQuery, page, fetchData }) => {
    return (
        <Stack direction='row' spacing={2}>
            <InputTextField label='Search by title' value={query} onChange={(e) => setQuery(e.target.value)} />
            <BasicButton label='Search' onClick={() => fetchData({ page, query })} />
        </Stack>
    );
}

export default TableSearch;
