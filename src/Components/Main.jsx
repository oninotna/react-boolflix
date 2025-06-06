import { useMovie } from "../Contexts/MovieContext";
import MediaList from "./MediaList";

export default function Main () {
    const {moviePopularData, movieData, seriesPopularData, seriesData} = useMovie();

    const movieListToDisplay = movieData.length ? movieData : moviePopularData;
    const seriesToDisplay = seriesData.length ? seriesData : seriesPopularData;

    return (
      <>
        <MediaList media={movieListToDisplay} title={"Movies"} />
        <MediaList media={seriesToDisplay} title={"Series"} />
      </>
    );
}