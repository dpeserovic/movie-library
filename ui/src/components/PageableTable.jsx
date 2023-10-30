import { useEffect, useState } from 'react';
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
import { tablePaginationClasses } from '@mui/material';
import Stack from '@mui/material/Stack';
import TableFilter from './TableFilter';

const PageableTable = ({ columns, apiCall, AdditionalFilterComponent }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [tableData, setTableData] = useState(null);
    // FILTER
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await apiCall({ page, query });
            setTableData(response);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <>
            {tableData != null ?
                <Stack spacing={2} height={800} width={'100%'}>
                    <TableFilter query={query} setQuery={setQuery} page={page} fetchData={fetchData} AdditionalFilterComponent={(props) => <AdditionalFilterComponent tableData={tableData} setTableData={setTableData} {...props} />} />
                    <DataGrid
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 20 },
                            },
                        }}
                        loading={isLoading}
                        pageSizeOptions={[20]}
                        rows={tableData.results}
                        rowSelection={false}
                        slots={{ pagination: () => <CustomPagination tableData={tableData} setPage={setPage} /> }}
                    />
                </Stack>
                : null}
        </>
    );
}

const CustomPagination = ({ tableData: { page, total_pages }, setPage }) => {
    return (
        <GridPagination
            ActionsComponent={() => <Pager totalPages={total_pages} page={page} setPage={setPage} />}
            labelDisplayedRows={() => <Records currentPage={page} totalPages={total_pages} />}
            sx={{
                [`& .${tablePaginationClasses.spacer}`]: {
                    display: 'none',
                },
            }}
        />
    )
}

const Pager = ({ totalPages, page, setPage }) => {
    const onPageChange = (event, pageNumber) => setPage(pageNumber);
    return <MuiPagination page={page} count={totalPages} showFirstButton={true} showLastButton={true} onChange={onPageChange} />;

}

const Records = ({ currentPage, totalPages }) => {
    return <span>{currentPage} / {totalPages} Pages</span>;
}

export default PageableTable;
