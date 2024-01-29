interface FeaturedCardProps { 
  title: string,
  description: string,
  image: string,
  price: number,
  bathrooms: number,
  bedrooms: number,
  type: string,
  link: string,
}

const FeaturedCard = ({title, description, image, price, bathrooms, bedrooms, type, link} : FeaturedCardProps) => {
  return (
    <div>
      {title}
      {description}
      {image}
      {price}
      {bathrooms}
      {bedrooms}
      {type}
      {link}

    </div>
  )
}

export default FeaturedCard