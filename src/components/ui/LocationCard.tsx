import Button from './Button'
import Badge from './Badge';

interface LocationProps {
    type: string;
    name: string;
    description: string;
    badges: string[];
}

const LocationCard = ({type, name, description, badges} : LocationProps) => {
  return (
    <div className='border border-solid border-grey-15 rounded-xl p-12 text-white-0 flex flex-col'>
        <p className='text-lg'>{type}</p>
        <h3 className='text-3xl font-semibold py-3'>{name}</h3>
        <p className='text-grey-60 text-lg'>{description}</p>
        <div className='flex py-10'>
            {badges.map((badge, index) => {
                return <Badge key={index} text={badge} />
            })}
        </div>
        <Button color="purple" text="Get direction" />
    </div>
  )
}

export default LocationCard