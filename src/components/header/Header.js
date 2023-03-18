import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default function Header() {
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{ background: "#141416" }} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className="d-block w-100" style={{ height: "500px" }}
          src="assets/caro1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Marvel</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{ height: "500px" }}
          src="assets/caro2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Best film</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

