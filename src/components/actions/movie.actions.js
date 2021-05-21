export const setMovies = (movies) => {
    return{
        type: ActionType.SET_MOVIES,
        payload: movies
    }
}


export const ActionType = {
    SET_MOVIES: "SET_MOVIES",

}
