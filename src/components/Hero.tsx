import React from 'react'
import heroimg from '../assets/heroimg.png'

const Hero: React.FC = () => {
  return (
    <div className='pl-[10%] grid grid-cols-2 gap-10'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-white-0 text-6xl leading-[72px]'>Discover Your Dream Property with Estatein</h1>
        <p className='text-grey-60 font-medium'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
        <div className='py-12'>
            <button className='font-medium text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>Learn more</button>
            <button className='font-medium text-white-0 px-6 py-3.5 bg-purple-60 rounded-xl'>Browse Properties</button>
        </div>
        <div className='grid grid-cols-3 gap-5 py-13' >
            <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
                <h2 className='text-4xl'>200+</h2>
                <p className='text-lg text-grey-60'>Happy Customers</p>
            </div>
            <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
                <h2 className='text-4xl'>10k+</h2>
                <p className='text-lg text-grey-60'>Properties For Clients</p>
            </div>
            <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
                <h2 className='text-4xl'>16+</h2>
                <p className='text-lg text-grey-60'>Years of Experience</p>
            </div>

        </div>
        </div>
        <div className='flex hero-right'>
            <img src={heroimg} alt="heroimg" className='self-stretch'/>
        </div>
    </div>
  )
}

export default Hero