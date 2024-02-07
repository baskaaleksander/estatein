import heroimg from '../assets/heroimg.png'
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Informations from './Informations';

const Hero: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className='pl-[10%] grid grid-cols-2 gap-10 tablet:flex tablet:flex-col-reverse'>
        <div className='flex flex-col justify-center py-10 tablet:pr-[10%]'>
        <h1 className='text-white-0 text-6xl leading-[72px] laptop:text-5xl tablet:text-4xl mobile:text-3xl'>Discover Your Dream Property with Estatein</h1>
        <p className='text-grey-60 font-medium text-lg laptop:text-base'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
        <div className='py-12'>
            <Button color="purple" text="Browse Properties" onClick={() => navigate('/properties')} additionalStyle='mr-5'/>
            <Button color="grey" text="Learn more" onClick={() => navigate('/about')} />
        </div>
        <div className='grid grid-cols-3 gap-5 py-13 tablet:grid-cols-1' >
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