import React, {useState} from "react";
import moment from "moment";
import loadingImage from "../../assets/imgs/loading-img.png";
import noImageFound from "../../assets/imgs/no-img-found.png";
import {useHistory} from "react-router-dom";

const Movie = ({show}) => {
    const history = useHistory();

    const {REACT_APP_IMG_API } = process.env;
    const {id, poster_path, overview, vote_average, release_date, isMovie} = show;
    const [loading, setLoading] = useState(true)


    const title = show.title ? show.title : show.name ? show.name : "Unknown title";
    const category = show.isMovie ? "movie" : 'tv';

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
                //  setLoading(true);
                 console.log(category);
                //  history.push({
                //      pathname:'/'+ category + '/'  + id + '/' + formatTitle(title) + '/' + moment(release_date).format('YYYY'),
                //      state: {"isMovie": isMovie}
                //  });
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
