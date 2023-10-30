import Stack from '@mui/material/Stack';
import InputTextField from './InputTextField';
import BasicButton from './BasicButton';

const TableFilter = (props) => {
    const { AdditionalFilterComponent } = props;
    return (
        <Stack direction='row' spacing={2}>
            <TableSearch {...props} />
            {AdditionalFilterComponent != null ? <AdditionalFilterComponent {...props} /> : null}
        </Stack>
    );
}

const TableSearch = ({ query, setQuery, page, fetchData }) => {
    return (
        <>
            <InputTextField label='Search by title' value={query} onChange={(e) => setQuery(e.target.value)} />
            <BasicButton label='Search' onClick={() => fetchData({ page, query })} />
        </>
    );
}

export default TableFilter;
