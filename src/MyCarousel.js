import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// MyCarousel > CarouselContainer > Carousel > Slide

const Carousel = styled.div`
  display: flex;
  overflow-x: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: width 0.4s cubic-bezier(0.4, 2, 0.4, 0.6);
`;
const Slide = styled.div`
  flex: 0 0 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  background: black;
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
    <div>
      <Carousel className="w-44 hover:w-48">
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
        {currentIndex > 0 && (
          <FontAwesomeIcon onClick={prevIndex} icon="arrow-left" />
        )}
        {currentIndex !== slides.length - 1 && (
          <FontAwesomeIcon onClick={nextIndex} icon="arrow-right" />
        )}
      </Buttons>
    </div>
  );
};

const MyCarousel = ({ slides }) => {
  return <CarouselContainer slides={slides} />;
};

export default MyCarousel;
