import GradientHero from '../components/ui/GradientHero'
import Pros from '../components/Pros'
import ServicesValue from '../components/ServicesValue'
import ServiceManagement from '../components/ServiceManagement'
import ServiceDecisions from '../components/ServiceDecisions'

const Services = () => {
  return (
    <div className='bg-grey-08'>
      <GradientHero title="Elevate Your Real Estate Experience" text="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams." />
      <Pros />
      <ServicesValue />
      <ServiceManagement />
      <ServiceDecisions />
    </div>
  )
}

export default Services