import facebook from '../assets/iconfb.svg'
import twitter from '../assets/icontwitter.svg'
import linkedin from '../assets/iconlinkedin.svg'

interface TeamCardProps {
    img: string;
    name: string;
    title: string;
}

const TeamCard = ({img, name, title} : TeamCardProps) => {
  return (
    <div className="border border-solid border-grey-15 rounded-xl p-8 text-center">
        <img src={img} alt={name} className="rounded-xl"/>
        <h3 className="text-2xl text-white-0 pt-8 laptop:text-xl tablet:text-lg font-semibold">{name}</h3>
        <p className="text-grey-60 text-lg tablet:text-base">{title}</p>
        <div>
        <button className='bg-grey-08 p-3 rounded-full'><img src={facebook} className='w-6 h-6' alt="" /></button>
            <button className='bg-grey-08 p-3 rounded-full'><img src={linkedin} className='w-6 h-6' alt="" /></button>
            <button className='bg-grey-08 p-3 rounded-full'><img src={twitter} className='w-6 h-6' alt="" /></button>
        </div>
    </div>
  )
}

export default TeamCard