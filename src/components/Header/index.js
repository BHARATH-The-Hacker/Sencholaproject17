import { useContext } from "react";
import { genresContext } from "../../contexts/genres-provider";
import { Link } from "react-router-dom";

import SearchForm from "../SearchForm";
import './style.css';

const Header = () => {

    const { genres } = useContext(genresContext)

    const sortGenre = genres.sort((a, b) => a.name.localeCompare(b.name))

    const renderGenres = () => {

        return sortGenre.map(genre => {
            return (
                <Link className="text-decoration-none text-primary" to={`/genre/${genre.id}-${genre.name}`} key={genre.id}>
                    <li className="dropdown-item" key={genre.id}>{genre.name}</li>
                </Link>
            );
        })
    }

    return (
        <header className="p-3 text-bg-dark">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                    <Link to="/" className="text-white text-decoration-none">
                        <h1 className="fs-3 fw-bold">FoxMovies</h1>
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-semibold text-white">
                        <Link to="/" className="text-white text-decoration-none">
                            <li className="nav-item px-3">Home</li>
                        </Link>
                        <Link to="/" className="text-white text-decoration-none">
                            <li className="nav-item px-3">Popular</li>
                        </Link>
                        <li className="nav-item px-3 dropdown">
                            <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Genres</span>
                            <ul className="dropdown-menu genres__box">
                                {renderGenres()}
                            </ul>
                        </li>
                    </ul>
                    <SearchForm />
                </div>
            </div>
        </header>
    )
}

export default Header