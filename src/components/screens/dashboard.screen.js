import React, {useEffect, useState} from "react";
import Movie from "./movie.screen";
import {setMovies} from '../actions/movie.actions';
import {useDispatch, useSelector} from "react-redux";

const Dashboard = () => {

    const API_KEY = "b04a00192fa1aa4a5944c7d44718f987"
    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + API_KEY + "&page=1";
    // const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=" + API_KEY + "&query=";

    const dispatch = useDispatch();

    // const [movies, setMovies] = useState([]);

    useEffect(async () => {
        getMovies(FEATURED_API);
    }, [])


    // todo: move to api folder
    const getMovies = ( API ) => {
        fetch(API).then(res => res.json())
            .then(data => {
                dispatch(setMovies(data.results));
        });
    }
    return(

        <div className="container-fluid ">
            <div className="row">
                <Movie />
            </div>
        </div>
    )
}

export default Dashboard;
