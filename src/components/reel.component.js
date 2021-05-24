import React from "react";
import {isMobile} from 'react-device-detect';
import Slider from "react-slick";
import Movie from "./movie.component";

function checkIsMobile() {
    if(isMobile){
        return 1
    }
    return 5
}

const config = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: checkIsMobile(),
    slidesToScroll: checkIsMobile(),
    centerMode: false, // enable center mode
};

const ContainerReel = ({dataList}) => {

    const movies = dataList;

    function movieList() {
        return movies.map((movie, key) => (
            <Movie movie={movie} key={key}/>
        ))
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
            <h3>Nothing found</h3>
        </div>
    )
}

export default ContainerReel;
