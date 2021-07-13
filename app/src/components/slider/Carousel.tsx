import React, { FC, useState, useRef } from 'react';
import { Slide } from '@material-ui/core';
import cx from 'classnames';
import useCarousel from './useCarousel';
import useSizeElement from './useSizeElement';
import { CarouselContext, CarouselContextProps } from './CarouselContext';
import { CarouselButton } from './CarouselButton';
import { MovieDetail } from '../MovieDetail';

import './Carousel.scss';
import { Movie } from '../../generated/graphql';

type CarouselProps = {
  title: string;
  activeMovie?: any;
};

export const Carousel: FC<CarouselProps> = (props) => {
  const [currentMovie, setCurrentMovie] = useState<Movie | undefined>(
    props.activeMovie,
  );
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    carouselProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useCarousel(width, React.Children.count(props.children));

  const titleRef = useRef<HTMLDivElement>(null);

  const handleSelect = (movie: Movie) => {
    setCurrentMovie(movie);
  };

  const handleClose = () => {
    setCurrentMovie(undefined);
    const theRef = titleRef.current;
    theRef?.scrollIntoView({ behavior: 'smooth' });
  };

  const contextValue: CarouselContextProps = {
    onSelectMovie: handleSelect,
    onCloseDetail: handleClose,
    elementRef,
    currentMovie,
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <div className="carousel-wrapper">
          <div
            className={cx('carousel', {
              'carousel--open': currentMovie != null,
            })}
          >
            <div
              ref={containerRef}
              className="carousel__container"
              {...carouselProps}
            >
              {props.children}
            </div>
          </div>
          {hasPrev && <CarouselButton onClick={handlePrev} type="prev" />}
          {hasNext && <CarouselButton onClick={handleNext} type="next" />}
        </div>
      </Slide>
      {currentMovie && (
        <MovieDetail id={currentMovie.id.toString()} onClose={handleClose} />
      )}
    </CarouselContext.Provider>
  );
};
