import React, { useState } from 'react'
import Button from './Button';
import logo from "../assets/logo.png";

const Navbar = () => {
    let Links =[
      {name:"Home",link:"#home"},
      {name:"Features",link:"#features"},
      {name:"Testimonials",link:"#testimonials"},
      {name:"Pricing",link:"#pricing"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-[white]'>
      <div className='md:flex items-center justify-between bg-white py-4 max-w-[1100px] m-[auto] px-[20px]'>
      <div className=''>
        <img src={logo} alt="" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[white] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-4 text-[13px] md:my-0 my-7'>
              <a href={link.link} className='text-[#53627c] font-[400] hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Get Started
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar