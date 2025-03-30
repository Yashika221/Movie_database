import React from "react"
import { useParams } from "react-router-dom";
import moviesData from "../resources/movie_data.json";
import Card from "./Card";
import Navbar from './Navbar';
/* Movie Details constant is creating to show hidden details of movie by clicking on Movie_cards*/
const MovieDetail = () => {
    const { id } = useParams();
    const movie = moviesData.movies.find((m) => m.id === parseInt(id));

    return (
        <>

            <Navbar />
            <div className="movie-detail">

                <h2>{movie.title}</h2>
                <p>{movie.plot}</p>
                <p>Director: {movie.director}</p>
                <p>Release Year: {movie.release_year}</p>
                <p>Movie Summary:{movie.plot_summary}</p>
                <p>Rating: {movie.rating}/10</p>
                <p>Genre: {movie.genre.join(" , ")}</p>
                <p>Cast: {movie.cast.join(" , ")}</p>
                <p>Cast_details:{movie.cast_details.join(" , ")}</p>
            </div>
        </>
    );
};

export default MovieDetail;
