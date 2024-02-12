const ContactInput = ({id, value, onChange, placeholder, title} : React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col">
        <label htmlFor={id} className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">{title}</label>
        <input type="text" id={id} value={value} onChange={onChange} className="w-full bg-grey-10 text-xl laptop:text-lg tablet:text-base mobile:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" placeholder={placeholder}/>
    </div>
)
}

export default ContactInput