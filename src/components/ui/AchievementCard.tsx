const AchievementCard = ({title, text} : {title: string, text: string}) => {
  return (
    <div className="p-12 rounded-xl border border-solid border-grey-15 shadow-card">
        <h2 className="text-white-0 text-3xl mb-8">{title}</h2>
        <p className="text-lg text-grey-60">{text}</p>
    </div>
)
}

export default AchievementCard