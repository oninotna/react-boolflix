import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const urlMovieSearchApi = import.meta.env.VITE_API_SEARCH_MOVIE_URL;
const urlMoviePopularApi = import.meta.env.VITE_POPULAR_MOVIE_API_URL;
const urlSerieSearchApi = import.meta.env.VITE_API_SEARCH_SERIES;
const urlSeriesPopularApi = import.meta.env.VITE_API_POPULAR_SERIES;


const MovieContext = createContext();

function MovieProvider({ children }) {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [moviePopularData, setMoviePopularData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [seriesPopularData, setSeriesPopularData] = useState([]);
  

  const searchMovie = (search) => {
    if (search !== "") {
      axios.get(`${urlMovieSearchApi}${apiKey}${search}`).then((res) => {
        setMovieData(res.data.results);
        console.log(res.data.results);
      });
    }
    else {setMovieData(moviePopularData)}

    if (search !== "") {
      axios.get(`${urlSerieSearchApi}${apiKey}${search}`).then((res) => {
        setSeriesData(res.data.results);
        console.log(res.data.results);
      });
    }
    else {setSeriesData(seriesPopularData)}
  };

  useEffect(() => {
    axios.get(`${urlMoviePopularApi}${apiKey}`).then((res) => {
        setMoviePopularData(res.data.results)
        console.log(res.data.results);
    });

    axios.get(`${urlSeriesPopularApi}${apiKey}`).then((res) => {
      setSeriesPopularData(res.data.results);
      console.log(res.data.results);
    })
  }, []);

  const contextData= {movieData, moviePopularData, seriesPopularData, seriesData, search, setSearch, searchMovie }

  return (
    <MovieContext value={contextData}>{children}</MovieContext>
  );
}

function useMovie() {
  return useContext(MovieContext);
}

export { MovieProvider, useMovie };
