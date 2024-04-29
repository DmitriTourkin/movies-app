import React, { useState } from "react";
import defaultImage from '../default-images/pictures-day.svg'
import { LinearProgress } from "@mui/material";

export default function FilmFeedCard(props) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  return (
      <article className="feed-film-card">
        {!imageLoaded && <LinearProgress color="inherit"/>}
        <img 
          className="film-image" 
          src={`${imageBaseUrl + props.filmData.poster_path}`} 
          onLoad={handleImageLoad}
          onError={(e) => { e.target.src = defaultImage; setImageLoaded(true); }} 
          style={{ display: imageLoaded ? "block" : "none" }}
          alt={`${props.filmData.title}`}
        />
        <div className="film-details">
            <>
              <p className="film-rate">{props.filmData.vote_average.toFixed(1)}</p>
              <div className="film-info">
                <p className="film-title">{props.filmData.title}</p>
                <p className="film-publication-date">Релиз: {props.filmData.release_date}</p>
              </div>
            </>
        </div>
      </article>
  )
}
