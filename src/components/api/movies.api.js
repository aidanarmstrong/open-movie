import axios from "axios";
import {setMovies} from "../actions/movie.actions";
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
            console.log(error);
        })


}
