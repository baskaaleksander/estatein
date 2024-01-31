const Achievements = () => {
  return (
    <div className="px-[10%] py-20">
        <div>
            <h2 className="text-white-0 text-5xl">Our Achievements</h2>
            <p className="text-grey-60 text-lg">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className="grid grid-cols-3 gap-10 pt-20">
            <div className="p-12 rounded-xl border border-solid border-grey-15 shadow-card">
                <h2 className="text-white-0 text-3xl mb-8">3+ Years of Excellence</h2>
                <p className="text-lg text-grey-60">With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.</p>
            </div>
            <div className="p-12 rounded-xl border border-solid border-grey-15 shadow-card">
                <h2 className="text-white-0 text-3xl mb-8">Happy Clients</h2>
                <p className="text-lg text-grey-60">Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
            </div>
            <div className="p-12 rounded-xl border border-solid border-grey-15 shadow-card">
                <h2 className="text-white-0 text-3xl mb-8">Industry Recognition</h2>
                <p className="text-lg text-grey-60">We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
            </div>
        </div>
    </div>
  )
}

export default Achievements