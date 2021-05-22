import {ActionType} from "../actions/constant.actions";

const initialState = {
    movies: [],
    moviesPopular: [],
    moviesTrending: [],
}
export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionType.SET_MOVIES:
            return {...state, movies: payload};

        case ActionType.SET_MOVIES_TRENDING:
            return {...state, moviesTrending: payload};

        case ActionType.SET_MOVIES_POPULAR:
            return {...state, moviesPopular: payload};

        default:
            return state;
    }
}
