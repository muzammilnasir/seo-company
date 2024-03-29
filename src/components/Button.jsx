import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white text-[12px] py-2 px-4 rounded md:ml-2 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button