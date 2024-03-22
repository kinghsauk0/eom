import React from 'react'
import { allbanner } from '../../assets/ALLbanner'

function ShowBanner() {
  return (
    <div className="flex flex-wrap flex-col w-[75%] h-auto justify-center items-center">
        <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">Show Banners</h1>
        {allbanner.map((i) =>(
            <div key={i.id} className="flex flex-wrap flex-row w-auto h-auto justify-center items-center m-[40px] p-[10px] gap-[40px]">
                <img src={i.img} className="w-[100px] h-[70px]" alt='logo'/>
                <button className="w-[100px] h-[30px] flex flex-wrap justify-center items-center text-white rounded bg-red-700">Delte</button>
                <button className="w-[100px] h-[30px] flex flex-wrap justify-center items-center text-white rounde bg-slate-600">Update</button>
            </div>
        ))}
    </div>
  )
}

export default ShowBanner