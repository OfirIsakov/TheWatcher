import useSWR from 'swr'
import {Movie} from "../types/movie.ts";


export function UseMovies() {
    const {
        data,
        isLoading
    } = useSWR<Movie[]>('movies');

    if (isLoading) return [null, isLoading];

    return [data as Movie[], isLoading];
};
