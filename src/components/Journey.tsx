import heroimg from '../assets/aboutheroimg.svg'
import Informations from './Informations'

const Journey = () => {
  return (
    <div className='px-[10%] grid grid-cols-2 gap-10 py-20'>
    <div className='flex flex-col justify-center'>
    <h2 className='text-white-0 text-5xl leading-[72px] font-semibold laptop:text-4xl tablet:text-3xl mobile:text-2xl'>Our Journey</h2>
    <p className='text-grey-60 text-lg font-medium laptop:text-base'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
    <div className='grid grid-cols-3 gap-5 py-13 my-20' >
        <Informations />
    </div>
    </div>
    <div className='border border-solid border-grey-15 w-fit ml-auto rounded-3xl'>
        <img src={heroimg} className="rounded-b-3xl" alt=""/>
    </div>
</div>

  )
}

export default Journey