import React, { useState } from "react";
import { Card } from "antd";
import MovieInformation from "../../Container/MovieInformation";
import "./MovieCard.css";

const MovieCard = (lol) => {
  const [isVisible, setIsVisible] = useState(false);
  const movieData = lol;

  return (
    <>
      <Card
        className="custom-card"
        hoverable
        cover={
          <img
            alt="#"
            src={`https://image.tmdb.org/t/p/w500/${movieData.movieData.poster_path}`}
          />
        }
        onClick={() => setIsVisible(true)}
      />
      <MovieInformation
        visible={isVisible}
        setOpen={setIsVisible}
        movieData={movieData}
      />
    </>
  );
};

export default MovieCard;
