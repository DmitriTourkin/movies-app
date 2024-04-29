class Api {
  constructor() {
    this.accessToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTE2YmI5ODY3MWRhNWExMDBiYTIyNTcxYmM2ODJlOCIsInN1YiI6IjY2MmFkYjEwOWFjNTM1MDExYzhlZDk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.612kZ6M7TfpjWhCmAt7zSGnJk-lotMDaNP2uX_vMpA8';
    this.apiKeyAuth = '5a16bb98671da5a100ba22571bc682e8'

    this.headers = {
      accept: 'application/json',
      Authorization: this.accessToken
    }

    this.language = 'ru-RU';
    this.pageNumber = 1;
  }

  async getTopRatedFilms() {
    try { 
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKeyAuth}&language=${this.language}&page=${this.pageNumber}`, {method: 'GET', headers: this.headers});
      if (!response.ok) {
        const filmsArray = await response.json();
        return filmsArray;
      }
    } catch(error) {
      console.log(error)
      return [];
    }
  };

  async getFilmById(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ru-RU`;
    const options = {method: 'GET', headers: this.headers};
    try {
      const response = await fetch(url, options); 
      if (!response.ok) {
        const data = await response.json();
        return data
      } 
    } catch {
      return [];
    }
  }

  async getSimilarFilms(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=ru-RU&page=1`;
    const options = {method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTE2YmI5ODY3MWRhNWExMDBiYTIyNTcxYmM2ODJlOCIsInN1YiI6IjY2MmFkYjEwOWFjNTM1MDExYzhlZDk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.612kZ6M7TfpjWhCmAt7zSGnJk-lotMDaNP2uX_vMpA8'}};
    
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const data = await response.json();
        console.log('data', data);
        return data.results;
      }
    } catch(err)  {
      console.error(err)
      return [];
    }
  }
}

export default Api;