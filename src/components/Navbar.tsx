import React from 'react'
import logo from '../assets/Logo.svg'
import { NavLink, Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='w-full flex justify-between items-center bg-grey-10 px-[10%]'>
        <img src={logo} alt="logo" />
        <ul className='flex '>
            <li className='p-8 active:px-0'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/">Home</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/about">About us</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/properties">Properties</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60 active:px-6 active:py-4 active:bg-grey-10 active:rounded-xl active:border active:border-solid active:border-grey-15' to="/services">Services</NavLink></li>
        </ul>
        <Link to="/about"><button className='px-6 py-4 bg-grey-08 text-white-0 rounded-xl border border-solid border-grey-15'>Contact us!</button></Link>
    </nav>
  )
}

export default Navbar