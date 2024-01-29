import React from 'react'
import Hero from '../components/Hero'
import Pros from '../components/Pros'
import FeaturedProperties from '../components/FeaturedProperties'

const Home: React.FC = () => {
  return (
    <div className='w-full bg-grey-08'>
      <Hero />
      <Pros />
      <FeaturedProperties />
    </div>
  )
}

export default Home