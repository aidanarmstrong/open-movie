import React, {useCallback, useEffect, useState} from "react";
import {useParams, useLocation} from "react-router-dom";
import axios from "axios";
import loadingImage from "../assets/imgs/loading-img.png";
import noImageFound from "../assets/imgs/no-img-found.png";
import moment from "moment";

const TestScreen = () => {

    const {id, title, category} = useParams();
    const {REACT_APP_API_KEY, REACT_APP_IMG_API} = process.env;
    const location = useLocation();

    const getDetailsApi = (id, apiKey) => {
        if(!location.state.isMovie){
            return "https://api.themoviedb.org/3/tv/" + id + "?api_key=" + apiKey
        }
        return "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey
    }

    const Details_API = getDetailsApi(id, REACT_APP_API_KEY);
    const Credit_Details_API = "https://api.themoviedb.org/3/" + category + "/" + id +"/credits?api_key=" + REACT_APP_API_KEY;
    const [data, setData] = useState([]);
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true)


    const fetchData = useCallback(async () => {
        await  getShowDetails();
        await getShowCredits();
    }, [Details_API, Credit_Details_API])

    function getShowDetails(){
        axios.get(Details_API)
            .then(function (data){
                setData(data.data);
                setLoading(false);
            })
            .catch(function (error) {
                setTimeout(() => {
                    // todo: set a screen for time out
                    // dispatch(setLoading(false))
                }, 5000);
                console.log(error);
            })
    }
    function getShowCredits(){
        axios.get(Credit_Details_API)
            .then(function (data){
                setCredits(data.data);
                setLoading(false);
            })
            .catch(function (error) {
                setTimeout(() => {
                    // todo: set a screen for time out
                    // dispatch(setLoading(false))
                }, 5000);
                console.log(error);
            })
    }

    useEffect(() =>{
        fetchData().then();
    }, [])


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
                    <div className="col-md-9 col-lg-8 ml-5">
                        <div style={{width: '80%'}}>
                            <h2>Description</h2>
                            <abbr/>
                            <p className="f-18">loading...</p>
                        </div>
                        <div>
                            <h3>Cast</h3>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    if(data){
        if(Object.keys(data).length > 0){

            const {poster_path, overview, release_date} = data;
            const title = data.title ? data.title : data.name ? data.name : "Unknown title";

            return(
                <div className="container-fluid mt-xl-5">
                    <div className="row mx-auto">
                        <div className="col-md-3 col-lg-3">
                            <div>
                                <div className="movie-info">
                                    <h2>{title}</h2>
                                    <h5>({moment(release_date).format('YYYY')})</h5>
                                </div>
                                <div className="movie-screen">
                                    <div className="movie-screen-img">
                                        <img className="img-fluid" src={getImage(poster_path)} alt={title}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-8 ml-5">
                            <div style={{width: '80%'}}>
                                <h2>Description</h2>
                                <abbr/>
                                <p className="f-18">{overview}</p>
                            </div>
                            <div>
                                <h3>Cast</h3>

                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }

    return <div/>

}

export default TestScreen;
