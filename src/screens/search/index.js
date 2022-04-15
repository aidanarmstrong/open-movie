import React from "react";
import Search from "../../components/search";
import {getMovies} from "../../api/movies.api";
import {useDispatch} from "react-redux";

const SearchScreen = (props) => {
    const {REACT_APP_API_KEY} = process.env;
    const SEARCH_API =  "https://api.themoviedb.org/3/search/multi?api_key="+ REACT_APP_API_KEY +"&language=en-US&page=1&include_adult=false&query=";
    const dispatch = useDispatch();

    const searchTerm = props.location.searchTerm ?? new URLSearchParams(props.location.search).get("query");

    function formatTitleNoDash(title){
        return title.replace(/-/g, ' ')
    }

    if (searchTerm){
        getMovies(SEARCH_API + searchTerm, dispatch)
    }

    return(
        <div className="container-fluid">
            <h4>Searching for: {formatTitleNoDash(searchTerm)}</h4>
            <div className="row">
                <Search />
            </div>
        </div>
    )
}

export default SearchScreen;