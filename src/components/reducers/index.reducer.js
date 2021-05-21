import {combineReducers} from "redux";
import { movieReducer } from "./movie.reducer";

export const reducers = combineReducers({
    movies: movieReducer,
});

export default reducers;
