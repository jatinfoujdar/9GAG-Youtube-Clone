import React from 'react'

const Button = ({name}) => {
  return (
    <div>
       <button class="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full m-3">
  {name}
</button>
    </div>
  )
}

export default Button