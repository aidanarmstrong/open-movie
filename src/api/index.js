import axios from "axios";
import { setLoading } from "../actions/loading.action";
import { setTrending } from "../actions/movie.actions";

export const getTrending = ( API, dispatch) => {
    axios.get(API)
        .then(function (data){
            data.data.results.forEach(function (response){
                if(response.media_type === "tv"){
                    response.isMovie = false;
                }else if(response.media_type === "movie"){
                    response.isMovie = true;
                }
            });
            dispatch(setTrending(data.data.results));
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