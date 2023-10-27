const httpClient = () => {
    const BASE_URL = process.env.REACT_APP_SERVER_URL;
    return {
        get: (endpoint, queryParams) => fetch(`${BASE_URL}/${endpoint}${queryParams != null ? `?${queryParams}` : ''}`, { method: 'GET', ...getHeaders() }).then(handlePromiseCb),
    }
}

const getHeaders = () => ({ headers: { accept: process.env.REACT_APP_HEADERS_ACCEPT, Authorization: process.env.REACT_APP_HEADERS_AUTHORIZATION } });

const handlePromiseCb = response => {
    const { ok, status } = response;
    if (ok && status >= 200 && status <= 299) return response.json();
    else throw response;
}

export default httpClient();
