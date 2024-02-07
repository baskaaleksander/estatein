import { useEffect, useState } from 'react'
import logo from '../assets/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './ui/Button';
import useScreenSize from '../hooks/useScreenSize'

const NavbarMobile: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    const throttleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 ${scrollPosition > 100 && "bg-grey-10"}`}>
      <div className='w-full flex justify-between items-center bg-grey-08 px-[10%] py-5 '>
        <img onClick={() => navigate('/')} src={logo} alt="logo" />
        <button className='text-white-0 text-3xl' onClick={() => setIsOpen(open => !open)}>&#9776;</button>
      </div>
      {isOpen && 
      <div className='bg-grey-10 absolute w-full flex flex-col items-center pb-8'>
        <ul className='flex flex-col items-center'>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/">Home</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/about">About us</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/properties">Properties</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/services">Services</NavLink></li>
        </ul>
        <Button color="grey" onClick={() => navigate('/contact')} text="Contact us!" />
      </div>
      }
    </nav>
  )
}

const NavbarNormal: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    const throttleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);
  
  const navigate = useNavigate();
  return (
    <nav className={`w-full flex justify-between items-center bg-grey-08 px-[10%] sticky top-0 z-50 ${scrollPosition > 100 && "bg-grey-10"}`}>
        <img src={logo} alt="logo" />
        <ul className='flex '>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/">Home</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/about">About us</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/properties">Properties</NavLink></li>
            <li className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to="/services">Services</NavLink></li>
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