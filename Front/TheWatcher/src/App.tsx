import React, {useState} from 'react'
import {Button} from 'primereact/button';
import {Toolbar} from "primereact/toolbar";
import {AutoComplete} from "primereact/autocomplete";
import {MoviesServerTable} from "./components/MoviesServerTable.tsx";
import './App.css'

function App() {
    const [movie, setMovie] = useState("")
    const [movieToSearch, setMovieToSearch] = useState("")


    const cameraIcon = <i
        style={{color: 'var(--primary-color)', fontSize: "2rem"}}
        className="pi pi-camera"></i>;


    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems(["Example", "Bad Movie 1", "The Moth's Comeback"]);
    }

    const searchBox = <div className="p-inputgroup flex-1">
        <AutoComplete value={movie} suggestions={items}
                      completeMethod={search}
                      onChange={(e) => setMovie(e.value)}/>
        <Button icon="pi pi-search" outlined
                onClick={(e) => {
                    setMovieToSearch(movie);
                }}/>
    </div>




    return (
        <>
            <Toolbar start={cameraIcon} center={searchBox}/>
            <MoviesServerTable/>
        </>
    )
}

export default App
