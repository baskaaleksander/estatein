const InformationsCard = ({title, text} : {title: string, text: string}) => {
  return (
    <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
        <h2 className='text-4xl laptop:text-2xl mobile:text-xl font-semibold'>{title}</h2>
        <p className='text-lg text-grey-60 laptop:text-base mobile:text-small'>{text}</p>
    </div>
  )
}

export default InformationsCard