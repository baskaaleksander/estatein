import Button from "./Button"

const ContactForm = () => {

    const handleSubmit = () => {
    }
  return (
    <div className="border border-solid border-grey-15 rounded-xl p-24 ">
        <form className="grid grid-cols-3 gap-12" onSubmit={e => e.preventDefault}>
            <div>
                <label htmlFor="firstname" className="text-white-0 text-xl mb-4">First Name</label>
                <input type="text" id="firsname" className="w-full bg-grey-10 text-lg rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter First Name"/>
            </div>
            <div>
                <label htmlFor="lastname" className="text-white-0 text-xl mb-4">Last Name</label>
                <input type="text" id="lastname" className="w-full bg-grey-10 text-lg rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter Last Name"/>
            </div>
            <div>
                <label htmlFor="email" className="text-white-0 text-xl mb-4">Email</label>
                <input type="email" id="email" className="w-full bg-grey-10 text-lg rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter Email"/>
            </div>
            <div>
                <label htmlFor="phone" className="text-white-0 text-xl mb-4">Phone</label>
                <input type="tel" id="phone" className="w-full bg-grey-10 text-lg rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder="Enter Phone"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="inquiryType" className="text-white-0 text-xl mb-4">Inquiry Type</label>
                <select className=" bg-grey-10 text-lg rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60"id="inquiryType">
                    <option value="All">Select Inquiry Type</option>
                    <option value="House">Want to buy a property</option>
                    <option value="Apartment">Want to sell property</option>
                    <option value="Villa">Other</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="howHeard" className="text-white-0 text-xl mb-4">How Did You Heard About Us?</label>
                <select className=" bg-grey-10 text-xl rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60"id="howHeard">
                    <option value="All">Select</option>
                    <option value="House">Internet</option>
                    <option value="Apartment">TV</option>
                    <option value="Villa">Press</option>
                </select>
            </div>
            <div className="col-span-3">
                <label htmlFor="messagearea" className="text-white-0 text-xl mb-4">Message</label>
                <textarea name="" id="messagearea" className="w-full bg-grey-10 text-xl rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60 resize-none" placeholder="Enter your message"></textarea>
            </div>
            <div className="col-span-3 flex justify-between">
                <div>
                    <input type="checkbox" id="terms" className="mr-4"/>
                    <label htmlFor="terms" className="text-grey-60 text-lg">I agree to the terms and conditions</label>
                </div>
                <Button color="purple" text="Send Your Message" onClick={() => handleSubmit()} />
            </div>
        </form>
    </div>
  )
}

export default ContactForm