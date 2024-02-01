import { useParams } from 'react-router-dom'

const PropertyDetails = () => {
    const {id} = useParams();
  return (
    <div>{id}</div>
  )
}

export default PropertyDetails