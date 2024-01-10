import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import logo from "../images/logo.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import YouTube from "react-youtube";
import Courses from "./Courses";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="home_mid">
        <div className="home_mid_left">
          <div className="home_mid_left_1">Always Caring, Always Here</div>
          <p className="home_mid_left_2">Enhance Your Healing Abilities</p>
          <p className="home_mid_left_3">
            Elevate Your Physiotherapy Practice with Our Expert-Led Training
            Programs.
          </p>
          <div className="home_mid_left_4">Book Course</div>
        </div>
        <div className="home_mid_right">
          <Carousel
            className="carousal"
            showThumbs={false}
            width={"40%"}
            autoPlay={true}
          >
            <div className="carousal_content">
              <img src={logo} />
            </div>
            <div className="carousal_content">
              <img src={logo} />
            </div>
            <div className="carousal_content">
              <img src={logo} />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="wide_carousal"></div>

      <div className="yt_section">
        <div className="yt_container">
          <div className="yt_left">
            <div className="yt_left_heading">Know More About Our</div>
            <div className="yt_left_content">Most in Demand Courses</div>
          </div>
          <div className="yt_right">
            <YouTube
              videoId={"DhLpjhhC-ic"} // defaults -> ''
              //   id={string} // defaults -> ''
              //   className={string} // defaults -> ''
              //   iframeClassName={string} // defaults -> ''
              //   style={object} // defaults -> {}
              //   title={string} // defaults -> ''
              //   loading={string} // defaults -> undefined
              //   opts={obj} // defaults -> {}
              //   onReady={func} // defaults -> noop
              //   onPlay={func} // defaults -> noop
              //   onPause={func} // defaults -> noop
              //   onEnd={func} // defaults -> noop
              //   onError={func} // defaults -> noop
              //   onStateChange={func} // defaults -> noop
              //   onPlaybackRateChange={func} // defaults -> noop
              //   onPlaybackQualityChange={func} // defaults -> noop
            />
          </div>
        </div>
      <Courses/>
      </div>


    </div>
  );
}
