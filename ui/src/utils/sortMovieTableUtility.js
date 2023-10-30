const sortMovieTableUtility = (field, order, data, setter) => {
    const results = [...data.results];
    switch (order) {
        case 'asc':
            results.sort((a, b) => {
                if (a[field] < b[field]) return -1;
                if (a[field] > b[field]) return 1;
                return 0;
            });
            break;
        case 'desc':
            results.sort((a, b) => {
                if (a[field] > b[field]) return -1;
                if (a[field] < b[field]) return 1;
                return 0;
            });
            break;
        default:
            console.error('Unknown order!');
    }
    setter({ ...data, results });
}

export default sortMovieTableUtility;