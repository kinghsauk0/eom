import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetBannerQuery } from "../../feature/Api.js";
import { useDeleteBannerMutation } from "../../feature/Api.js";

function ShowBanner() {
  const { isLoading, isError, data, refetch } = useGetBannerQuery();
  const [deleteBanner] = useDeleteBannerMutation();

  // Check if data is loading or if there's an error
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  // Check if data is not available yet
  if (!data) {
    return <div>No data available</div>;
  }

  const arryData = data.data;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  // If data is not an array or is empty
  if (!Array.isArray(arryData) || arryData.length === 0) {
    return (
      <div className="">
        <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">
          Show Banners
        </h1>
        <h1>No data available</h1>
      </div>
    );
  }

  // If data is available, proceed with mapping over it
  return (
    <div className="w-[100%] ">
      <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">
        Show Banners
      </h1>
      <Slider {...settings}>

  
        {arryData.map((item) => (

          <div
            key={item._id} // Assuming _id is unique
            className="p-[20px]"
          >
            <img
              src={item.banner}
              className="w-[100px] h-[70px]"
              alt="Banner"
            />
            <button
              onClick={async () => {
                await deleteBanner(item?._id);
                await refetch();
              }}
              className="w-[100px] h-[30px] flex flex-wrap justify-center items-center text-white rounded bg-red-700 mt-[20px]"
            >
              Delete
            </button>
          </div>
          
        ))}
       </Slider>
    </div>
  );
}

export default ShowBanner;
;
