import React, {useState} from "react";
import moment from "moment";
import loadingImage from "../assets/imgs/loading-img.png";
import noImageFound from "../assets/imgs/no-img-found.png";
import {useHistory} from "react-router-dom";

const Movie = ({movie}) => {
    const history = useHistory();

    const {REACT_APP_IMG_API } = process.env;
    const {poster_path, overview, vote_average, release_date} = movie;
    const [loading, setLoading] = useState(true)


    const title = movie.title ? movie.title : movie.name ? movie.name : "Unknown title";
    const category = movie.media_type ? movie.media_type : 'tv';

    function formatTitle(title){
       return title.replace(/\s/g, '-')
    }

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
        <div className="movie mx-auto"
             onClick={() => {
                 console.log(movie);
                 // const image = getImage(poster_path);
                 movie.image = getImage(poster_path);
                 history.push({
                     pathname:'/'+ category + '/' + formatTitle(title) + '/' + moment(release_date).format('YYYY'),
                     state: {
                         movie: movie
                     }
                 });
             }}
        >
            <img className="movie-img"
                 src={getImage(poster_path)}
                 onLoad={() => setLoading(false)}
                 alt={title} />
            <div className="movie-over">
                <div className="movie-info">
                    <span>
                        <h3>{title}</h3>
                        {moment(release_date).format('YYYY')}
                    </span>
                    <span className="rating">{vote_average}</span>
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
