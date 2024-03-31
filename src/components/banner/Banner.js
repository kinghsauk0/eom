import React, { useState } from "react";
import slideButton from "../../assets/arrowimg.png";
import slideBackButton from "../../assets/back.png";
import { useGetBannerQuery } from "../../feature/Api.js";

function Banner() {
  const { isError, isLoading, data } = useGetBannerQuery();
  const [slide, setSlide] = useState(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const allbanner = data.data;
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

  if (!Array.isArray(allbanner) || allbanner.length === 0) {
    return (
      <div className="flex flex-wrap flex-col w-[75%] h-auto justify-center items-center">
        <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">
          Show Banners
        </h1>
        <h1>No data available</h1>
      </div>
    );
  }

  return (
    <div className="w-[100%] lg:w-[75%] h-auto  flex flex-row flex-wrap justify-center items-center">
      {allbanner.map((item, index) => {
        if (index === slide) {
          return (
            <div
              key={item._id}
              style={{
                backgroundImage: `url(${item.banner})`,
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
