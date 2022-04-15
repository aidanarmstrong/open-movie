import React from "react";
import {isMobile} from 'react-device-detect';
import Slider from "react-slick";
import Show from "../show";

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

    const shows = dataList;

    function showList() {
        return shows.map((show, key) => (
            <Show show={show} key={key}/>
        ))
    }

    if(shows.length > 0){
        return (
            <Slider {...config}>
                {showList()}
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
