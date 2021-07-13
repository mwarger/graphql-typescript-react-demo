import { useState, useRef, useEffect } from 'react';

const PADDINGS = 110;

const useCarousel = (elementWidth: number, countElements: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    const theRef = containerRef.current;
    const containerWidth = theRef ? theRef.clientWidth - PADDINGS : 0;

    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
  }, [elementWidth, countElements]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const carouselProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return {
    handlePrev,
    handleNext,
    carouselProps,
    containerRef,
    hasPrev,
    hasNext,
  };
};

export default useCarousel;
