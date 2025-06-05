import { useMovie } from "../Contexts/MovieContext";
import MediaList from "./MediaList";

export default function Main () {
    const {moviePopularData, movieData} = useMovie();

    const movieListToDisplay = movieData.length ? movieData : moviePopularData;

    return (
        <div className="container">
            <MediaList media={movieListToDisplay} title={"Movies"}/>
        </div>
    )
}