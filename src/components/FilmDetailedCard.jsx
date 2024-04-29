import React, { useState, useContext, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import AlikeFilmsDataStrip from './AlikeFilmsDataStrip';
import { TopFilmsContext } from "../contexts/TopFilmsContext";
import '../styles/components-styles/film-detailed-card.css';
import { CircularProgress } from "@mui/material";

const FilmDetailedCard = (props) => {
  const { movieId } = useParams();
  const [film, setFilmData] = useState(null);

  const getFilmById = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ru-RU`;
    const options = {method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTE2YmI5ODY3MWRhNWExMDBiYTIyNTcxYmM2ODJlOCIsInN1YiI6IjY2MmFkYjEwOWFjNTM1MDExYzhlZDk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.612kZ6M7TfpjWhCmAt7zSGnJk-lotMDaNP2uX_vMpA8'}};
    try {
      const response = await fetch(url, options); 
      const data = await response.json();
      setFilmData(data); 
      }
    catch(error) {
      setFilmData(null);
    }
  }

  useEffect(() => {
    getFilmById(movieId);
  }, []);
  

  useEffect(() => {
    getFilmById(movieId);
  }, [movieId, film]);

  return (
    !film ? (
      <div className="loading-details">
        <CircularProgress/>
        <p className="loading">Загрузка данных о фильме...</p>
      </div>
    ) : (
      <div className="page-content">
        <div className="detailed-film-card">
          <Link className="to-best-link" to={"/movies"}>
            <button className="to-best-button">К лучшим фильмам</button>
          </Link>
          <div className="card-container">
            <div className="card-info">
              <div className="card-header">
                <p className="film-vote-average">{film?.vote_average?.toFixed(1)}</p>
                <h1 className="film-title-detailed">{film?.title}</h1>
              </div>
              <div className="film-description">
                <p className="film-description-text">{film?.overview}</p>
                <p className="film-details-text"><span className="accent-field">Популярность: </span>{film?.popularity}</p>
                <p className="film-details-text"><span className="accent-field">Дата выпуска: </span> {film?.release_date}</p>
              </div>
              <ul className="genres-container">
                {film?.genres?.map(genre => (
                  <li className="genre-item" key={genre?.id}>{genre?.name}</li>
                ))}
              </ul>
            </div>
            <img className="film-poster" src={`https://image.tmdb.org/t/p/w500${film?.poster_path}} alt={Постер фильма «${film?.title}»`}/>
          </div>
          <AlikeFilmsDataStrip movieId={movieId}/>
        </div>
      </div>
    ) 
  );
}
  
export default FilmDetailedCard;