const Button = ({color, text, onClick, additionalStyle} : {color: string, text: string, onClick?: () => void, additionalStyle?: string}) => {
  return (
    <button className={`text-lg laptop:text-base tablet:text-sm text-white-0 ${color == "purple" ? "bg-purple-60" : "bg-grey-10 border border-solid border-grey-15"} px-6 py-4 rounded-xl hover:brightness-75 transition duration-200 ${additionalStyle}`}onClick={onClick}>{text}</button>
  )
}

export default Button