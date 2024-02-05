const InformationsCard = ({title, text} : {title: string, text: string}) => {
  return (
    <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
        <h2 className='text-4xl'>{title}</h2>
        <p className='text-lg text-grey-60'>{text}</p>
    </div>
  )
}

export default InformationsCard