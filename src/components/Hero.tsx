import React from 'react'
import heroimg from '../assets/heroimg.png'
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Informations from './Informations';

const Hero: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className='pl-[10%] grid grid-cols-2 gap-10'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-white-0 text-6xl leading-[72px]'>Discover Your Dream Property with Estatein</h1>
        <p className='text-grey-60 font-medium'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
        <div className='py-12'>
            <Button color="purple" text="Browse Properties" onClick={() => navigate('/properties')} additionalStyle='mr-5'/>
            <Button color="grey" text="Learn more" onClick={() => navigate('/about')} />
        </div>
        <div className='grid grid-cols-3 gap-5 py-13' >
            <Informations />
        </div>
        </div>
        <div className='flex hero-right'>
            <img src={heroimg} alt="heroimg" className='self-stretch hero-img'/>
        </div>
    </div>
  )
}

export default Hero