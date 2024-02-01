import Achievements from "../components/Achievements"
import Journey from "../components/Journey"
import Values from "../components/Values"
import ExperienceMap from "../components/ExperienceMap"
import Team from "../components/Team"

const About = () => {
  return (
    <div className="bg-grey-08">
      <Journey />
      <Values />
      <Achievements />
      <ExperienceMap />
      <Team />
    </div>
  )
}

export default About