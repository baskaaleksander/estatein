import ButtonGroup from "./ui/ButtonGroup"
import { locations } from "../assets/data/officeLocations"
import { useState } from "react"
import LocationCard from "./ui/LocationCard";

const LocationsComponent = () => {
    const [location, setLocation] = useState("All");

    const filteredLocations = locations.filter((quater) => {
        const isMatchingLocation = location === "All" || location === quater.type;
        return isMatchingLocation;
    });

    const contentArray = filteredLocations.map((quater, index) => {
        return (
            <LocationCard type={quater.type} name={quater.name} description={quater.description} badges={quater.badges} />
        )
    })

        const handleClick = (e: React.BaseSyntheticEvent) => {
                setLocation(e.target.name);
        }
    return (
        <div className="px-[10%] text-white-0">
            <h2 className="text-5xl font-semibold">Discover Our Office Locations</h2>
            <p className="text-lg text-grey-60 pt-3 pb-20">Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you</p>
            <div>
                <ButtonGroup buttons={["All","Regional", "International"]} onClick={handleClick}/>
                <div className="grid grid-cols-2 gap-8 py-20">
                    {contentArray}
                </div>
            </div>
        </div>
    )
}

export default LocationsComponent