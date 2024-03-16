import React from "react";
import send from "../../assets/send.png"

function Footer() {
  return (
    <footer>
      <div className="w-auto h-auto flex flex-row justify-around flex-wrap gap-[30px] p-[20px] bg-black">
        <ul className="flex-wrap flex flex-col gap-[20px] justify-center items-center">
          <li className="text-wrap text-white text-[25px] font-bold">Exclusive</li>

          <li className="text-wrap text-white text-[18px] font-semibold">subscribe</li>

          <li className="text-wrap text-white text-[15px] font-normal">get 10% off your frist order</li>

          <li className="bg-white flex flex-row justify-center items-center">
            <input type="text" placeholder="Enter Your Email" className="bg-white text-black p-[5px] placeholder:text-black"/>
            <img src={send} className="w-[15px] h-[15px] m-1"/>
          </li>
        </ul>
        <ul className="flex-wrap flex flex-col gap-[20px] justify-center items-center">
          <li className="text-wrap text-white text-[18px] font-semibold">Support</li>
          <li className="text-wrap text-white text-[15px] font-normal">laxmipur,n 24 pgs,kolkata ,india</li>
          <li className="text-wrap text-white text-[15px] font-normal">kingshuk012345@gmail.com</li>
          <li className="text-wrap text-white text-[15px] font-normal">7908320214</li>
        </ul>

        <ul className="flex-wrap flex flex-col gap-[20px] justify-center items-center">
          <li className="text-wrap text-white text-[18px] font-semibold">Account</li>

          <li className="text-wrap text-white text-[15px] font-normal">My Account</li>

          <li className="text-wrap text-white text-[15px] font-normal">Login/Register</li>

          <li className="text-wrap text-white text-[15px] font-normal">cart</li>

          <li className="text-wrap text-white text-[15px] font-normal">Wishlist</li>

          <li className="text-wrap text-white text-[15px] font-normal">Shop</li>
        </ul>
      </div>
      <div className="w-screen  bg-black flex justify-center items-center p-[20px]">
        <p className="text-wrap text-white text-[15px]">
          <samp className="text-xl text-wrap">©</samp> coppyright RemeL 2024. All rigth
          reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
