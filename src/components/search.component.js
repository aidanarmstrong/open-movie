import React from "react";
import {useSelector} from "react-redux";
import Movie from "./movie.component";

const MovieSearch = () => {

    const moviesSearch = useSelector((state) => state.movies.movies );

    if(moviesSearch.length > 0){
        return  moviesSearch.map((movie, key) => (
            <div className="mx-auto" key={key}>
               <Movie movie={movie}/>
           </div>
        ))
    }

    return (
        <div className="mx-auto">
            <h3>No movies found</h3>
        </div>
    )
}

export default MovieSearch;
