import AchievementCard from "./AchievementCard";

const Achievements = () => {
    interface Achievements {
        title: string;
        text: string;
    }
    const achievements: Achievements[] = [
        {
            title: "3+ Years of Excellence",
            text: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
        },
        {
            title: "Happy Clients",
            text: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
        },
        {
            title: "Industry Recognition",
            text: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
        }
    ]

    const contentArray = achievements.map((achievement, index) => {
        return (
            <AchievementCard title={achievement.title} text={achievement.text} key={index} />
        )
    })
  return (
    <div className="px-[10%] py-20">
        <div>
            <h2 className="text-white-0 text-5xl">Our Achievements</h2>
            <p className="text-grey-60 text-lg">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className="grid grid-cols-3 gap-10 pt-20">
            {contentArray}
        </div>
    </div>
  )
}

export default Achievements