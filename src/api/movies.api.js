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
            dispatch(setLoading(true))
            setTimeout(() => {
                // todo: set a screen for time out
                // dispatch(setLoading(false))
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
            dispatch(setLoading(true))
            setTimeout(() => {
                // todo: set a screen for time out
                // dispatch(setLoading(false))
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
            dispatch(setLoading(true))
            setTimeout(() => {
                // todo: set a screen for time out
                // dispatch(setLoading(false))
            }, 5000);
            console.log(error + " popular movies");
        })
}
