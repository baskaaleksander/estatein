interface ExperienceCardProps {
    title: string
    description: string
    step: number
}

const ExperienceCard = ({title, description, step} : ExperienceCardProps) => {
  return (
    <div className="mb-10 ">
        <div className="border-l border-grey-15">
            <p className="text-white-0 text-xl p-4">Step {step}</p>
        </div>
        <div className="border border-solid border-grey-15 p-10 h-full rounded-xl rounded-t-none exp-card">
            <h2 className="text-white-0 text-2xl">{title}</h2>
            <p className="text-grey-60 text-lg">{description}</p>
        </div>
    </div>
  )
}

export default ExperienceCard