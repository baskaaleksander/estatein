import { Toaster } from "react-hot-toast"
import ContactComponent from "../components/ContactComponent"
import ContactMethods from "../components/ContactMethods"
import LocationsComponent from "../components/LocationsComponent"
import GradientHero from "../components/ui/GradientHero"

const Contact = () => {
  return (
    <div className="bg-grey-08">
        <Toaster />
        <GradientHero 
        title="Get in Touch with Estatein" 
        text="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation." />
        <ContactMethods />
        <div className="px-[10%]">
        <ContactComponent />
        <LocationsComponent />
        </div>
    </div>
    )

}

export default Contact