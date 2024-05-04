import axios from 'axios';

const api = 'http://127.0.0.1:5000/';

export const apiFetcher = axios.create({
    baseURL: api,
});

export const fetcher = (url: string) => apiFetcher.get(url)
    .then((res) => res.data);