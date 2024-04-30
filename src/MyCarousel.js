import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// MyCarousel > CarouselContainer > Carousel > Slide

const Carousel = styled.div`
  display: flex;
  overflow-x: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Slide = styled.div`
  flex: 0 0 100%;
`;

const CarouselContainer = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevIndex = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className=" relative">
      <Carousel>
        {slides.map((image, index) => {
          return (
            <Slide
              key={index}
              style={{
                transform: `translateX(-${currentIndex * 100}% )`,
                transition: `0.5s transform ease `,
              }}
            >
              <img src={image.src} alt={image.id} />
            </Slide>
          );
        })}
      </Carousel>
      <div className=" flex absolute top-0 opacity-0 w-full h-full justify-between hover:opacity-100 px-2">
        <button onClick={prevIndex}>
          <FontAwesomeIcon
            icon="arrow-left"
            className="bg-slate-100 bg-opacity-50 hover:bg-opacity-80 rounded-full py-2 px-2"
          />
        </button>
        <button onClick={nextIndex}>
          <FontAwesomeIcon
            icon="arrow-right"
            className="bg-slate-100 bg-opacity-50 hover:bg-opacity-80 rounded-full py-2 px-2"
          />
        </button>
      </div>
    </div>
  );
};

const MyCarousel = ({ slides }) => {
  return <CarouselContainer slides={slides} />;
};

export default MyCarousel;
