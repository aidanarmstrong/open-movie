import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import ContainerReel from "../components/reel.component";
import {getMoviesPopular, getMoviesTrending} from "../api/movies.api";
import {getTvPopular} from "../api/tv.api";


const Dashboard = () => {
    const {REACT_APP_API_KEY } = process.env;

    const TRENDING_MOVIES = "https://api.themoviedb.org/3/trending/all/day?api_key=" + REACT_APP_API_KEY;
    const POPULAR_MOVIES = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + REACT_APP_API_KEY ;
    const POPULAR_TV_SHOWS = "https://api.themoviedb.org/3/tv/popular?api_key=" + REACT_APP_API_KEY + "&language=en-US&page=1";
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies);
    const tvShows = useSelector((state) => state.tvShows);
    const loading = useSelector((state) => state.loading.loading );


    const fetchData = useCallback(async () => {
        await getMoviesTrending(TRENDING_MOVIES, dispatch);
        await getMoviesPopular(POPULAR_MOVIES, dispatch);
        await getTvPopular(POPULAR_TV_SHOWS, dispatch);
    }, [TRENDING_MOVIES, POPULAR_MOVIES, POPULAR_TV_SHOWS, dispatch])


    useEffect( () => {
        fetchData();
    }, [fetchData])

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
                    <span className="category">
                        <h3>Trending</h3>
                    </span>
                    <ContainerReel dataList={movies.moviesTrending}/>
                </div>
                <div>
                     <span className="category">
                        <h3>Movies</h3>
                    </span>
                    <ContainerReel dataList={movies.moviesPopular}/>
                </div>
                <div>
                     <span className="category">
                        <h3>Tv Shows</h3>
                    </span>
                    <ContainerReel dataList={tvShows.tvPopular}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
