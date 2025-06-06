import { useMovie } from "../../Contexts/MovieContext";

export default function SearchBar() {
  const { searchMovie, search, setSearch } = useMovie();


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    searchMovie(search);
  };

  return (
    <form className="d-flex py-3 px-5 my-2 gap-3 justify-content-end" onSubmit={handleSubmit}>
      <input
        className="form-control input-search"
        type="text"
        onChange={(e) => {
          const title = e.target.value;
          setSearch(title);
        }}
      />
      <button className="btn btn-danger px-5" type="submit">
        Search
      </button>

    </form>
  );
}
