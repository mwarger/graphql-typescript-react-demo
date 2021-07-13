import React from 'react';

import { Carousel } from '../components/slider/Carousel';
import { MoviePoster } from '../components/slider/MoviePoster';
import { usePopularQuery } from '../generated/graphql';

export const Popular = () => {
  const { loading, error, data } = usePopularQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Carousel title="Popular">
      {data?.popular?.map((movie) => (
        <MoviePoster movie={movie} key={movie.id}></MoviePoster>
      ))}
    </Carousel>
  );
};
