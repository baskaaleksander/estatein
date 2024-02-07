import { useState } from "react";
import toast from "react-hot-toast"

const ContactForm = () => {
    interface FormData {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        inquiryType: string;
        howHeard: string;
        message: string;
        terms: boolean;
    }

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        howHeard: '',
        message: '',
        terms: false
    })

    const handleSubmit = ({e} : {e: React.BaseSyntheticEvent}) => {
        e.preventDefault()

        const toastFail = (message: string) => {
            toast(message,
                {
                position: 'bottom-center',
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    fontSize: '15px',
                },
                }
            );  
        
        }
          
        
        if(formData.terms === false) {
            toastFail('Please agree to the terms and conditions')
            return
        }
        if(formData.inquiryType === 'select' || formData.inquiryType === '') {
            toastFail('Please select an inquiry type')
            return
        }
        if(formData.howHeard === 'select' || formData.howHeard === '') {
            toastFail('Please select how you heard about us')
            return
        }
        if(formData.firstName === '') {
            toastFail('Please enter your first name')
            return
        }
        if(formData.lastName === '') {
            toastFail('Please enter your last name')
            return
        }
        if(formData.email === '' || !formData.email.includes('@') || !formData.email.includes('.') || formData.email.length < 5){
            toastFail('Please enter a valid email address')
            return
        }
        if(formData.phone === '') {
            toastFail('Please enter a phone number')
            return
        }
        if(formData.message === '') {
            toastFail('Please enter a message')
            return
        }
        toast("Your message has been sent successfully! We'll get back to you soon",
            {
            position: 'bottom-center',
            icon: '✅',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                fontSize: '15px',
            },
            }
        );  
    }
  return (
    <div className="border border-solid border-grey-15 rounded-xl p-24 navbar:p-12">
        <form className="grid grid-cols-3 gap-12 navbar:flex navbar:flex-col" onSubmit={e => e.preventDefault}>
            <div className="flex flex-col">
                <label htmlFor="firstname" className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">First Name</label>
                <input type="text" id="firstname" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-grey-10 text-xl laptop:text-lg tablet:text-base mobile:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter First Name"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastname" className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">Last Name</label>
                <input type="text" id="lastname" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-grey-10 text-xl laptop:text-lg tablet:text-base mobile:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter Last Name"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">Email</label>
                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-grey-10 text-xl laptop:text-lg tablet:text-base mobile:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter Email"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone" className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">Phone</label>
                <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-grey-10 text-lg rounded-lg p-6 tablet:text-base mobile:text-sm text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter Phone"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="inquiryType" className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">Inquiry Type</label>
                <select value={formData.inquiryType} onChange={(e) => setFormData({...formData, inquiryType: e.target.value})} className=" bg-grey-10 text-xl laptop:text-lg tablet:text-base mobile:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60"id="inquiryType">
                    <option value="select">Select Inquiry Type</option>
                    <option value="wtb">Want to buy a property</option>
                    <option value="wts">Want to sell property</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="howHeard" className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">How Did You Heard About Us?</label>
                <select value={formData.howHeard} onChange={(e) => setFormData({...formData, howHeard: e.target.value})} className=" bg-grey-10 text-xl laptop:text-lg tablet:text-base mobile:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60"id="howHeard">
                    <option value="select">Select</option>
                    <option value="internet">Internet</option>
                    <option value="tv">TV</option>
                    <option value="press">Press</option>
                </select>
            </div>
            <div className="col-span-3 navbar:grid-cols-1 flex flex-col">
                <label htmlFor="messagearea" className="text-white-0 text-xl laptop:text-lg tablet:text-base mobile:text-sm mb-4">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} name="" id="messagearea" className="w-full bg-grey-10 text-xl rounded-lg p-6 tablet:text-base mobile:text-sm text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60 resize-none" placeholder="Enter your message"></textarea>
            </div>
            <div className="col-span-3 flex justify-between navbar:flex navbar:flex-col">
                <div className="navbar:pb-5">
                    <input type="checkbox" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} id="terms" className="mr-4"/>
                    <label htmlFor="terms" className="text-grey-60 text-lg laptop:text-base tablet:text-sm">I agree to the terms and conditions</label>
                </div>
                <button className="text-lg laptop:text-base tablet:text-sm text-white-0 bg-purple-60 px-6 py-4 rounded-xl" onClick={(e) => handleSubmit({e})}>Send Your Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm