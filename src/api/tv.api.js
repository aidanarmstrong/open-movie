import axios from "axios";
import {setLoading} from "../actions/loading.action";

import {setTvPopular} from "../actions/tv.actions";

export const getTvPopular = ( API, dispatch) => {

    axios.get(API)
        .then(function (data){
            dispatch(setTvPopular(data.data.results));
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            // handle error
            dispatch(setLoading(true))
            setTimeout(() => {
                // todo: set a screen for time out
                dispatch(setLoading(false))
            }, 5000);
            console.log(error + " tv popular");
        })

}
