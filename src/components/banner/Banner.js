import React from "react";
import slideButton from "../../assets/arrowimg.png";
import slideBackButton from "../../assets/back.png";
//import { useGetBannerQuery } from "../../feature/Api.js";
import {allbanner} from "../../assets/ALLbanner.js"
import { useState } from "react";

function Banner() {
  const [slide, setSlide] = useState(0);
  const lastindex = allbanner.length - 1;

  const handleSlide = () => {
    if (slide === lastindex) {
      // Do nothing if slide is already at its maximum value
    } else {
      setSlide((s) => s + 1);
    }
  };

  const handleSlideBackbutton = () => {
    if (slide === 0) {
      // Do nothing if slide is already at its minimum value
    } else {
      setSlide((s) => s - 1);
    }
  };

  return (
    <div className="w-[100%] lg:w-[75%] h-auto  flex flex-row flex-wrap justify-center items-center">
       {allbanner.map((item, index) => {
        if (index === slide) {
          return (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
              }}
              className="w-[75%] h-[300px] lg:h-[500px] flex-wrap"
            >
              <div className="w-[100%] h-[75%]  justify-around items-center flex">
                <button onClick={handleSlideBackbutton}>
                  <img
                    src={slideBackButton}
                    className="w-[40px] h-[40px]"
                    alt="logo"
                  />
                </button>
                <button onClick={handleSlide}>
                  <img
                    src={slideButton}
                    className="w-[40px] h-[40px]"
                    alt="logo"
                  />
                </button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Banner;
