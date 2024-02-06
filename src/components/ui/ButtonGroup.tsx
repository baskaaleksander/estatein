import { useState } from "react"

const ButtonGroup = ({buttons, onClick} : {buttons: string[], onClick: any}) => {
    const [clickedId, setClickedId] = useState(0);
    const handleClick = ({e, index} : {e: React.BaseSyntheticEvent, index: number}) => {
        setClickedId(index);
        onClick(e);
    }
return (
    <div className={`bg-grey-10 text-white-0 py-3 grid grid-cols-${buttons.length}`}>
        {buttons.map((button, index) => {
            return (
                <button 
                    key={index}
                    name={button}
                    onClick={(e) => handleClick({ e, index })} 
                    className={`border border-solid border-grey-15 text-white-0 text-lg rounded-lg px-6 py-4 mx-3 ${index === clickedId ? 'bg-grey-08' : ''}`}
                >
                    {button}
                </button>
            );
        })}
    </div>
)
}

export default ButtonGroup