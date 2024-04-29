import './App.css';
import TopMoviesPage from './pages/TopMoviesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilmDetailedCard from './components/FilmDetailedCard';
import LendingPage from './pages/LendingPage';
import './styles/components-styles/error.css'
import './styles/fonts.css';
import Test from './pages/Test';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<LendingPage/>}/>
            <Route path="/movies" element={<TopMoviesPage/>}/> 
            <Route path="/movies/:movieId" element={<FilmDetailedCard/>}/>
            <Route path="/movies/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
