import { useEffect, useState} from "react";
import FilmFeedCard from "./FilmFeedCard";
import {Link} from 'react-router-dom';
import '../styles/components-styles/alike-films-strip.css';

export default function AlikeFilmsDataStrip(props) {

  const id = props.movieId;
  const [similarFilms, setSimilarFilms] = useState([]);
  const [error, setError] = useState(null);


  const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=ru-RU&page=1`;
  const options = {method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTE2YmI5ODY3MWRhNWExMDBiYTIyNTcxYmM2ODJlOCIsInN1YiI6IjY2MmFkYjEwOWFjNTM1MDExYzhlZDk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.612kZ6M7TfpjWhCmAt7zSGnJk-lotMDaNP2uX_vMpA8'}};
  
  const getSimilarFilms = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Не получилось получить информацию о похожих фильмах');
      }
      const data = await response.json();
      console.log('data', data);
      setSimilarFilms(data.results);
      
    } catch (err) {
      setError(err.message);
    }
    
  }

  useEffect(() => {
    getSimilarFilms();
  }, [id]);

  if (error) {
    return <div className="alike-films-error">Что-то пошло нет так: <br/>кажется такого фильма не существует 😰</div>;
  }


  return (
    <>
      {!!similarFilms && <h1>Похожие фильмы</h1>}
      <ul className="alike-films"> 
        {similarFilms?.map(similarFilm => (
          <li className="film-list-item" key={similarFilm.id}>
            <Link className="link-to-movie" to={`/movies/${similarFilm.id}`}>
              <FilmFeedCard filmData={similarFilm}/>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}