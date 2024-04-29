import { useContext } from 'react';
import { TopFilmsContext } from '../contexts/TopFilmsContext';
import { Link } from 'react-router-dom';
import FilmFeedCard from './FilmFeedCard';
import Skeleton from '@mui/material/Skeleton';
import '../styles/components-styles/film-container.css';

const FilmsContainer = () => {
  const moviesData = useContext(TopFilmsContext).moviesData;

  return (
    <ul className='films-container'>
      {moviesData ? (
        moviesData.map(movie => (
          <li className="film-list-item" key={movie.id}>
            <Link className="link-to-movie" to={`/movies/${movie.id}`}>
              <FilmFeedCard filmData={movie}/>
            </Link>
          </li>
        ))
      ) : (
        Array.from({ length: 10 }, (_, index) => (
          <li className="film-list-item" key={index}>
            <Skeleton variant="rect" width={300} height={450} />
          </li>
        ))
      )}
    </ul>
  );
};

export default FilmsContainer;


