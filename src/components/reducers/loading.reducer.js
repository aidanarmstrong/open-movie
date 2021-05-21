import {ActionType} from "../actions/constant.actions";

const initialState = {
    loading: true
}
export const loadingReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionType.SET_LOADING:
            return {...state, loading: payload};
        default:
            return state;
    }
}
