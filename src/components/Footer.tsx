import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import facebook from '../assets/iconfb.svg'
import twitter from '../assets/icontwitter.svg'
import yt from '../assets/iconyt.svg'
import linkedin from '../assets/iconlinkedin.svg'
import Button from './ui/Button'

const Footer: React.FC = () => {
  const navigation = useNavigate();
  return (
    <footer className="bg-grey-10">
        <div className="px-[10%]  border border-solid border-grey-15 py-24 flex">
          <div>
            <h2 className="text-white-0 text-5xl font-semibold">Start Your Real Estate Journey Today</h2>
            <p className="text-lg text-grey-60">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
            <Button color="purple" text="Explore Properties" onClick={() => navigation("/properties")} />
        </div>
        <div className="bg-grey-08 px-[10%] py-24 flex items-center justify-between">
            <div className='w-[80%]'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='flex'>
              <li className='text-grey-60 hover:text-purple-60 mr-3'><Link to="/">Home</Link></li>
              <li className='text-grey-60 hover:text-purple-60 mr-3'><Link to="/about">About Us</Link></li>
              <li className='text-grey-60 hover:text-purple-60 mr-3'><Link to="/properties">Properties</Link></li>
              <li className='text-grey-60 hover:text-purple-60 mr-3'><Link to="/services">Services</Link></li>
              <li className='text-grey-60 hover:text-purple-60'><Link to="/about">Contact Us</Link></li>
            </ul>
        </div>
        <div className='bg-grey-10 px-[10%] py-4 flex justify-between items-center'>
          <h2 className='text-white-0'>@2023 Estatein. All Rights Reserved.</h2>
          <div>
            <button className='bg-grey-08 p-3 rounded-full'><img src={facebook} className='w-6 h-6' alt="" /></button>
            <button className='bg-grey-08 p-3 rounded-full'><img src={linkedin} className='w-6 h-6' alt="" /></button>
            <button className='bg-grey-08 p-3 rounded-full'><img src={twitter} className='w-6 h-6' alt="" /></button>
            <button className='bg-grey-08 p-3 rounded-full'><img src={yt} className='w-6 h-6' alt="" /></button>
          </div>
        </div>
    </footer>
  )
}

export default Footer