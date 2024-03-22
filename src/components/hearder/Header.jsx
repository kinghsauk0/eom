import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import search from "../../assets/search.png";
import hart from "../../assets/heart.png";
import shop from "../../assets/cart.png";
import user from "../../assets/user.png";
//import { UseManuContext } from "../../context/ManuContex";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [active, setActive] = useState(false);
  //const { ShowPButton } = UseManuContext();

  useEffect(() => {
    handelActive();
  }, []);
  const handelActive = () => {
    setActive(true);
  };
  const handelUnActive = () => {
    setActive(false);
  };

  //const handleProfileButton = () => {
  //  ShowPButton();
  //};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="shadow sm:sticky relative z-50 top-0">
      <nav className="w-screen h-auto">
        <div className="w-screen  bg-black flex justify-center items-center p-[20px]">
          <p className="text-wrap text-white text-[15px] ">
            summer sale All Swim And Free Express Delivery -OFF 50%!
          </p>
        </div>
        <div className="flex flex-row justify-around items-center p-[30px] flex-wrap gap-[40px] bg-white">
          <div>
            <h1 className="text-wrap text-black text-[25px] font-bold">
              Exclusive
            </h1>
          </div>
          <ul className="flex flex-row flex-wrap">
            <li className="mx-[20px">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline " : null)}
                onClick={handelActive}
              >
                Home
              </NavLink>
            </li>

            <li className="mx-[20px]">
              <NavLink
                to="/contart"
                className={({ isActive }) => (isActive ? "underline" : null)}
                onClick={handelUnActive}
              >
                Contart
              </NavLink>
            </li>

            <li className="mx-[20px]">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "underline " : null)}
                onClick={handelUnActive}
              >
                About
              </NavLink>
            </li>

            <li className="mx-[20px]">
              <NavLink
                to="/singup"
                className={({ isActive }) => (isActive ? "underline " : null)}
                onClick={handelUnActive}
              >
                Singup
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-row flex-wrap justify-center items-center bg-[#7D8184]">
            <div className=" w-auto]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="p-[5px] text-black bg-[#7D8184] placeholder:text-black "
              />
            </div>
            <div className="bg-[#7D8184] p-[7px]">
              <img src={search} className="w-[20px] h-[20px]" alt="logo" />
            </div>
          </div>
          {active && (
            <ul className="flex flex-row flex-wrap gap-[20px]">
              <li>
                <img src={hart} className="w-[40px] h-[40px] " alt="logo" />
              </li>

              <li>
                <img src={shop} className="w-[40px] h-[40px]" alt="logo" />
              </li>

              <li>
               
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img src={user} className="w-[40px] h-[40px]" alt="logo" />
                </Button>
  

                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{ marginTop: "100px", }}
                >
                  <MenuItem
                    sx={{
                      py: 2,
                      px: 4,
                      marginTop: "80px",
                      ":hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Profile
                  </MenuItem>
                  <Link to="/dashboard">
                  <MenuItem
                    sx={{
                      py: 2,
                      px: 4,
                      ":hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Dash Board
                  </MenuItem>
                  </Link>
                  <MenuItem
                    sx={{
                      py: 2,
                      px: 4,
                      ":hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Order Details
                  </MenuItem>

                  <MenuItem
                    sx={{
                      py: 2,
                      px: 4,
                      ":hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Paymant
                  </MenuItem>
                  <MenuItem
                    sx={{
                      py: 2,
                      px: 4,
                      marginBottom: "80px",
                      ":hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Add User Detailst
                  </MenuItem>
                </Menu>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
