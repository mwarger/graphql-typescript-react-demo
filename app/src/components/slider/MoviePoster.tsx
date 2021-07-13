import React, { useContext } from 'react';
import cx from 'classnames';
import { CarouselContext } from './CarouselContext';

import './MoviePoster.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Movie } from '../../generated/graphql';

type MoviePosterProps = {
  movie: Movie; // TODO: use the fragment type
};

export function MoviePoster(props: MoviePosterProps) {
  const contextProps = useContext(CarouselContext);

  const isActive =
    contextProps.currentMovie &&
    contextProps.currentMovie.id === props.movie.id;

  return (
    <div
      ref={contextProps.elementRef}
      className={cx('movie-poster', {
        'movie-poster--open': isActive,
      })}
    >
      {props.movie.favorite && (
        <FavoriteIcon className="movie-poster__icon" fontSize="large" />
      )}
      <img
        src={'http://image.tmdb.org/t/p/w342' + props.movie.poster_path}
        alt=""
        onClick={() => contextProps.onSelectMovie(props.movie)}
      />
      {isActive && <div className="mark" />}
    </div>
  );
}
