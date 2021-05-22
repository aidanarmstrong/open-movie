import React from "react";
import MovieSearch from "../components/search.component";
import {getMovies} from "../api/movies.api";
import {useDispatch} from "react-redux";

const Search = (props) => {
    const {REACT_APP_API_KEY} = process.env;
    const SEARCH_API =  "https://api.themoviedb.org/3/search/multi?api_key="+ REACT_APP_API_KEY +"&language=en-US&page=1&include_adult=false&query=";
    const dispatch = useDispatch();

    const searchTerm = props.location.searchTerm ?? new URLSearchParams(props.location.search).get("query");

    if (searchTerm){
        getMovies(SEARCH_API + searchTerm, dispatch)
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <MovieSearch />
            </div>
        </div>
    )
}

export default Search;
