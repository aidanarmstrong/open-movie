import React, {useState} from "react";
import moment from "moment";
import loadingImage from "../assets/imgs/loading-img.png";
import noImageFound from "../assets/imgs/no-img-found.png";

const Movie = ({movie}) => {
    const {title, poster_path, overview, vote_average, release_date} = movie;
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

    return(
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
    )
}

export default Movie;
