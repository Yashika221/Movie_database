import react from "react";
/* Create a constant so that we store movie details in a single card*/
/*Give different class names so that it makes easy to do styling  */
const Card = ({ movie }) => {
    console.log(movie)
    return (
        <>
            <div className="Movie">
                <img src={movie.image} className="poster"></img>
                <div className="Movie-details">
                    <div className="box">
                        <h4 className="Title">{movie.title}</h4>
                        <p className="rating">{movie.rating}</p>
                        <p className="Title">{movie.release_year}</p>
                        <p className="Title">{movie.genre.join(" , ")}</p>


                    </div>
                </div>
            </div>
        </>
    )
}
/* .join(",") method is used to join splitted array form data */
export default Card;