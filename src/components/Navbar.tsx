import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='w-full flex justify-between items-center bg-grey-15'>
        <img src={logo} alt="logo" />
        <ul className='flex'>
            <li className='px-3'><Link to="/">Home</Link></li>
            <li className='px-3'><Link to="/about">About us</Link></li>
            <li className='px-3'><Link to="/properties">Properties</Link></li>
            <li className='px-3'><Link to="/services">Services</Link></li>
        </ul>
        <Link to="/about"><button>Contact us!</button></Link>
    </nav>
  )
}

export default Navbar