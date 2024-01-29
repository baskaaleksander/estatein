import React from 'react'
import logo from '../assets/Logo.svg'
import { NavLink, Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='w-full flex justify-between items-center bg-grey-10 px-[10%]'>
        <img src={logo} alt="logo" />
        <ul className='flex '>
            <li className='p-8 '><NavLink className='text-white-0' to="/">Home</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0' to="/about">About us</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0' to="/properties">Properties</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0' to="/services">Services</NavLink></li>
        </ul>
        <Link to="/about"><button className='px-6 py-4 bg-grey-08 text-white-0 rounded-xl border border-solid border-grey-15'>Contact us!</button></Link>
    </nav>
  )
}

export default Navbar