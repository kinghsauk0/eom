import React  from "react";
import { useGetBannerQuery } from "../../feature/RTKbanner";


function ShowBanner() {
  
 const {isLoading,isError,data} =useGetBannerQuery()

const arryData = data.data

console.log(arryData)
 
  // Check if data is loading or if there's an error
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  
  // Check if data is not an array or is empty
  if (!Array.isArray(arryData) || arryData.length === 0) {
    return (
      <div className="flex flex-wrap flex-col w-[75%] h-auto justify-center items-center">
        <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">
          Show Banners
        </h1>
        <h1>No data available</h1>
      </div>
    );
  }

  // If data is available, proceed with mapping over it
  return (
    <div className="flex flex-wrap flex-col w-[75%] h-auto justify-center items-center">
      <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">
        Show Banners
      </h1>
      {arryData.map((item) => (
        <div
          key={item._id} // Assuming _id is unique
          className="flex flex-wrap flex-row w-auto h-auto justify-center items-center m-[40px] p-[10px] gap-[40px]"
        >
          <img src={item.banner} className="w-[100px] h-[70px]" alt="Banner" />
          <button className="w-[100px] h-[30px] flex flex-wrap justify-center items-center text-white rounded bg-red-700">
            Delete
          </button>
          <button className="w-[100px] h-[30px] flex flex-wrap justify-center items-center text-white rounded bg-slate-600">
            Update
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShowBanner;