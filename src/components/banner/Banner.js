import React, { useState } from "react";
import { allbanner } from "../../assets/ALLbanner.js";
import slideButton from "../../assets/arrowimg.png";
import slideBackButton from "../../assets/back.png";

function Banner() {
  const [slide, setSlide] = useState(1); // Correct syntax for initializing state
  const lastindex = allbanner.length - 1; // Calculate the last index of allbanner array

  const handleSlide = () => {
    if (slide-1 === lastindex) {
      // Do nothing if slide is already at its minimum value
    } else {
      setSlide((s) => s + 1);
    }
      
  };

  const handleSlideBackbutton = () => {
    if (slide === 1) {
      // Do nothing if slide is already at its minimum value
    } else {
      setSlide((s) => s - 1);
    }
  };

  return (
    <div className="w-[100%] lg:w-[75%] h-auto  flex flex-row flex-wrap justify-center items-center">
      {allbanner.map((item) => {
        if (item.id === slide) {
          return (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
              }}
              className="w-[75%] h-[300px] lg:h-[500px] flex-wrap"
            >
              <div className="w-[100%] h-[25%] flex flex-wrap justify-center items-center p-[20px]">
                <h1 className="text-black text-wrap text-[30px] font-bold">
                  {item.dis}
                </h1>
              </div>
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
