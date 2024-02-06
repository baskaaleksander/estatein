import { useParams } from 'react-router-dom'
import { listings } from '../assets/data/realEstateListings';
import Error404 from './Error404';
import PropertyDetailsCarousel from '../components/PropertyDetailsCarousel';
import KeyFeatures from '../components/KeyFeatures';
import Badge from '../components/ui/Badge';
import PropertyDescription from '../components/PropertyDescription';
import PricingDetails from '../components/PricingDetails';
import ContactForm from '../components/ui/ContactForm';

const PropertyDetails = () => {
  const {id} = useParams();
  const property = listings.find((property) => property.id === parseInt(id || ""));


  if (!property) {
    return <Error404 />;
  }

  return (

    <div className='px-[10%] bg-grey-08 py-20  text-white-0'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
      <h2 className='text-3xl mr-2 font-semibold laptop:text-2xl tablet:text-xl mobile:text-lg'>{property.title}</h2>
      <Badge text={property.location} />
      </div>
      <div>
        <p className='text-xl text-grey-60 laptop:text-lg tablet:text-base mobile:text-sm'>Price</p>
        <p className='text-2xl laptop:text-xl tablet:text-lg mobile:text-base'>${property.price}</p>
      </div>
      </div>
      <div className='grid grid-cols-2 gap-5 py-14'>
      <div>
        <PropertyDescription description={property.description} bedrooms={property.bedrooms} bathrooms={property.bathrooms} area={property.area}/>
        <KeyFeatures features={property.keyfeatures}/>
      </div>
      <PropertyDetailsCarousel photos={property.images}/>
      </div>
        <ContactForm />
        <PricingDetails 
          transfertax={property.costs.transfertax} 
          legalfees={property.costs.legalfees} 
          homeinspection={property.costs.homeinspection} 
          insurance={property.costs.insurance} 
          propertytax={property.costs.propertytax} 
          associationfee={property.costs.associationfee} 
          propertyinsurance={property.costs.propertyinsurance} 
          listingprice={property.price} downpayment={property.price * 0.25} 
          additionalfees={property.costs.additionalfees} 
          mortgagefees={property.costs.mortgagefees}
        />
    </div>
  );

}

export default PropertyDetails