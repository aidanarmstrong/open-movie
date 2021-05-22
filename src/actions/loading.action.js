import {ActionType} from "./constant.actions";

export const setLoading = (loading) => {
    return{
        type: ActionType.SET_LOADING,
        payload: loading
    }
}
