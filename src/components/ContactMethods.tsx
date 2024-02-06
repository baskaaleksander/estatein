import contact1 from '../assets/contacticons/contact1.svg'
import contact2 from '../assets/contacticons/contact2.svg'
import contact3 from '../assets/contacticons/contact3.svg'
import contact4 from '../assets/contacticons/contact4.svg'

const ContactMethods = () => {
    return (
        <div className="shadow-card border-t border-b border-solid border-grey-15 grid grid-cols-4 gap-6 p-5 mb-24 tablet:grid-cols-2 mobile:grid-cols-1">
            <div className="px-[20px] py-[40px] text-white-0 bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
                <img src={contact1} alt="homeicon" className="w-12 h-12 mb-5" />
                <p className='text-xl font-medium laptop:text-lg'>info@estatein.com</p>
                </div>
            <div className="px-[20px] py-[40px] text-white-0 bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
                <img src={contact2} alt="homeicon" className="w-12 h-12 mb-5" />
                <p className='text-xl font-medium laptop:text-lg'>+1 (123) 456-7890</p>
                </div>
            <div className="px-[20px] py-[40px] text-white-0 bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
                <img src={contact3} alt="homeicon" className="w-12 h-12 mb-5" />
                <p className='text-xl font-medium laptop:text-lg'>Main Headquarters</p>
                </div>
            <div className="px-[20px] py-[40px] text-white-0 bg-grey-10 rounded-lg border border-solid border-grey-15 flex flex-col justify-center items-center text-center">
                <img src={contact4} alt="homeicon" className="w-12 h-12 mb-5" />
                <div>
                    <a href='#' >Instagram</a>
                    <a href='#' className='px-8'>LinkedIn</a>
                    <a href='#' >Facebook</a>
                </div>
                </div>
        </div>
    )
    }

export default ContactMethods