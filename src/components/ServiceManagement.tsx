import ServiceCards from "./ServiceCards"
import management1 from "../assets/serviceicons/management1.svg"
import management2 from "../assets/serviceicons/management2.svg"
import management3 from "../assets/serviceicons/management3.svg"
import management4 from "../assets/serviceicons/management4.svg"

const ServiceManagement = () => {
    const cards = [
        {
            title: "Tenant Harmony",
            description: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
            icon: management1
        },
        {
            title: "Maintenance Ease",
            description: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
            icon: management2
        },
        {
            title: "Financial Peace of Mind",
            description: "Managing property finances can be complex. Our financial experts take care of rent collection",
            icon: management3
        },
        {
            title: "Legal Guardian",
            description: "Stay compliant with property laws and regulations effortlessly.",
            icon: management4
        },
        {
            title: "Experience Effortless Property Management",
            description: "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
        },
    ]

    return (
        <div className="px-[10%]">
            <ServiceCards 
                title="Effortless Property Management" 
                description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
                cards={cards} 
            />
        </div>
    )
}

export default ServiceManagement