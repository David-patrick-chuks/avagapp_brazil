import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { useMobile } from "../../../hook/MobileNav";
import { Link, useLocation } from "react-router-dom";

export function TNavBar() {


  const location = useLocation()

  const pathSegments = location.pathname.split('/');
  const check = location.pathname.includes("/student/dashboard")
  // console.log("Checking if route matches teacher route", check);
  

  const {toggleMobile} =useMobile()
    const [bell, setBell] =useState(false)
    return (
      <div className="px-3 flex shadow justify-between">
        <div className="flex text-accent items-center justify-center w-[30%]">
        <CgMenuLeft onClick={toggleMobile} color="black" size={35} className="size-10 lg:hidden block"/>
          <input
            type="text"
            autoComplete="off"
            placeholder="Pesquisar aqui"
            className="text-accent 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-accent border-none active:border-none outline-none rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4"
            id="name"
          />
          <FiSearch size={16} className="text-black/30" />
        </div>
  
        <div className="flex relative justify-center items-center gap-3">
        {
              bell && (  <img src="/teacher/notify.png" className="absolute top-10 -left-16 lg:-left-1 lg:size-56 " />)
            }
          <div className="text-black/50 text-sm gap-1 hidden  lg:flex justify-center items-center">
            <img src="/teacher/logo.svg" className="size-6" />
            <p>Eng (US)</p>
            <IoChevronDownOutline />
          </div>
          <p onClick={() => setBell(prev => !prev)} className="relative p-1 text-main-dark">
            <FaRegBell size={18}/>
            <span className="size-[5px] top-0 right-[2px] absolute bg-red-600  flex rounded-full"></span>
           
          </p>
         
          <Link to={ check && "student-profile"} className="text-black/50  text-sm gap-1 flex justify-center items-center">
            <img src="/teacher/doc.png" className="size-6" />
            <p>Musfiq</p>
            <IoChevronDownOutline />
          </Link>
        </div>
      </div>
    );
  }