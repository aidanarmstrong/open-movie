import React from "react";
import {useHistory, useParams} from "react-router-dom";

const MovieScreen = (props) => {
    const history = useHistory();

    const {title, year} = useParams();

    function formatTitleNoDash(title){
        return title.replace(/-/g, ' ')
    }

    if(props.location.state){
        const movie = props.location.state.movie;

       if(Object.keys(movie).length > 0){

           const {image, overview} = movie;
           return(
               <div className="container-fluid mt-xl-5">
                   <div className="row mx-auto">
                       <div className="col-md-3 col-lg-3">
                           <div>
                               <div className="movie-info">
                                   <span>
                                        <h2>{formatTitleNoDash(title)}</h2>
                                   </span>
                                   <h5>({year})</h5>
                               </div>
                               <div className="movie-screen">
                                   <div className="movie-screen-img">
                                       <img className="img-fluid" src={image} alt={title}/>
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

    history.push({
        pathname:'/404',
    });

    return <div/>

}

export default MovieScreen;
