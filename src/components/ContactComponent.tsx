import ContactForm from './ui/ContactForm'

const ContactComponent = () => {
  return (
    <div className='px-[10%] py-20 text-white-0'>
        <h2 className='text-5xl font-semibold'>Let's Connect</h2>
        <p className='text-lg text-grey-60 pt-3 pb-20'>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>
        <ContactForm />
    </div>
  )
}

export default ContactComponent