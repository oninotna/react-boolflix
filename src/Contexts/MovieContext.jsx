import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const urlApi = import.meta.env.VITE_API_URL;
const urlPopularApi = import.meta.env.VITE_POPULAR_API_URL;

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [moviePopularData, setMoviePopularData] = useState([]);
  

  const searchMovie = (search) => {
    if (search !== "") {
      axios.get(`${urlApi}${search}`).then((res) => {
        setMovieData(res.data.results);
        console.log(res.data.results);
      });
    }
    else {setMovieData(moviePopularData)}
  };

  useEffect(() => {
    axios.get(urlPopularApi).then((res) => {
        setMoviePopularData(res.data.results)
        console.log(res.data.results);
    })
  }, []);

  const contextData= {movieData, moviePopularData, search, setSearch, searchMovie }

  return (
    <MovieContext value={contextData}>{children}</MovieContext>
  );
}

function useMovie() {
  return useContext(MovieContext);
}

export { MovieProvider, useMovie };
