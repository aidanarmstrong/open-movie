import React from "react";
import {Button, Card} from "react-bootstrap";
import {useSelector} from "react-redux";

const Movie = () => {
    // {title, poster_path, overview, vote_average}
    const movies = useSelector((state) => state.movies.movies );
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    const renderMovies = movies.map((movie, key) => {
        const {title, poster_path, overview, vote_average} = movie;
        return(
            <div className="mx-auto" key={key}>
                <div className="movie">
                    <img className="movie-img"
                         src={ poster_path ? IMG_API + poster_path : "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80"}
                         alt={title} />
                    <div className="movie-info">
                        <h3>{title ? title : "Unknown title"}</h3>
                        <span>{vote_average}</span>
                    </div>
                    <div className="movie-over">
                        <h2>Description</h2>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        )
    })

    return <>{renderMovies}</>;

}

export default Movie;
