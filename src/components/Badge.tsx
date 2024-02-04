const Badge = ({icon, text} : {icon?: string, text: string}) => {
  return (
    <div className="px-2 py-2 bg-grey-10 rounded-3xl border border-solid border-grey-15 flex">
        {icon && <img src={icon} alt="key feature icon" className="" />}
        <p className={`text-lg ${icon && "ml-2"}`}>{text}</p>
    </div>
  )
}

export default Badge