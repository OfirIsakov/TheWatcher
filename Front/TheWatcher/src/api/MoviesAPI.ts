import useSWR from 'swr'
import {Movie} from "../App.tsx";
import {useState} from "react";


export function UseMovies() {
    const [movies, setMovies] = useState<Movie[]>();
    const {
        data,
        isLoading
    } = useSWR<Movie[]>('movies');

    if (isLoading) return [null, isLoading];

    return [data as Movie[], isLoading];
};
