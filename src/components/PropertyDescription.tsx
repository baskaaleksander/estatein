import bedroomsicon from '../assets/bedroomicon.svg'
import bathroomsicon from '../assets/bathroomicon.svg'
import areaicon from '../assets/areaicon.svg'

interface PropertyDescriptionInterface {
    description: string
    bedrooms: number
    bathrooms: number
    area: number
}

const PropertyDescription = ({description, bedrooms, bathrooms, area} : PropertyDescriptionInterface) => {
  return (
    <div className="p-12 border border-solid border-grey-15 rounded-xl">
        <div className="pb-12 border-b border-solid border-grey-15">
            <h2 className="text-2xl text-white-0 pb-3">Description</h2>
            <p className="text-lg text-grey-60">{description}</p>
        </div>
        <div className="grid grid-cols-3 pt-12">
            <div>
                <div className='flex'>
                    <img src={bedroomsicon} alt="" />
                    <p className="text-lg text-white-0 ml-2">Bedrooms</p>
                </div>
                <p className="text-2xl text-white-0">{bedrooms}</p>
            </div>
            <div>
                <div className='flex'>
                    <img src={bathroomsicon} alt="" />
                    <p className="text-lg text-white-0 ml-2">Bathrooms</p>
                </div>
                <p className="text-2xl text-white-0">{bathrooms}</p>
            </div>
            <div>
                <div className='flex'>
                    <img src={areaicon} alt="" />
                    <p className="text-lg text-white-0 ml-2">Area (sqm)</p>
                </div>
                <p className="text-2xl text-white-0">{area}</p>
            </div>

        </div>
    </div>
  )
}

export default PropertyDescription