import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const images = [
  "image-url-1",
  "image-url-2",
  "image-url-3",
  // Add more image URLs as needed
];

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const SlideshowContainer = styled.div`
  width: 100%;
  height: 300px; /* Set your desired height */
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SlideshowContainer>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        >
          <Image src={imageUrl} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}
    </SlideshowContainer>
  );
};

export default Slideshow;
