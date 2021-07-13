import React from 'react';

export type CarouselContextProps = {
  onSelectMovie?: any;
  onCloseDetail?: any;
  elementRef?: any;
  currentMovie?: any;
};

export const CarouselContext = React.createContext<CarouselContextProps>({
  onSelectMovie: undefined,
  onCloseDetail: undefined,
  elementRef: undefined,
  currentMovie: undefined,
});
