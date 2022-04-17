import React from "react";
import {useSelector} from "react-redux";
import Show from "../show";
import LoadingReel from "../loadingReel";

const TvShows = () => {

    const tvShows = useSelector((state) => state.tvShows.tvPopular);
    const loading = useSelector((state) => state.loading.loading);

    if(loading){
        return <LoadingReel />
    }
    
    if(tvShows.length > 0){
        return  tvShows.map( (show, key) => {

            if(show.title || show.overview){
                return(
                    <div className="mx-auto" key={key}>
                        <Show show={show}/>
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

export default TvShows;