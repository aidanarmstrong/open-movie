import React, {useEffect} from "react";
// import Movie from "./movie.screen";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import {getMovies} from "../api/movies.api";

import MovieReel from "../movie_reel.component";

const Dashboard = () => {
    const {REACT_APP_API_KEY } = process.env;
    // const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + REACT_APP_API_KEY ;
    const FEATURED_API = "https://api.themoviedb.org/3/trending/all/day?api_key=" + REACT_APP_API_KEY
    const movies_trending = useSelector((state) => state.movies );
    // const movies_search = useSelector((state) => state.moviesSearch);
    const loading = useSelector((state) => state.loading.loading );
    const dispatch = useDispatch();

    //todo: set up a get for each movie request in the api and pull them from hook use effect ;

    useEffect(async () => {
        getMovies(FEATURED_API, dispatch);
    }, [])

    if(loading){
        return (
            <div className="loader-container">
                <div className="loader">
                    <Spinner animation="grow" role="status" className="loader">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner animation="grow" role="status" className="loader"/>
                    <Spinner animation="grow" role="status" className="loader"/>
                </div>
            </div>
        )
    }

    return(
        <div className="container-fluid">
            <div className="container-fluid">
                <div>
                    <span className="popular">
                        <h3>Trending</h3>
                    </span>
                    <MovieReel {...movies_trending}/>
                </div>
                {/*<div>*/}
                {/*    <span className="popular">*/}
                {/*        <h3>Popular</h3>*/}
                {/*    </span>*/}
                {/*    <MovieReel {...movies_search}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Dashboard;
