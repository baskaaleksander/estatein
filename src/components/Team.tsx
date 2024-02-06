import TeamCard from "./TeamCard"

interface TeamData {
    img: string
    name: string
    title: string
}

const teamData: TeamData[] = [
    {
        img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        title: "CEO"
    },
    {
        img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        title: "CEO"
    },
    {
        img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        title: "CEO"
    },
    {
        img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        title: "CEO"
    }
]

const contentArray = teamData.map((card, index) => {
    return <TeamCard
        key={index}
        img={card.img}
        name={card.name}
        title={card.title} />
})

const Team = () => {
  return (
    <div className="py-20 px-[10%]">
        <div>
            <h2 className="text-white-0 text-5xl font-semibold laptop:text-4xl tablet:text-3xl mobile:text-2xl">Meet the Estatein Team</h2>
            <p className="text-lg text-grey-60 laptop:text-base">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
        </div>
        <div className="grid grid-cols-4 pt-20 gap-8 tablet:grid-cols-2 mobile:grid-cols-1">
            {contentArray}
        </div>
    </div>
  )
}

export default Team