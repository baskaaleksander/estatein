import { useState } from "react"
import { listings } from "../assets/data/realEstateListings";
import FeaturedCard from "./FeaturedCard";

const PropertiesAll = () => {
    const [search, setSearch] = useState("");
    const [propertyType, setPropertyType] = useState<string>("All");
    const [minBedrooms, setMinBedrooms] = useState<string>("All");
    const [minBathrooms, setMinBathrooms] = useState<string>("All");

    const filteredListings = listings.filter((listing) => {
        const isMatchingSearch = listing.location.toLowerCase().includes(search.toLowerCase());
        const isMatchingType = propertyType === "All" || propertyType === listing.type;
        const isMatchingBedrooms = minBedrooms === "All" || listing.bedrooms >= parseInt(minBedrooms);
        const isMatchingBathrooms = minBathrooms === "All" || listing.bathrooms >= parseInt(minBathrooms);
        return isMatchingSearch && isMatchingType && isMatchingBedrooms && isMatchingBathrooms;
    });

    const contentArray = filteredListings.map((listing, index) => {
        return (
            <FeaturedCard
                key={index}
                title={listing.title}
                description={listing.description}
                image={listing.image}
                price={listing.price}
                bathrooms={listing.bathrooms}
                bedrooms={listing.bedrooms}
                type={listing.type}
                link={`/properties/${listing.id}`}
            />
        )
    });

    return (
        <div className="py-20 flex flex-col items-center mx-[10%]">
            <div className="w-[90%]">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for your desired location!" className="w-full p-6 text-2xl bg-grey-08 border border-solid border-grey-15 rounded-2xl text-white-0 shadow-card focus-within:border-purple-60 outline-none laptop:text-xl tablet:text-lg" />
            </div>
            <div>
                <div className="flex pt-10 text-white-0 justify-center items-center mobile:flex-col">
                    
                        <label htmlFor="propertyType" className="text-lg text-grey-60">Property Type</label>
                        <select className=" bg-grey-10 text-lg laptop:text-base tablet:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60 mx-5" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} id="propertyType">
                            <option value="All">All</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                        </select>
                    <label htmlFor="bedrooms" className="text-lg text-grey-60">Bedrooms</label>
                    <select className="bg-grey-10 text-lg laptop:text-base tablet:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60 mx-5" value={minBedrooms} onChange={(e) => setMinBedrooms(e.target.value)} id="bedrooms">
                        <option value="All">All</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                    <label htmlFor="bathrooms" className="text-lg text-grey-60">Bathrooms</label>
                    <select className="bg-grey-10 text-lg laptop:text-base tablet:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60 mx-5" value={minBathrooms} onChange={(e) => setMinBathrooms(e.target.value)} id="bathrooms">
                        <option value="All">All</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-10 py-20 w-full mobile:grid-cols-1 tablet:grid-cols-2">
                    {contentArray}
                </div>
            </div>
        </div>
    )
}

export default PropertiesAll