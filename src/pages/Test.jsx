import Api from '../api/Api'

export default function Test() {
  const api = new Api()
  const result = api.getTopRatedFilms();
  const result2 = api.getSimilarFilms(238);
  const result3 = api.getFilmById(238);

  console.log('result', result);
  console.log('result2 similar_films', result);
  console.log('result3 get_details_about_film', result);

  return (
    <>
    <div>hi there</div>
    </>
  )
}