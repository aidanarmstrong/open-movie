import React, {useEffect, useState} from "react";
import Movie from "./movie.screen";
import {setMovies} from '../actions/movie.actions';
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";

const Dashboard = () => {

    // const API_KEY = "b04a00192fa1aa4a5944c7d44718f987"
    const API_KEY = ""
    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + API_KEY + "&page=1";

    const dispatch = useDispatch();

    const [ loading, setLoading ] = useState(false);

    useEffect(async () => {
       getMovies(FEATURED_API);
    }, [])


    // todo: move to api folder
    const getMovies = ( API ) => {
        setTimeout(() => {
            fetch(API).then(res => res.json())
                .then(data => {
                    dispatch(setMovies(data.results));
                    setLoading(true);
                });
        }, 500);
    }
    return(

        <div className="container-fluid">
            <div className="row">
                {
                    loading ? (
                        <Movie />
                    )
                    :
                    (
                        <div className="container">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard;
