const API_KEY = import.meta.env.VITE_API_KEY;

const Request = {
  fetchPopuar: `/discover/movie?api_key=${API_KEY}&include_adult=false&sort_by=popularity.desc`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=28`,
  fetchAnima: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=16`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default Request;
