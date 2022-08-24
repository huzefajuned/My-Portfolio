import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
import cuvette from "../../img/cuvette.png";
import Electronics from "../../img/Electronics.png";
import zafarcomputer from "../../img/zafarcomputer.png";
import systrixinfotech from "../../img/systrixinfotech.png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        // spaceBetween={200}
        // slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://systrixinfotech.netlify.app/">
            <img src={systrixinfotech} alt="systrixinfotech" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://zafarcomputer.in/">
            <img src={zafarcomputer} alt="zafarcomputer-ecom-link" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/huzefajuned/Electronics_2.0">
            <img src={Electronics} alt="electonics-ecom-link" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={cuvette} alt="cuvette-api-link" />
          </a>
        </SwiperSlide>

        {/* <SwiperSlide>
          <a href="">
            <img src={cuvette} alt="cuvette-api-link" />
          </a>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
