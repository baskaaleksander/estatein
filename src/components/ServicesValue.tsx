import ServiceCards from "./ServiceCards"
import value1 from "../assets/serviceicons/value1.svg"
import value2 from "../assets/serviceicons/value2.svg"
import value3 from "../assets/serviceicons/value3.svg"
import value4 from "../assets/serviceicons/value4.svg"



const ServicesValue = () => {
    const cards = [
        {
            title: "Valuation Mastery",
            description: "Discover the true worth of your property with our expert valuation services.",
            icon: value1
        },
        {
            title: "Strategic Marketing",
            description: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
            icon: value2
        },
        {
            title: "Negotiation Wizardry",
            description: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
            icon: value3
        },
        {
            title: "Closing Success",
            description: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
            icon: value4
        },
        {
            title: "Unlock the Value of Your Property Today",
            description: "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
        },
    ]

    return (
        <div className="px-[10%]">
            <ServiceCards 
                title="Unlock Property Value" 
                description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
                cards={cards} 
            />
        </div>
    )
}

export default ServicesValue