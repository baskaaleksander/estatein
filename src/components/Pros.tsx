import homeIcon from '../assets/homeicon.svg'
import moneyIcon from '../assets/moneyicon.svg'
import propertyIcon from '../assets/propertyicon.svg'
import sunIcon from '../assets/sunicon.svg'

const Pros = () => {
  return (
    <div className="shadow-card border-t border-b border-solid border-grey-15 mt-4 grid grid-cols-4 gap-6 p-5 mb-24">
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={homeIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            Find Your Dream Home
            </div>
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={propertyIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            Unlock Property Value
            </div>
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={moneyIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            Effortless Property Management
            </div>
        <div className="px-[20px] py-[40px] text-white-0 text-xl bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
            <img src={sunIcon} alt="homeicon" className="w-12 h-12 mb-5" />
            Smart Investments, Informed Decisions
            </div>
    </div>
  )
}

export default Pros