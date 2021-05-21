import {ActionType} from "./constant.actions";

export const setMovies = (movies) => {
    return{
        type: ActionType.SET_MOVIES,
        payload: movies
    }
}

export const setMoviesSearch = (movieSearch) => {
    return{
        type: ActionType.SET_MOVIES_SEARCH,
        payload: movieSearch
    }
}
