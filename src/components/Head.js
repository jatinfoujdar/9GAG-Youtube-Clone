import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
    <img className='h-10' alt="menu" src="https://www.shutterstock.com/image-vector/hamburger-menu-bar-line-art-260nw-273559643.jpg"/>
        
    <img  className='h-10 mx-2' alt='logo' src='https://seeklogo.com/images/1/9gag-logo-7907FF8A41-seeklogo.com.png'/>
    </div>
    <div className='col-span-10 px-10 '>
      <input className='w-1/2 border border-gray-800 p-2 rounded-l-full' type='text'/>
      <button className='bg-red-600 text-white font-bold py-2 px-4 rounded-r-full'>Search</button>
      </div>
      <div className='col-span-1'>
    <img className='h-10' alt='user-icon' src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"/>
      </div>
    </div>
  )
}

export default Head