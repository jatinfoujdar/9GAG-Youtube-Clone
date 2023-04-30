import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import {SuggestionAPI} from "../utils/config"
import store from '../utils/store'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const[searchQuiries, setSearchQuiries] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false)
  const dispatch = useDispatch()
  const searchCache = useSelector((store) => store.search);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuiries]) {
        setSuggestions(searchCache[searchQuiries]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuiries]);


const getSearchSuggestions = async () => {
  const data = await fetch(SuggestionAPI + searchQuiries);
  const json = await data.json();
  setSuggestions(json[1]);

  dispatch(cacheResults({[searchQuiries]:json[1],}))
};


  
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
      <input className='w-1/2 border border-gray-800 p-2 rounded-l-full' type='text' value={searchQuiries}
       onChange={(e)=> setSearchQuiries(e.target.value)}
       onFocus={()=> setShowSuggestion(true)}
       onBlur={()=> setShowSuggestion(false)}/>
       
      <button className='bg-red-600 text-white font-bold py-2 px-4 rounded-r-full'>Search</button>
      </div>
      
      {showSuggestion &&(
        <div className='fixed bg-white  py-2 px-5 w-[43rem] shadow-lg rounded-lg border-gray-100'>
      <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
      </div>
      )}
      </div>
      <div className='col-span-1'>
    <img className='h-10' alt='user-icon' src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"/>
      </div>
    </div>
  )
}

export default Head