import {combineReducers} from "redux";
import {movieReducer} from "./movie.reducer";
import {loadingReducer} from "./loading.reducer";

export const reducers = combineReducers({
    movies: movieReducer,
    loading: loadingReducer
});

export default reducers;
