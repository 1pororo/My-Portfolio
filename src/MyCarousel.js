import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// MyCarousel > CarouselContainer > Carousel > Slide

const Carousel = styled.div`
  display: flex;
  overflow-x: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: max-width 0.4s cubic-bezier(0.4, 2, 0.4, 0.6);
`;
const Slide = styled.div`
  flex: 0 0 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CarouselContainer = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextIndex = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevIndex = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Carousel className="max-w-56 hover:max-w-60 overflow-hidden">
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
      <Buttons>
        <button onClick={prevIndex}>
          <FontAwesomeIcon icon="arrow-left" />
        </button>
        <button onClick={nextIndex}>
          <FontAwesomeIcon icon="arrow-right" />
        </button>
      </Buttons>
    </div>
  );
};

const MyCarousel = ({ slides }) => {
  return <CarouselContainer slides={slides} />;
};

export default MyCarousel;
