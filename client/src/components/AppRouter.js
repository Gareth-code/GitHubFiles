import React from "react";
import {Routes, Route, Redirect, BrowserRouter} from "react-router-dom"
import { publicRoutes } from "../routes";
import { SEARCH_ROUTE } from "../utils/consts";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exact/>
           )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter