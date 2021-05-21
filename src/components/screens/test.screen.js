import React, {useState} from "react";
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import noImageFound from "../../assets/imgs/no-img-found.png";
import loadingImage from "../../assets/imgs/loading-img.png";

import Slider from "react-slick";

const config = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: false, // enable center mode
};

const Test = () => {
    const movies = useSelector((state) => state.movies.movies );
    const [loading, setLoading] = useState(true)
    const {REACT_APP_IMG_API } = process.env;
    const getImage = (path) => {
        if(path){
            if(loading){
                return  loadingImage;
            }
            return REACT_APP_IMG_API + path;
        }

        return noImageFound;
    }

    function movieList() {
        return movies.map((movie, key) => {
            const {title, poster_path, overview, vote_average, release_date} = movie;
            return(
                <div className="col-x-sm-3" key={key}>
                    <div className="movie">
                        <img className="movie-img"
                             src={getImage(poster_path)}
                             onLoad={() => setLoading(false)}
                             alt={title} />
                        <div className="movie-over">
                            <div className="movie-info">
                            <span>
                                <h3>{title ? title : "Unknown title"}</h3>
                                {moment(release_date).format('YYYY')}
                            </span>
                                <span>{vote_average}</span>
                            </div>
                            <div className="movie-overview">
                                <h3>Description</h3>
                                <p>{overview ? overview : 'No description available'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    if(movies.length > 0){
        return (
            <Slider {...config}>
                {movieList()}
            </Slider>
        );
    }


    return (
        <div className="mx-auto">
            <h3>No movies found</h3>
        </div>
    )
}

export default Test;
