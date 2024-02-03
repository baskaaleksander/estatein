import { useParams } from 'react-router-dom'
import { listings } from '../assets/realEstateListings';
import Error404 from './Error404';
import PropertyDetailsCarousel from '../components/PropertyDetailsCarousel';
import KeyFeatures from '../components/KeyFeatures';

const PropertyDetails = () => {
  const {id} = useParams();
  const property = listings.find((property) => property.id === parseInt(id || ""));


  if (!property) {
    return <Error404 />;
  }

  return (

    <div className='px-[10%] bg-grey-08 py-20  text-white-0'>
      <div className='flex justify-between items-center'>
      <h2 className='text-3xl'>{property.title}, <span className='text-grey-60 text-2xl'>{property.location}</span></h2>
      <div>
        <p className='text-xl text-grey-60'>Price</p>
        <p className='text-2xl'>${property.price}</p>
      </div>
      </div>
      <div className='grid grid-cols-2 gap-5 py-14'>
      <div>
      
      <KeyFeatures features={property.keyfeatures}/>
      </div>
      <PropertyDetailsCarousel photos={property.images}/>
      </div>
    </div>
  );

}

export default PropertyDetails