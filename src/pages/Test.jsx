import Api from '../api/Api'

export default function Test() {
  const api = new Api()
  const result = api.getTopRatedFilms();
  console.log('hi', result);

  return (
    <>
    <h1>hello</h1>
    </>
  )
}