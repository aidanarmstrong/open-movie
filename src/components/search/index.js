import React from "react";
import {useSelector} from "react-redux";
import Movie from "../show";
import LoadingReel from "../loadingReel";

const Search = () => {

    const showsSearch = useSelector((state) => state.movies.movies );
    const loading = useSelector((state) => state.loading.loading);

    if(loading){
        return <LoadingReel />
    }

    if(showsSearch.length > 0){
        return  showsSearch.map( (show, key) => {

            if(show.title || show.overview){
                return(
                    <div className="mx-auto" key={key}>
                        <Movie show={show}/>
                    </div>
                )
            }
            return null
        })
    }

    return (
        <div className="mx-auto">
            <h3>No results found.</h3>
        </div>
    )
}

export default Search;