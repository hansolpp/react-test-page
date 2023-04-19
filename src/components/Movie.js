import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImage, title, year, summary, genres, id }) {
  return (
    <div className={styles.movie} key={id}>
      <img className={styles.movie__img} src={coverImage} alt={title} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres} key={genres.index}>
        {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  id: propTypes.number.isRequired,
};

export default Movie;
