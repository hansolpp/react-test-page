import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
      )
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h2>{movie.title}</h2>
      <img src={movie.background_image} />
      <p>{movie.rating}</p>
    </>
  );
}
export default Detail;
