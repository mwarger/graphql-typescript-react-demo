import React from 'react';

import { Carousel } from '../components/slider/Carousel';
import { MoviePoster } from '../components/slider/MoviePoster';
import { useNowPlayingQuery } from '../generated/graphql';

export const NowPlaying = () => {
  const { loading, error, data } = useNowPlayingQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const movies = data?.nowPlaying ?? [];
  return (
    <Carousel title="Now Playing">
      {movies.map((movie) => (
        // TODO: fix this type
        <MoviePoster movie={movie} key={movie.id} />
      ))}
    </Carousel>
  );
};
