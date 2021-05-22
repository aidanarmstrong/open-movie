import {ActionType} from "../actions/constant.actions";

const initialState = {
    tvPopular: [],
}

export const tvReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionType.SET_TV_POPULAR:
            return {...state, tvPopular: payload};

        default:
            return state;
    }
}
