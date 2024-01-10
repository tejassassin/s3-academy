import React from "react";
import Carousel from "react-multi-carousel";
import logo from "../images/logo.jpg";
import "../styles/Course.css";

export default function Courses() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 6000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      {/* <Carousel
        className="course_carousal"
        autoPlay
        infinite
        emulateTouch
        infiniteLoop
        thumbWidth={200}
        responsive={responsive}
      >
        <div className="slide_0">
          <div
            style={{
              backgroundImage: `${logo}`,
            }}
          ></div>
          <p></p>
          <p></p>
          <div></div>
        </div>
      </Carousel> */}
    </div>
  );
}
