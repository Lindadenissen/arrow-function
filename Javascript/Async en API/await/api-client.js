const MY_API_KEY = "73c1ee41e10f5d52a2e62d037efa4216";
const REQUEST_TOKEN = "9003b906013010380e806a7af33a06e6be4cdf98"
const SESSION_ID = "60f5aa22169322b43f72bbd3f49cb5d1223ef1aa"
//favorite movie http://api.themoviedb.org/3/find/tt0111161?external_source=imdb_id&api_key=73c1ee41e10f5d52a2e62d037efa4216;
//top rated movie http://api.themoviedb.org/3/movie/top_rated?api_key=73c1ee41e10f5d52a2e62d037efa4216&page=1&with_genres=28
//1975 movies https://api.themoviedb.org/3/discover/movie?year=1975&api_key=73c1ee41e10f5d52a2e62d037efa4216&page=1
/*rating the movie {
    "success": true,
    "status_code": 12,
    "status_message": "The item/record was updated successfully."}
*/
/*deleting the movie {
    {
    "success": true,
    "status_code": 13,
    "status_message": "The item/record was deleted successfully."}
    */

const getData = async () => {
  const apiUrl = `http://api.themoviedb.org/3/genre/movie/list?api_key=${MY_API_KEY}`;

  try {
    const res = await fetch(apiUrl, {method: "GET"});
    const result = await res.json();
    //console.log(result);
    return result;
  } catch (err) {
    console.log("er is iets fout gegaan");
  }
}

const getMovieId = async movieId => {
  const apiUrl = `http://api.themoviedb.org/3/find/tt0111161?external_source=imdb_id&api_key=${MY_API_KEY}`;

  try {
    const res = await fetch(apiUrl, {method: "GET"});
    const result = await res.json();
    return result;
  } catch (err) {
    console.log("er is iets fout gegaan");
  }
}

const getTopRatedMovies = async () => {
  const apiUrl = `http://api.themoviedb.org/3/movie/top_rated?page=1&api_key=${MY_API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getMoviesFrom1975 = async () => {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?year=1975&api_key=${MY_API_KEY}&page=1`;

  try{
    const res = await fetch(apiUrl, { method: "GET" });
    return await res.json();
  }catch(error){
    console.log(error);
  }
};
