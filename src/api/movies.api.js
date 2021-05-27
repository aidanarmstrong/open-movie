import axios from "axios";
import {setMovies, setMoviesTrending, setMoviesPopular} from "../actions/movie.actions";
import {setLoading} from "../actions/loading.action";


const checkIsMovie = (data) => {
    data.data.results.forEach(function (movie){
        movie.isMovie = true;
    });
}

export const getMovies = ( API, dispatch) => {
    axios.get(API)
        .then(function (data){

            data.data.results.forEach(function (response){
                if(response.media_type === "tv"){
                    response.isMovie = false;
                }else if(response.media_type === "movie"){
                    response.isMovie = true;
                }
            });
            console.log(data.data.results);
            dispatch(setMovies(data.data.results));
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            dispatch(setLoading(true))
            setTimeout(() => {
                // todo: set a screen for time out
            }, 5000);
            console.log(error + " search movies");
        })
}

export const getMoviesTrending = ( API, dispatch) => {

    axios.get(API)
        .then(function (data){
            checkIsMovie(data);
            dispatch(setMoviesTrending(data.data.results));
            dispatch(setLoading(false));
        })
        .catch(function (error) {
            dispatch(setLoading(true))
            setTimeout(() => {
                // todo: set a screen for time out
            }, 5000);
            console.log(error + " trending movies");
        })
}

export const getMoviesPopular = ( API, dispatch) => {

    axios.get(API)
        .then(function (data){
            checkIsMovie(data);
            dispatch(setMoviesPopular(data.data.results));
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            dispatch(setLoading(true))
            setTimeout(() => {
                // todo: set a screen for time out
            }, 5000);
            console.log(error + " popular movies");
        })
}
