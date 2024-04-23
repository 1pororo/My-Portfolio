import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`;

const Slide = styled.div`
  flex: 0 0 100%;
`;

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img src={slide.src} alt={slide.id} />
          </Slide>
        ))}
      </CarouselContainer>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

const MyCarousel = ({ slides }) => {
  return <Carousel slides={slides} />;
};

export default MyCarousel;

// {images.map((image) => {
//   return (
//     <li key={image.id} className="border-dashed">
//       <img src={image.src} alt={image.id} />
//     </li>
//   );
// })}
