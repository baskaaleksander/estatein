import bedroomicon from '../assets/bedroomicon.svg'
import bathroomicon from '../assets/bathroomicon.svg'
import typeicon from '../assets/typeicon.svg'

interface FeaturedCardProps { 
  title: string,
  description: string,
  image: string,
  price: number,
  bathrooms: number,
  bedrooms: number,
  type: string,
  link: string,
}

const FeaturedCard = ({title, description, image, price, bathrooms, bedrooms, type, link} : FeaturedCardProps) => {
  return (
    <div className="text-white-0 text-xl bg-grey-08 rounded-lg border border-solid border-grey-15 flex flex-col p-10">
      {/* {title}
      {description}
      {image}
      {price}
      {bathrooms}
      {bedrooms}
      {type}
      {link} */}
      <img src={image} alt={title} className="w-full rounded-lg" />
      <div className="">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg text-grey-60">{description}</p>
      </div>
      <div>
        <p className="text-lg inline px-2 py-3.5 bg-grey-10 rounded-3xl border border-solid border-grey-15"><img src={bedroomicon} className='inline ' alt='bedroomicon'/> {bedrooms}-Bedroom</p>
        <p className='text-lg inline px-2 py-3.5 bg-grey-10 rounded-3xl border border-solid border-grey-15'><img src={bathroomicon} className='inline' alt='bathroomsicon' /> {bathrooms}-Bathroom</p>
        <p className="text-lg inline px-2 py-3.5 bg-grey-10 rounded-3xl border border-solid border-grey-15"><img src={typeicon} className='inline' alt='type icon.' /> {type}</p>
      </div>
      
      <div className='grid grid-cols-2'>
        <div>
          <p className='text-base text-grey-60'>Price</p>
          <p className="text-2xl">${price}</p>
        </div>
        <button className='bg-purple-60 px-6 py-4 rounded-xl'><a href={link} className="">View Property Details</a></button>
      </div>

    </div>
  )
}

export default FeaturedCard