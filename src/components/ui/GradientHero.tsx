const GradientHero = ({title, text} : {title: string, text: string}) => {
  return (
    <div className="py-32 px-[10%] bg-gradient-to-br from-grey-15 via-grey-10 to-grey-10">
        <h2 className="text-5xl text-white-0">{title}</h2>
        <p className="text-grey-60 text-lg">{text}</p>
    </div>

  )
}

export default GradientHero