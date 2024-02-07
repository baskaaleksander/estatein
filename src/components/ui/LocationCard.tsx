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
    <div className='border border-solid border-grey-15 rounded-xl p-12 text-white-0 flex flex-col '>
        <p className='text-lg laptop:text-base tablet:text-sm'>{type}</p>
        <h3 className='text-3xl font-semibold py-3 laptop:text-2xl tablet:text-xl mobile:text-lg'>{name}</h3>
        <p className='text-grey-60 text-lg laptop:text-base tablet:text-sm'>{description}</p>
        <div className='flex py-10 laptop:grid laptop:grid-cols-2 laptop:gap-4 mobile:grid-cols-1 '>
            {badges.map((badge, index) => {
                return <Badge key={index} text={badge} />
            })}
        </div>
        <Button color="purple" text="Get direction" />
    </div>
  )
}

export default LocationCard