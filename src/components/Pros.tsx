import homeIcon from '../assets/homeicon.svg'
import moneyIcon from '../assets/moneyicon.svg'
import propertyIcon from '../assets/propertyicon.svg'
import sunIcon from '../assets/sunicon.svg'

const Pros = () => {
  return (
    <div className="shadow-card border-t border-b border-solid border-grey-15 grid grid-cols-4 gap-6 p-5 mb-24">
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={homeIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            <h3 className='text-xl font-medium laptop:text-lg'>Find Your Dream Home</h3>
            </div>
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={propertyIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            <h3 className='text-xl font-medium laptop:text-lg'>Unlock Property Value</h3>
            </div>
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={moneyIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            <h3 className='text-xl font-medium laptop:text-lg'>Effortless Property Management</h3>
            </div>
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={sunIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            <h3 className='text-xl font-medium laptop:text-lg'>Smart Investments, Informed Decisions</h3>
            </div>
    </div>
  )
}

export default Pros