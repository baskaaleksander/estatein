import star from '../assets/starvalues.svg'
import clienticon from '../assets/clienticon.svg'
import excellenceicon from '../assets/excellenceicon.svg'

const Values = () => {
  return (
    <div className="px-[10%] py-20 flex">
        <div className="mr-20">
            <h2 className="text-white-0 text-5xl">Our Values</h2>
            <p className="text-lg text-grey-60">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 p-14 bg-grey-08 border border-solid border-grey-15 rounded-xl shadow-card text-white-0">
            <div className='flex items-center'>
                <img src={star} alt="star" className="p-4 border border-solid border-purple-60 rounded-full mr-3"/>
                <div>
                    <h2 className="text-2xl">Trust</h2>
                    <p className="text-grey-60 text-lg">Trust is the cornerstone of every successful real estate transaction.</p>
                    </div>
                </div>
            <div className='flex items-center'>
                <img src={excellenceicon} alt="star" className="p-4 border border-solid border-purple-60 rounded-full mr-3"/>
                <div>
                <h2 className="text-2xl">Excellence</h2>
                <p className="text-grey-60 text-lg">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                </div>
            </div>
            <div className="pt-8 flex items-center" >
                <img src={clienticon} alt="star" className="p-4 border border-solid border-purple-60 rounded-full mr-3"/>
                <div>
                <h2 className="text-2xl">Client-Centric</h2>
                <p className="text-grey-60 text-lg">Your dreams and needs are at the center of our universe. We listen, understand.</p>
                </div>
            </div>
            <div className="pt-8 flex items-center">
                <img src={star} alt="star" className="p-4 border border-solid border-purple-60 rounded-full mr-3"/>
                <div>
                <h2 className="text-2xl">Our Commitment</h2>
                <p className="text-grey-60 text-lg">We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Values