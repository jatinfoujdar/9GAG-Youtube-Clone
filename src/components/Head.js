import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import {SuggestionAPI} from "../utils/config"

const Head = () => {
  const[searchQuiries, setSearchQuiries] = useState("");
  // const [suggestions, setSuggestions] = useState([]);
  
  useEffect(()=>{
   //api call after every key press diff btw 2 api call is 200ms decline the api call

  const timer = setTimeout(()=>getSearchSuggestions(),200);
  return()=>{
    clearTimeout(timer);
  }
},[searchQuiries])


  const getSearchSuggestions = async()=>{
    console.log(searchQuiries);
    const data = await fetch(SuggestionAPI + searchQuiries);
    const json = await data.json()
    console.log(json[1]);
  }

  const dispatch = useDispatch()
  
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  };

  

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg rounded-lg '>
      <div className='flex col-span-1 '>
    <img onClick={()=>toggleMenuHandler()} className='h-10 cursor-pointer' alt="menu" src="https://www.shutterstock.com/image-vector/hamburger-menu-bar-line-art-260nw-273559643.jpg"/>
    <a href="/">
  <img className="h-10 mx-2 ml-5" alt="logo" src="https://seeklogo.com/images/1/9gag-logo-7907FF8A41-seeklogo.com.png" />
</a>

    </div>
    <div className='col-span-10 px-10 '>
      <div>
      <input className='w-1/2 border border-gray-800 p-2 rounded-l-full' type='text' value={searchQuiries} onChange={(e)=> setSearchQuiries(e.target.value)}/>
      <button className='bg-red-600 text-white font-bold py-2 px-4 rounded-r-full'>Search</button>
      </div>
      <div className='fixed bg-white  py-2 px-5 w-[43rem] shadow-lg rounded-lg border-gray-100'>
        <ul>
          <li className='shadow-sm py-2  hover:bg-gray-100'>Iphone Pro</li>
          <li className='shadow-sm py-2  hover:bg-gray-100'>Iphone Pro</li>
          <li className='shadow-sm py-2  hover:bg-gray-100'>Iphone Pro</li>
          <li className='shadow-sm py-2  hover:bg-gray-100'>Iphone Pro</li>
          <li className='shadow-sm py-2  hover:bg-gray-100'>Iphone Pro</li>
          <li className='shadow-sm py-2  hover:bg-gray-100'>Iphone Pro</li>
          <li className='shadow-sm py-2  hover:bg-gray-100'>Iphone Pro</li>
        </ul>
      </div>
      </div>
      <div className='col-span-1'>
    <img className='h-10' alt='user-icon' src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"/>
      </div>
    </div>
  )
}

export default Head