import React, { useEffect, useCallback } from "react";
import TvShows from "../../components/tvShows";
import {getTvPopular} from "../../api/tv.api";
import {useDispatch} from "react-redux";
import {setLoading} from "../../actions/loading.action";

const SearchScreen = (props) => {
    const {REACT_APP_API_KEY} = process.env;
    const POPULAR_TV_SHOWS = `https://api.themoviedb.org/3/tv/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`;
    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        await getTvPopular(POPULAR_TV_SHOWS, dispatch)
    }, [POPULAR_TV_SHOWS, dispatch])

    useEffect( () => {
        fetchData().then(() => setLoading(false));
    }, [fetchData])
    return(
        <div className="container-fluid">
            <h4>Popular Movies</h4>
            <div className="row">
                <TvShows />
            </div>
        </div>
    )
}

export default SearchScreen;