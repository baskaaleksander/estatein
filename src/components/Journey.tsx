import heroimg from '../assets/aboutheroimg.svg'

const Journey = () => {
  return (
    <div className='px-[10%] grid grid-cols-2 gap-10 py-20'>
    <div className='flex flex-col justify-center'>
    <h2 className='text-white-0 text-5xl leading-[72px]'>Our Journey</h2>
    <p className='text-grey-60 text-lg font-medium'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
    <div className='grid grid-cols-3 gap-5 py-13 my-20' >
        <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
            <h2 className='text-4xl'>200+</h2>
            <p className='text-lg text-grey-60'>Happy Customers</p>
        </div>
        <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
            <h2 className='text-4xl'>10k+</h2>
            <p className='text-lg text-grey-60'>Properties For Clients</p>
        </div>
        <div className='text-white-0 px-6 py-3.5 border border-solid border-grey-15 rounded-xl'>
            <h2 className='text-4xl'>16+</h2>
            <p className='text-lg text-grey-60'>Years of Experience</p>
        </div>

    </div>
    </div>
    <div className='border border-solid border-grey-15 w-fit ml-auto rounded-3xl'>
        <img src={heroimg} className="rounded-b-3xl" alt=""/>
    </div>
</div>

  )
}

export default Journey