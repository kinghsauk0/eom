import React from 'react'
import { NavLink } from 'react-router-dom'
import search from "../../assets/search.png"

function Header() {
  return (
   <header className='shadow sticky z-50 top-0'>
    <nav className="w-screen h-auto">
      <div className="w-screen  bg-black flex justify-center items-center p-[20px]">
         <p className="text-wrap text-white text-[15px]">summer sale All Swim And Free Express Delivery -OFF 50%!</p>
      </div>
      <div className="flex flex-row justify-around items-center p-[50px] flex-wrap gap-[40px]">
          <div>
            <h1 className="text-wrap text-black text-[25px] font-bold">Exclusive</h1>
          </div>
          <ul className="flex flex-row flex-wrap">
            <li className="mx-[20px">
              <NavLink to="/"
              className={({isActive}) =>
              isActive ? "underline " : null
            }
              >Home</NavLink>
            </li>

            <li className="mx-[20px]">
            <NavLink to="/contart"
            className={({isActive}) =>
            isActive ? "underline" : null
          }
            >Contart</NavLink>
            </li>

            <li className="mx-[20px]">
            <NavLink to="/about"
            className={({isActive}) =>
            isActive ? "underline " : null
          }
            >About</NavLink>
            </li>

            <li className="mx-[20px]">
            <NavLink to="/singup"
            className={({isActive}) =>
            isActive ? "underline " : null
          }
            >Singup</NavLink>
            </li>
          </ul>
          <div className="flex flex-row flex-wrap justify-center items-center bg-[#7D8184]">
            <div className=" w-auto]">
                <input type="text" placeholder='What are you looking for?' className="p-[5px] text-black bg-[#7D8184] placeholder:text-black "/>
            </div>
            <div className="bg-[#7D8184] p-[7px]">
               <img src={search} className="w-[20px] h-[20px]"/>
            </div>
          </div>
      </div>
    </nav>
   </header>
  )
}

export default Header