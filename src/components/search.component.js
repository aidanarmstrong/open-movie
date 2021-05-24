import React from "react";
import {useSelector} from "react-redux";
import Movie from "./movie.component";
import LoadingReel from "./loadingReel.component";

const MovieSearch = () => {

    const moviesSearch = useSelector((state) => state.movies.movies );
    const loading = useSelector((state) => state.loading.loading);

    if(loading){
        return <LoadingReel />
    }

    if(moviesSearch.length > 0){
        return  moviesSearch.map( (movie, key) => {

            if(movie.title || movie.overview){
                return(
                    <div className="mx-auto" key={key}>
                        <Movie movie={movie}/>
                    </div>
                )
            }
            return null
        })
    }

    return (
        <div className="mx-auto">
            <h3>No results found.</h3>
        </div>
    )
}

export default MovieSearch;
