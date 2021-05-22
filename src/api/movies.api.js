import axios from "axios";
import {setMovies, setMoviesTrending, setMoviesPopular} from "../actions/movie.actions";
import {setLoading} from "../actions/loading.action";

export const getMovies = ( API, dispatch) => {

    axios.get(API)
        .then(function (data){
            dispatch(setMovies(data.data.results));
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            // handle error
            dispatch(setLoading(true))
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 5000);
            console.log(error + " search movies");
        })
}

export const getMoviesTrending = ( API, dispatch) => {

    axios.get(API)
        .then(function (data){
            dispatch(setMoviesTrending(data.data.results));
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            // handle error
            dispatch(setLoading(true))
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 5000);
            console.log(error + " trending movies");
        })
}

export const getMoviesPopular = ( API, dispatch) => {

    axios.get(API)
        .then(function (data){
            dispatch(setMoviesPopular(data.data.results));
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            // handle error
            dispatch(setLoading(true))
            setTimeout(() => {
                // can set a malfunction error here
                dispatch(setLoading(false))
            }, 5000);
            console.log(error + " popular movies");
        })
}
