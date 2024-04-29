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
      const filmsArray = await response.json();
      return filmsArray;
    } catch {
      let emptyArray = [];
      return emptyArray;
    }
  };

  async getFilmById(id) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${this.pageNumber}`,
      { method: 'GET',headers: this.headers }
     ); 
    const filmsArray = await response.json();
    } catch {
      return true;
    }
  }

  async getSimilarFilmsTo(id) {
    console.log('hi');
  }
}

export default Api;