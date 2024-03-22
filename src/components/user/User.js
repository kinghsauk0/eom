import React from "react";

function User() {
  return (
   
      <>
        <ul className=" gap-[20px]  shadow-lg pr-[60px] pl-[10px] absolute right-[40px]  top-[500px] lg:top-[250px] bg-white px-[40px] py-[80px]">
          <li className="py-2 px-4 hover:bg-black hover:text-white text-black ">Profile</li>
          <li className="py-2 px-4 hover:bg-black hover:text-white text-black ">Dash Board</li>
          <li className="py-2 px-4 hover:bg-black hover:text-white text-black ">Order Details</li>
          <li className="py-2 px-4 hover:bg-black hover:text-white text-black ">Paymant</li>
          <li className="py-2 px-4 hover:bg-black hover:text-white text-black ">Add User Detailst</li>
          {/* Add more menu items as needed */}
        </ul>
      </>
    
  );
}

export default User;

