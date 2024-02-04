import arrowleft from '../assets/arrowleft.svg'
import arrowright from '../assets/arrowright.svg'


const NavigationButtons = ({onClickLeft, disabledLeft, onClickRight, disabledRight} : {onClickLeft: () => void, disabledLeft: boolean | undefined, onClickRight: () => void, disabledRight: boolean | undefined}) => {
    return (
        <>
            <button onClick={onClickLeft} disabled={disabledLeft} className="bg-grey-10 p-3 border border-solid border-grey-15 rounded-full aspect-square mr-3 hover:brightness-75 transition duration-200 disabled:brightness-75"><img src={arrowleft} className="" alt="arrow left"/></button>
            <button onClick={onClickRight} disabled={disabledRight} className="bg-grey-10 p-3 border border-solid border-grey-15 rounded-full aspect-square hover:brightness-75 transition duration-200 disabled:brightness-75"><img src={arrowright} alt="arrow right" /></button>
        </>
    )
}

export default NavigationButtons