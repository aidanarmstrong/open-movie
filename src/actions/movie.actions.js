import {ActionType} from "./constant.actions";

export const setMovies = (movies) => {
    return{
        type: ActionType.SET_MOVIES,
        payload: movies
    }
}

export const setMoviesPopular = (moviePopular) => {
    return{
        type: ActionType.SET_MOVIES_POPULAR,
        payload: moviePopular
    }
}

export const setMoviesTrending = (movieTrending) => {
    return{
        type: ActionType.SET_MOVIES_TRENDING,
        payload: movieTrending
    }
}

export const setTrending = (trending) => {
    return {
        type: ActionType.SET_TRENDING,
        payload: trending
    }
}
