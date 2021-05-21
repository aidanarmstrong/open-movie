import {ActionType} from "../actions/movie.actions";

const initialState = {
    movies: []
}
export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionType.SET_MOVIES:
            return {...state, movies: payload};
        default:
            return state;
    }
}
