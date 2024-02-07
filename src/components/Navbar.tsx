import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './ui/Button';
import useScreenSize from '../hooks/useScreenSize'

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav>
      <div className='w-full flex justify-between items-center bg-grey-10 px-[10%] py-5'>
        <img onClick={() => navigate('/')} src={logo} alt="logo" />
        <button className='text-white-0 text-3xl' onClick={() => setIsOpen(open => !open)}>&#9776;</button>
      </div>
      {isOpen && 
      <div className='bg-grey-10 absolute w-full flex flex-col items-center pb-8'>
        <ul className='flex flex-col items-center'>
            <li className='p-8 active:px-0'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/">Home</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/about">About us</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/properties">Properties</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/services">Services</NavLink></li>
        </ul>
        <Button color="grey" onClick={() => navigate('/contact')} text="Contact us!" />
      </div>
      }
    </nav>
  )
}

const NavbarNormal: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className='w-full flex justify-between items-center bg-grey-10 px-[10%]'>
        <img src={logo} alt="logo" />
        <ul className='flex '>
            <li className='p-8 active:px-0'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/">Home</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/about">About us</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/properties">Properties</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/services">Services</NavLink></li>
        </ul>
        <Button color="grey" onClick={() => navigate('/contact')} text="Contact us!" />
    </nav>
  )
}

const Navbar: React.FC = () => {
  const screenSize = useScreenSize();
  return (
    screenSize < 968 ? <NavbarMobile /> : <NavbarNormal />
  )
}

export default Navbar