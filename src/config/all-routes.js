import { Route, Routes, Navigate } from "react-router-dom";

import * as paths from "./route-paths";
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Genre from '../pages/Genre';
import NotFound from '../components/NotFound'

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path= {paths.HOME}
                element={<Home />}
            />
            <Route
                exact
                path= {paths.MOVIEDETAILS}
                element={<MovieDetails />}
            />
            <Route
                exact
                path= {paths.GENRE}
                element={<Genre />}
            />
            <Route
                exact
                path= {paths.NOTFOUND}
                element={<NotFound />}
            />
            <Route
                exact
                path="*"
                element={<Navigate to="/404" />}
            />
        </Routes>

    )
}

export default AllRoutes;