import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import loadingImage from "../../assets/imgs/loading-img.png";
import noImageFound from "../../assets/imgs/no-img-found.png";
import moment from "moment";
import Slider from "react-slick";
import {isMobile} from "react-device-detect";

function checkIsMobile() {
    if(isMobile){
        return 2
    }
    return 9
}

const ShowScreen = () => {

    const [data, setData] = useState([]);
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true)

    const config = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: checkIsMobile(),
        slidesToScroll: checkIsMobile(),
        centerMode: false, // enable center mode
    };

    const {category, id, title} = useParams();
    const {REACT_APP_API_KEY, REACT_APP_IMG_API} = process.env;

    const Details_API = `https://api.themoviedb.org/3/${category}/${id}?api_key=${REACT_APP_API_KEY}`
    const Credit_Details_API = `https://api.themoviedb.org/3/${category}/${id}/credits?api_key=${REACT_APP_API_KEY}`;


    const fetchData = useCallback(async () => {

        await getShowCredits(Credit_Details_API);
        await getShowDetails(Details_API);

        function getShowDetails(API){
            axios.get(API)
                .then(function (data){
                    category === 'movie' ?  data.isMovie = true :  data.isMovie = false;
                    setData(data.data);
                    setLoading(false);
                })
                .catch(function (error) {
                    setLoading(true);
                    console.log(error);
                })
        }
        function getShowCredits(API){
            axios.get(API)
                .then(function (data){
                    setCredits(data.data);
                    setLoading(false);
                })
                .catch(function (error) {
                    setLoading(true);
                    console.log(error);
                })
        }
    
    }, [Credit_Details_API, Details_API, category])

    useEffect(() =>{
        fetchData();
    }, [fetchData])


    const getImage = (path) => {
        if(path){
            return REACT_APP_IMG_API + path;
        }
        return noImageFound;
    }

    if (loading){
        return (
            <div className="container-fluid mt-xl-5">
                <div className="row mx-auto">
                    <div className="col-md-3 col-lg-3">
                        <div>
                            <div className="movie-info">
                                <h2>Loading....</h2>
                            </div>
                            <div className="movie-screen">
                                <div className="movie-screen-img">
                                    <img className="img-fluid" src={loadingImage} alt={title}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-8">
                        <div style={{width: '100%'}}>
                            <h2>Description</h2>
                            <abbr/>
                            <p className="f-18">loading...</p>
                        </div>
                        <div>
                            <h3>Cast</h3>
                            loading...
                        </div>

                    </div>
                </div>
            </div>
        )
    }


    function castList() {
        if(Object.keys(credits).length > 0){
            return credits.cast.map((person, key) => (
                <div className="cast-member-container" key={key}>
                    <div className="cast-member">
                        <img className="cast-member-img" src={getImage(person.profile_path)} alt={person.name}/>
                        <div className="cast-member-overflow mx-auto">
                            <h1>{person.character}</h1>
                            <h2 className="light-text">{person.name}</h2>
                        </div>
                    </div>
                </div>
            ))
        }
        return (
            <p>No cast has been found.</p>
        )
    }

    if(data){
        if(Object.keys(data).length > 0){

            const {poster_path, overview, release_date, vote_average} = data;
            const title = data.title ? data.title : data.name ? data.name : "Unknown title";

            return(
                <div className="container-fluid mt-xl-5">
                    <div className="row mx-auto">
                        <div className="col-md-3 col-lg-3">
                            <div>
                                <div className="movie-screen-info">
                                    <h2>{title}</h2>
                                    <h5 className="movie-screen-info-date light-text">({moment(release_date).format('YYYY')})</h5>
                                </div>
                                <div className="movie-screen">
                                    <div className="movie-screen-img">
                                        <img className="img-fluid" src={getImage(poster_path)} alt={title}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-8 pl-5">
                            <div style={{width: '100%'}}>
                                <h2>Overview</h2>
                                <abbr/>
                                <p className="f-18">{overview ? overview : "No overview found"}</p>
                            </div>
                            <div>
                                <h3>Cast</h3>
                                <Slider {...config}>
                                    {castList()}
                                </Slider>
                            </div>
                            <div>
                                <h3>Rating:</h3>
                                <h4>{vote_average}
                                    <span className="light-text"> / 10.0</span>
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }

    return <div/>
}

export default ShowScreen;