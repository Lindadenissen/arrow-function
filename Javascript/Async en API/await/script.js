const FAVORITE_IMDB_ID = "tt0111161";

const addMoviesToDom = async () => {
  const movieList = document.getElementById("movie-list");
  const data = await getData();
  //console.log(data);
  data.genres.forEach(genre => {
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(
      `Genre naam: ${genre.name}, ID: ${genre.id}`);
    newLi.appendChild(liContent);
    movieList.appendChild(newLi);
  });
};

addMoviesToDom();

const setFavoriteMovie = async () => {
  const favoMovie = document.getElementById("favorite-movie");
  const data = await getMovieId("tt0111161");
  console.log(data.movie_results[0].title);
  const newParagraph = document.createElement("p");
  const movieTitle = document.createTextNode(`Title: ${data.movie_results[0].title}`);
  //title:The Shawshank Redemption
  
  newParagraph.appendChild(movieTitle);
  favoMovie.appendChild(movieTitle);
};

setFavoriteMovie();

const setTopRatedMovies = async () => {
  const topRatedList = document.getElementById("top-rated");
  const data = await getTopRatedMovies();
  const topList = data.results.splice(0, 10);
  topList.forEach(movie => {
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(
      `${movie.title}`);
    newLi.appendChild(liContent);
    topRatedList.append(newLi);
  });
};

setTopRatedMovies();

const setMovies1975 = async () => {
  const movieList1975 = document.getElementById("movies-from-1975");
  const data = await getMoviesFrom1975();
  const movieList = data.results.splice(0, 10);
  movieList.forEach(movie => {
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(`${movie.title}`);
    newLi.appendChild(liContent);
    movieList1975.append(newLi);
  });
};

setMovies1975();
