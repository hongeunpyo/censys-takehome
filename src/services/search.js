const SEARCH_URL = 'https://search.censys.io/api/v2/hosts/search';

const API_ID = import.meta.env.VITE_API_ID;
const API_KEY = import.meta.env.VITE_API_SECRET_KEY;

const buildUrlWithQueryParams = (url, params) => {
    if (params) {
        return `${url}?${new URLSearchParams(params).toString()}`
    }
    return url;
}

const fetchResponse = async (url) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(API_ID + ':' + API_KEY));

    const response = await fetch(url, {
        method: 'GET',
        headers,
    })

    if (!response.ok) {
        throw new Error(`Failed with ${response.status} code`)
    }
    return response.json();
}

export const getSearchResults = async ({ queryKey }) => {
    const [, params] = queryKey;
    const url = buildUrlWithQueryParams(SEARCH_URL, params)
    return await fetchResponse(url);
}
