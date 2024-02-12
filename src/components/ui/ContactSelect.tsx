const ContactSelect = ({value, onChange, id, options, title}: {options: string[], title: string} & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <div className="flex flex-col">
        <label htmlFor={id} className="text-white-0 text-xl mb-4 laptop:text-lg tablet:text-base mobile:text-sm">{title}</label>
        <select value={value} onChange={onChange} className=" bg-grey-10 text-xl laptop:text-lg tablet:text-base mobile:text-sm rounded-lg p-6 text-grey-40 border border-solid border-grey-15 outline-none focus-within:border-purple-60" id={id}>
            <option value="select">Select</option>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
  )
}

export default ContactSelect