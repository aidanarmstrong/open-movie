import React, { useEffect, useCallback } from "react";
import Films from "../../components/film";
import {getMoviesPopular} from "../../api/movies.api";
import {useDispatch} from "react-redux";
import {setLoading} from "../../actions/loading.action";

const SearchScreen = (props) => {
    const {REACT_APP_API_KEY} = process.env;
    const FILMS_API =  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_API_KEY}` ;
    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        await getMoviesPopular(FILMS_API, dispatch)
    }, [FILMS_API, dispatch])

    useEffect( () => {
        fetchData().then(() => setLoading(false));
    }, [fetchData])
    return(
        <div className="container-fluid">
            <h4>Popular Movies</h4>
            <div className="row">
                <Films />
            </div>
        </div>
    )
}

export default SearchScreen;