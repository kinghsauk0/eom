import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
        <ul className="flex flex-wrap flex-col gap-[20px] justify-center shadow-lg pr-[60px] pl-[10px]">
          <li className="hover:bg-black hover:text-white p-[5px]">
            <Link to="/woman">
            Woman's Fashion
            </Link>
          </li>

          <li className="hover:bg-black hover:text-white p-[5px]">
          <Link to="/man">
            Man's Fashion
          </Link>
          </li>
     
          <li className="hover:bg-black hover:text-white p-[5px]">
          <Link to="/kid">
            Kid's Fashion
          </Link>
          </li>

          <li className="hover:bg-black hover:text-white p-[5px]">
            <Link to="/electronic">
            Electronics
            </Link>
          </li>

          <li className="hover:bg-black hover:text-white">
          <Link to="/sports">
            Sports
            </Link>
          </li>
        </ul>
      </>
  )
}

export default SideBar