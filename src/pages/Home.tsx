import Hero from '../components/Hero'
import Pros from '../components/Pros'
import FeaturedProperties from '../components/FeaturedProperties'
import Testimonials from '../components/Testimonials'

const Home: React.FC = () => {
  return (
    <div className='w-full bg-grey-08'>
      <Hero />
      <Pros />
      <FeaturedProperties />
      <Testimonials />
    </div>
  )
}

export default Home