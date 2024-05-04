import React, {useEffect, useState} from 'react'
import './App.css'
import {Button} from 'primereact/button';
import {Toolbar} from "primereact/toolbar";
import {AutoComplete} from "primereact/autocomplete";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import countries from "../public/countires.ts";
import {UseMovies} from "./api/MoviesAPI.ts";

export interface Movie {
    id: string;
    name: string;
    ip: string;
    country_code: string;
    url: string;
    ping: string
}

export interface MoviesResponse {
    movies: Movie[]
}

function App() {
    const [movie, setMovie] = useState("")
    const [movieToSearch, setMovieToSearch] = useState("")

    const countriesDict = countries();

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


    const [dataa, isLoading] = UseMovies();

    const countryBodyTemplate = (rowData: Movie) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag"
                     src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                     className={`flag flag-${rowData.country_code}`}
                     style={{width: '24px'}}/>
                <span> {countriesDict[rowData.country_code.toUpperCase()]}</span>
            </div>
        );
    };

    return (
        <>
            <Toolbar start={cameraIcon} center={searchBox}/>
            <DataTable value={dataa} dataKey="id" paginator rows={15}
                       rowsPerPageOptions={[5, 10, 15, 25, 50]}
                       tableStyle={{minWidth: '50rem'}} loading={isLoading}
                       paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                       currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <Column key="name" field="name" header="Movie Name"/>
                <Column key="ip" field="ip" header="Server IP"/>
                <Column key="url" field="url" header="Full URL"/>
                <Column key="country" header="Host Country"
                        body={countryBodyTemplate}/>
                <Column key="ping" field="ping" header="Last Ping"/>
            </DataTable>
        </>
    )
}

export default App
