import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
    const [theme,setTheme]=useState(
        localStorage.getItem("theme")? localStorage.getItem("theme") :"light"
    );

    const element =document.documentElement
     // access to html element

     // adding theme  to local storage and html
    useEffect(()=>{
        localStorage.setItem("theme",theme);
        if(theme === "dark"){
        element.classList.add("dark")
        element.classList.add("dark")
        }else{
            element.classList.remove("light");
            element.classList.remove("dark"); 
        }
    })
  return (
    <div className='relative'>
        <CiLight 
        onClick={()=> setTheme(theme==="dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === 'dark'?'opacity-0' :"opacity-100"}
        transition-all duration-200
        `}/>

        <MdDarkMode onClick={()=> setTheme(theme==="dark" ? "light" : "dark")} className={`w-12 cursor-pointer ${theme === 'light'?'opacity-0' :"opacity-100"}`}/>
    </div>
  )
}

export default DarkMode

//light  <CiLight />
//dark <MdDarkMode />