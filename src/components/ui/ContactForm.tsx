import { useState } from "react";
import toast from "react-hot-toast"
import ContactInput from "./ContactInput";
import ContactSelect from "./ContactSelect";


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
        if(formData.firstName.trim() === '') {
            toastFail('Please enter your first name')
            return
        }
        if(formData.lastName.trim() === '') {
            toastFail('Please enter your last name')
            return
        }
        if(formData.email.trim() === '' || !formData.email.includes('@') || !formData.email.includes('.')){
            toastFail('Please enter a valid email address')
            return
        }
        if(formData.phone.trim() === '') {
            toastFail('Please enter a phone number')
            return
        }
        if(formData.message.trim() === '') {
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
    const optionsHowHeard = ['Internet', 'TV', 'Press']
    const optionsInquiryType = ['Want to buy a property', 'Want to sell property', 'Other']
  return (
    <div className="border border-solid border-grey-15 rounded-xl p-24 navbar:p-12">
        <form className="grid grid-cols-3 gap-12 navbar:flex navbar:flex-col" onSubmit={e => handleSubmit({e})}>
            <ContactInput id="firstname" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} placeholder="Enter First Name" title="First Name" />
            <ContactInput id="lastname" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} placeholder="Enter Last Name" title="Last Name" />
            <ContactInput id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Enter Email" title="Email" />
            <ContactInput id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="Enter Phone" title="Phone" />
            <ContactSelect id="inquiryType" value={formData.inquiryType} onChange={(e) => setFormData({...formData, inquiryType: e.target.value})} options={optionsInquiryType} title="Inquiry Type" />
            <ContactSelect id="howHeard" value={formData.howHeard} onChange={(e) => setFormData({...formData, howHeard: e.target.value})} options={optionsHowHeard} title="How Did You Heard About Us?" />
            <div className="col-span-3 navbar:grid-cols-1 flex flex-col">
                <label htmlFor="messagearea" className="text-white-0 text-xl laptop:text-lg tablet:text-base mobile:text-sm mb-4">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} name="" id="messagearea" className="w-full bg-grey-10 text-xl rounded-lg p-6 tablet:text-base mobile:text-sm text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60 resize-none" placeholder="Enter your message"></textarea>
            </div>
            <div className="col-span-3 flex justify-between navbar:flex navbar:flex-col">
                <div className="navbar:pb-5">
                    <input type="checkbox" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} id="terms" className="mr-4"/>
                    <label htmlFor="terms" className="text-grey-60 text-lg laptop:text-base tablet:text-sm">I agree to the terms and conditions</label>
                </div>
                <button className="text-lg laptop:text-base tablet:text-sm text-white-0 bg-purple-60 px-6 py-4 rounded-xl" type="submit" >Send Your Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm