import {ActionType} from "../actions/constant.actions";

const initialState = {
    movies: [],
    moviesSearch: [],
    moviesTrending: [],
}
export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionType.SET_MOVIES:
            return {...state, movies: payload};
        case ActionType.SET_MOVIES_SEARCH:
            return {...state, moviesSearch: payload};
        default:
            return state;
    }
}
