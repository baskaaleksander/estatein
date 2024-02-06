import ExperienceCard from "./ui/ExperienceCard"

interface Experience{
    title: string
    description: string
    step: number
}

const ExperienceCards : Experience[] = [
    {
        title:"Discover a World of Possibilities",
        description:"Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
        step:1
    },
    {
        title:"Narrowing Down Your Choices",
        description:"Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
        step:2
    },
    {
        title:"Personalized Guidance",
        description:"Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
        step:3
    },
    {
        title:"See It for Yourself",
        description:"Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
        step:4
    },
    {
        title:"Making Informed Decisions",
        description:"Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
        step:5
    },
    {
        title:"Getting the Best Deal",
        description:"We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
        step:6
    },
]

const contentArray = ExperienceCards.map((card, index) => {
    return <ExperienceCard
        key={index}
        title={card.title}
        description={card.description}
        step={card.step} />
})

const ExperienceMap = () => {
  return (
    <div className="px-[10%] py-20">
        <h2 className="text-white-0 text-5xl font-semibold laptop:text-4xl tablet:text-3xl mobile:text-2xl">Navigating the Estatein Experience</h2>
        <p className="text-grey-60 text-lg laptop:text-base">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 auto-rows-auto pt-20 tablet:grid-cols-2 mobile:grid-cols-1">
            {contentArray}
        </div>
    </div>
  )
}

export default ExperienceMap