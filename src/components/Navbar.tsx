import { useEffect, useState } from 'react'
import logo from '../assets/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './ui/Button';
import useScreenSize from '../hooks/useScreenSize'
import { motion } from 'framer-motion'
import NavLinkAnimation from '../animations/NavLinkAnimation';

const navLinks = [
  {
  title: 'Home',
  link: '/'
  },
  {
    title: 'About us',
    link: '/about'
  },
  {
    title: 'Properties',
    link: '/properties'
  },
  {
    title: 'Services',
    link: '/services'
  }
]

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
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='bg-grey-10 absolute w-full flex flex-col items-center pb-8'>
        <ul className='flex flex-col items-center'>
            {navLinks.map((link, index) => {
              return (
                <NavLinkAnimation key={index}>
                  <NavLink className='text-white-0 hover:text-purple-60' to={link.link}>{link.title}</NavLink>
                </NavLinkAnimation>
              )
            })}
        </ul>
        <Button color="grey" onClick={() => navigate('/contact')} text="Contact us!" />
      </motion.div>
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
            {navLinks.map((link, index) => {
              return (
                <li key={index} className='p-8'><NavLink className='text-white-0 hover:text-purple-60' to={link.link}>{link.title}</NavLink></li>
              )
            })}
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