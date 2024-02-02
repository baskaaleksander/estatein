import { useParams } from 'react-router-dom'
import { listings } from '../assets/realEstateListings';
import Error404 from './Error404';
import PropertyDetailsCarousel from '../components/PropertyDetailsCarousel';

const PropertyDetails = () => {
  const {id} = useParams();
  const property = listings.find((property) => property.id === parseInt(id || ""));

  if (!property) {
    return <Error404 />;
  }

  return (

    <div className='px-[10%] bg-grey-08 py-20 grid grid-cols-2 text-white-0'>
      <h2 className='text-3xl'>{property.title}</h2>
      <PropertyDetailsCarousel photos={property.images}/>
    </div>
  );

}

export default PropertyDetails