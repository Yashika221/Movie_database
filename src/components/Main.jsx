import react, { useState, useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import moviesData from "../resources/movie_data.json";
/*JSON file is created to store all data related to our project*/
/* This is main file of our project that includes all functions and usestate.useeffect hooks of react */
const allMovies = moviesData.movies;
const Main = () => {
  const [movies, setMovies] = useState(allMovies);
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  /* UseEffect() is used to filter data */
  useEffect(() => {
    let filteredMovies = allMovies;
    /* Apply conditional statements to handle different cases */

    if (searchText.trim()) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre?.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
      );
    }

    if (selectedRating) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.rating >= parseFloat(selectedRating)
      );
    }

    if (selectedYear) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.release_year === Number(selectedYear)
      );
    }

    setMovies(filteredMovies);
  }, [searchText, selectedGenre, selectedRating, selectedYear]);
  /* Take constants to reset automatically just clicking on home page */
  const years = Array.from({ length: 26 }, (_, i) => 2025 - i);
  const resetFilters = () => {
    setMovies(allMovies);
    setSearchText("");
    setSelectedGenre("");
    setSelectedRating("");
    setSelectedYear("");
  };
  const handleSearchClick = () => {
    setTriggerSearch((prev) => !prev); // 👀 Toggle state to re-run useEffect
  };

  return (
    <>
      <div className="Header">
        <button onClick={resetFilters} className="home-button">
          Home Page
        </button>
        <div className="Heading"><h1>Movie  Flix</h1></div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="search_button">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="button" onClick={handleSearchClick}>
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="filters">
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
              <option value="">All Genres</option>
              {[...new Set(allMovies.flatMap((movie) => movie.genre))].map(
                (genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                )
              )}
            </select>

            <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
              <option value="">All Ratings</option>
              <option value="9">9+</option>
              <option value="8">8+</option>
              <option value="7">7+</option>
              <option value="6">6+</option>
            </select>

            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="Container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Card movie={movie} />
            </Link>
          ))
        ) : (

          <p className="not-found">Sorry! Movie Not Found</p>
        )}
      </div>
    </>
  );
};

export default Main;
