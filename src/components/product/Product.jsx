import React, { useState } from "react";


function Product({ data, tpyeOffProduct }) {
  const [viewProduct,setViewProduct] = useState(4)
  const lastindex = data.length
  const handleViewProduct =() =>{
       setViewProduct(lastindex)
  }
  return (
    <>
      <h1 className="text-black text-wrap text-[30px] m-[20px] font-semibold mt-[80px]">
        {tpyeOffProduct}
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly w-[100%] gap-[100px]">
        {/* Only render the first 4 items */}
        {data.map((item, index) => {
          if (index < viewProduct) {
            return (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt="logo"
                  className="w-[300px] h-[350px]"
                />
                <div className="w-[300px] h-auto flex flex-wrap flex-col">
                  <h2 className="text-black text-wrap font-bold m-[5px] text-[18px]">
                    {item.name}
                  </h2>
                  <p className=" text-orange-600 text-wrap font-semibold m-[5px] text-[25px]">
                    ${item.new_price}
                  </p>
                  <p className="relative flex items-center w-[70px]">
                    <span className="relative z-10 h-6 px-2">
                      ${item.old_price}
                    </span>
                    <div className="absolute bottom-3 left-0 right-0 border-b border-gray-500"></div>
                  </p>
                </div>
              </div>
            );
          } else {
            return null; // Render nothing for other items
          }
        })}
      </div>

      <div className="w-[100%]  flex flex-wrap justify-center items-center">
      <button onClick={handleViewProduct} className="w-[200px] h-[50px] bg-orange-600">
        <p className="text-white text-[15px]">view All Products</p>
      </button> 
      </div>  
      </>
  );
}

export default Product;
