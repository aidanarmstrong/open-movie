import {ActionType} from "../actions/constant.actions";

export const loadingReducer = (state = { loading: true }, {type, payload}) => {
    switch (type){
        case ActionType.SET_LOADING:
            return {...state, loading: payload};
        default:
            return state;
    }
}
