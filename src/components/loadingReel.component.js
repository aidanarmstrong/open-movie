import React from "react";
import {isMobile} from 'react-device-detect';
import Slider from "react-slick";
import loadingImage from "../assets/imgs/loading-img.png";

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
    centerMode: false,
};

const LoadingReel = () => {
    const getLength = checkIsMobile() + 1;
    const loadingArray = [ ...Array(getLength).keys() ].map( i => { return { id: +i } } );

    function loading() {
        return loadingArray.map( (loader, key) => (
            <div className="col-md-3">
                <div className="movie" key={key}>
                    <img className="movie-img"
                         src={loadingImage}
                         alt="loading" />
                    <div className="movie-over">
                        <div className="movie-info">
                    <span>
                        <h3>Loading</h3>
                    </span>
                        </div>
                        <div className="movie-overview">
                            <h3>Description</h3>
                            <p>Loading description</p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <Slider {...config}>
            {loading()}
        </Slider>
    );
}

export default LoadingReel;
