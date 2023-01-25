"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  imageUrls: string[];
}

const ImageCarousel: React.FC<Props> = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageUrls.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === imageUrls.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative p-4">
      <img
        src={imageUrls[currentIndex]}
        className="w-full h-96 object-center object-cover"
      />

      <button
        className="absolute top-[192px] left-0 p-2  bg-white rounded-full"
        onClick={handlePrevious}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          width={"1.5em"}
          height={"1.5em"}
        ></FontAwesomeIcon>
      </button>
      <button
        className="absolute top-[192px] right-0 p-2  bg-white rounded-full"
        onClick={handleNext}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          width={"1.5em"}
          height={"1.5em"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ImageCarousel;
