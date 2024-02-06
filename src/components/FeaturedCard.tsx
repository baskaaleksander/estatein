import bedroomicon from '../assets/bedroomicon.svg'
import bathroomicon from '../assets/bathroomicon.svg'
import typeicon from '../assets/typeicon.svg'
import { useNavigate } from 'react-router-dom'
import Badge from './ui/Badge'
import Button from './ui/Button'

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
  const navigate = useNavigate();
  return (
    <div className="text-white-0 text-xl bg-grey-08 rounded-lg border border-solid border-grey-15 flex flex-col p-10">
      <img src={image} alt={title} className="w-full rounded-lg" />
      <div className="mt-8">
        <h3 className="text-2xl font-semibold laptop:text-xl tablet:text-lg">{title}</h3>
        <p className="text-lg text-grey-60 laptop:text-base tablet:text-sm">{description}</p>
      </div>
      <div className='flex my-8 laptop:grid laptop:grid-cols-2 laptop:gap-4'>
        <Badge icon={bedroomicon} text={`${bedrooms}-Bedroom`} />
        <Badge icon={bathroomicon} text={`${bathrooms}-Bathroom`} />
        <Badge icon={typeicon} text={type} />
      </div>
      
      <div className='grid grid-cols-2'>
        <div>
          <p className='text-base text-grey-60 laptop:text-sm'>Price</p>
          <p className="text-2xl laptop:text-xl tablet:text-lg">${price}</p>
        </div>
        <Button color="purple" text="View Property Details" onClick={() => navigate(`${link}`)} />
      </div>

    </div>
  )
}

export default FeaturedCard