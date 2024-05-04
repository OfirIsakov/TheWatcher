import React, { useState } from 'react';

import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {UseMovies} from "../api/MoviesAPI.ts";
import {Movie} from "../types/movie.ts";
import countries from "../../public/countires.ts";


export const MoviesServerTable = () => {
    const [dataa, isLoading] = UseMovies();
    const countriesDict = countries();

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
	);
};