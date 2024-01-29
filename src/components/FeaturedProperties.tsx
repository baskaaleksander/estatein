import { useEffect, useState } from "react"
import FeaturedCard from "./FeaturedCard"
import { listings } from "../assets/realEstateListings"

const FeaturedProperties: React.FC = () => {

  type FeaturedCardProps = {
    title: string;
    description: string;
    image: string;
    price: number;
    bathrooms: number;
    bedrooms: number;
    type: string;
    link: string;
  
  }

  const [cards, setCards] = useState<FeaturedCardProps[]>([])
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    setCards(listings.slice(display, display + 3))
  }, [display])
  const contentArray = cards.map((card, index) => {
    return (
      <FeaturedCard
        title={card.title}
        description={card.description}
        image={card.image}
        price={card.price}
        bathrooms={card.bathrooms}
        bedrooms={card.bedrooms}
        type={card.type}
        link={card.link}
        key={index}
      />
    )
  })

  return (
    <div className="w-[80%] mx-[10%] flex flex-col">
        <h2 className="text-5xl text-white-0">Featured Properties</h2>
        <div className="flex justify-between">
            <p className="text-grey-60 text-lg">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
            <button className="px-6 py-4 bg-grey-10 text-white-0 rounded-xl border border-solid border-grey-15 text-lg">View All Properties</button>
            
        </div>
        <div>
            {contentArray}
        </div>
        <div>
          <p>{display + 1} of {Math.ceil(listings.length / 3)}</p>
          
        </div>
    </div>
  )
}

export default FeaturedProperties