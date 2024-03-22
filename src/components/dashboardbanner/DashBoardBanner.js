import React from 'react'
import ShowBanner from '../Showbanner/ShowBanner'

function DashBoardBanner() {
  return (
    <div className="w-[100%] h-auto flex flex-row flex-wrap">
        <div className="lg:w-[50%] flex flex-wrap flex-col justify-center items-center shadow-lg">
           <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">Add Banner Details</h1>
           <div className='w-[100%] flex flex-wrap justify-evenly items-center gap-[40px] m-[10px] my-[60px]'>
            <label className="text-wrap text-black text-xl font-medium ">Add Banner Image :</label>
            <input type="file" />
            <button className="text-white bg-green-700 w-[150px] h-[50px] justify-center items-center rounded">
                Add
            </button>
           </div>
        </div>
           
        <div className="w-[50%] flex flex-wrap flex-col justify-center items-center">
          <ShowBanner/>
        </div>
    </div>
  )
}

export default DashBoardBanner