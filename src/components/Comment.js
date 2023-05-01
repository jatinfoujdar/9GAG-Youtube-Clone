import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex p-2 rounded-md shadow-sm bg-gray-200'>
     <img className='w-10 h-10' src='https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png' alt='user comment'/>
    <div>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
    </div>   
  )
}

export default Comment