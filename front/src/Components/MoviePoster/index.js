import React from "react";
import { Card } from "antd";
import "./MoviePoster.css";

const MoviePoster = (props) => {
  const { movieData } = props;
  return (
    <Card
      className="size"
      cover={
        <img
          alt="#"
          src={`https://image.tmdb.org/t/p/w500/${movieData.movieData.poster_path}`}
          className="designCard"
        />
      }
    />
  );
};

export default MoviePoster;
