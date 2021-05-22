import {combineReducers} from "redux";
import {movieReducer} from "./movie.reducer";
import {loadingReducer} from "./loading.reducer";
import {tvReducer} from "./tv.reducer";

export const reducers = combineReducers({
    movies: movieReducer,
    tvShows: tvReducer,
    loading: loadingReducer
});

export default reducers;
