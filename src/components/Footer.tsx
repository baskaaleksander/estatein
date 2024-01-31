import logo from '../assets/Logo.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-grey-10">
        <div className="px-[10%]  border border-solid border-grey-15 py-24">
            <h2 className="text-white-0 text-5xl font-semibold">Start Your Real Estate Journey Today</h2>
            <p className="text-lg text-grey-60">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
        </div>
        <div className=" bg-grey-08">
            <div className='w-[80%] mx-[10%] py-24'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </footer>
  )
}

export default Footer