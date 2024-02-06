import icon from '../assets/keyfeatureicon.svg'

const KeyFeaturesCard = ({feature} : {feature : string}) => {
  return (
    <div className="w-full flex p-4 border-l items-center mt-5 border-solid border-purple-60 bg-gradient-to-r from-grey-10 via-grey-08 to-grey-08">
      <img src={icon} alt="key feature icon" className="w-8 h-8 pr-2" />
        <p className='text-grey-60 text-base laptop:text-sm'>{feature}</p>
    </div>
  )
}

export default KeyFeaturesCard