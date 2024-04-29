import { createContext, useEffect, useState, useCallback, useMemo, use} from 'react';
import { Skeleton } from '@mui/material';

const TopFilmsContext = createContext();

const TopFilmsContextProvider = ({ children }) => {
  const [filmsData, setFilmsData] = useState([]);
  const [isLoadingFailed, setLoadingFailed] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchFilmsData = useCallback(async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${pageNumber}`, 
        { method: 'GET',headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTE2YmI5ODY3MWRhNWExMDBiYTIyNTcxYmM2ODJlOCIsInN1YiI6IjY2MmFkYjEwOWFjNTM1MDExYzhlZDk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.612kZ6M7TfpjWhCmAt7zSGnJk-lotMDaNP2uX_vMpA8'
        }
       }); 
      const filmsArray = await response.json();
      setFilmsData(filmsArray.results || []);
      setTotalPages(filmsArray.total_pages);
    } catch {
      setLoadingFailed(true);
    }
  });

  const memoizedFilmsData = useMemo(() => filmsData, [filmsData]);

  useEffect(() => {
    fetchFilmsData();
  }, []);

  useEffect(() => {
    fetchFilmsData();
  }, [pageNumber]);

  return (
    <TopFilmsContext.Provider value={{
      moviesData: memoizedFilmsData, 
      totalPages: totalPages,
      currentPage: pageNumber, 
      setPageNumber}
    }>
      {children}
      {isLoadingFailed ? (
        <div className='error-container'>
          <h1 className='error-message'>Не удаётся установить соединение с сайтом.
Сайт api.themoviedb.org не позволяет установить соединение. 😡 Такое иногда случается — перепроверьте api_key</h1>
        </div>
      ) : ""}
    </TopFilmsContext.Provider>
  );
};

export {TopFilmsContext, TopFilmsContextProvider};
