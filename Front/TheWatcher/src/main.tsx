import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'primereact/resources/themes/arya-purple/theme.css';
import 'primeicons/primeicons.css';
import '/public/styles/flags.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {fetcher} from "./api";
import {SWRConfig} from "swr";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <SWRConfig value={{fetcher}}>
            <Routes>
                <Route path="" element={<App/>}/>
            </Routes>
        </SWRConfig>
    </BrowserRouter>
)
