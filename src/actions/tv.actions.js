import {ActionType} from "./constant.actions";

export const setTvPopular = (tvPopular) => {
    return{
        type: ActionType.SET_TV_POPULAR,
        payload: tvPopular
    }
}
