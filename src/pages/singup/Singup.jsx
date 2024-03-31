import React, { useEffect, useState } from "react";
import sideImage from "../../assets/simage.png";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../feature/Api";
import ErrorMessage from "../../components/ErrorMessage";
//import ErrorMessage from "../../components/ErrorMessage";

function Singup() {
  const [RegisterUser,] =useRegisterUserMutation()
  const [username,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handeleRegister = async () =>{
    try {
      if(!username || !email || !password){
        setOpen(true)
        ;
      }
      if(username === "" || email==="" || password === ""){
        setOpen(true)
        
      }else{
        await RegisterUser({ username, email, password });
        setUserName((d) => d="");
        setEmail((d) => d="");
        setPassword((d) => d="");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }

  }
  

  return (
    <>
      {windowWidth > 700 ? (
        <div className="w-[100%] h-screen flex flex-row ">
          <div className="w-[50%] flex justify-center items-center ">
            <img src={sideImage} alt="logo" />
          </div>
          <div className="w-[50%] h-screen  flex justify-center items-center ">
            <div className="w-[500px] h-screen flex-col flex justify-center items-start m-[20px]">
              <h1 className="text-[50px] font-bold mb-[20px]">
                Create account
              </h1>
              <p className="text-[25px] font-medium mb-[40px]">
                Enter your details below
              </p>
              <input onChange={(e) => setUserName(e.target.value)} className="bg-white placeholder:text-slate-600 border-white w-[100%] h-[50px] p-[5px]" type="text" placeholder="Name" />
              <div className="h-[2px] w-[100%] bg-slate-600 mb-[20px] opacity-10" />
              <input onChange={(e) => setEmail(e.target.value)} className="bg-white placeholder:text-slate-600 border-white w-[100%] h-[50px] p-[5px]" type="text" placeholder="email" />
              <div className="h-[2px] w-[100%] bg-slate-600 mb-[20px] opacity-10" />
              <input onChange={(e) => setPassword(e.target.value)} className="bg-white placeholder:text-slate-600 border-white w-[100%] h-[50px] p-[5px]" type="password" placeholder="password" />
              <div className="h-[2px] w-[100%] bg-slate-600 mb-[40px] opacity-10" />
              <button onClick={handeleRegister} className="bg-[#DB4444] text-center text-white w-[100%] h-[40px] ">
                Create Account
              </button>
              <div className="flex-row w-[100%] h-[20px]justify-center items-center mt-[20px]">
                <p className="text-slate-600">All ready have accout?</p>
                  <Link to="/login">
                  <p className="text-slate-600 underline">
                    Logi in
                  </p>
                  </Link>
                
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-screen flex  justify-center items-center">
          <div className="w-[500px] h-screen flex-col flex justify-center items-start m-[20px]">
          <h1 className="text-[50px] font-bold mb-[20px]">
                Create account
              </h1>
              <p className="text-[25px] font-medium mb-[40px]">
                Enter your details below
              </p>
              <input className="bg-white placeholder:text-slate-600 border-white w-[100%] h-[50px] p-[5px]" type="text" placeholder="Name" />
              <div className="h-[2px] w-[100%] bg-slate-600 mb-[20px] opacity-10" />
              <input className="bg-white placeholder:text-slate-600 border-white w-[100%] h-[50px] p-[5px]" type="text" placeholder="email" />
              <div className="h-[2px] w-[100%] bg-slate-600 mb-[20px] opacity-10" />
              <input className="bg-white placeholder:text-slate-600 border-white w-[100%] h-[50px] p-[5px]" type="text" placeholder="password" />
              <div className="h-[2px] w-[100%] bg-slate-600 mb-[40px] opacity-10" />
              <button className="bg-[#DB4444] text-center text-white w-[100%] h-[40px] ">
                Create Account
              </button>
              <div className="flex-row w-[100%] h-[20px]justify-center items-center mt-[20px]">
                <p className="text-slate-600">All ready have accout?</p>
                  <Link to="/login">
                  <p className="text-slate-600 underline">
                    Logi in
                  </p>
                  </Link>
                
              </div>
          </div>
        </div>
      )}
      <ErrorMessage onoof={open} onClose={handleClose} error="All fields need to Filled"/>
    </>
  );
}

export default Singup;  

