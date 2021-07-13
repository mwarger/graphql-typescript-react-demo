import React from "react";
import { FaChevronCircleDown } from 'react-icons/fa';

import "./CarouselButton.scss"

export const CarouselButton = ({ onClick, type }: any) => (
  <button className={`carousel-button carousel-button--${type}`} onClick={onClick}>
    <span>
      <FaChevronCircleDown size="2em" />
    </span>
  </button>
);