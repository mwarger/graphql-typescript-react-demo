import { useState, useRef, useEffect } from 'react';

const useSizeElement = () => {
  const elementRef = useRef<HTMLElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (elementRef && elementRef.current) {
      setWidth(elementRef.current.clientWidth);
    }
  }, []);

  return { width, elementRef };
};

export default useSizeElement;
