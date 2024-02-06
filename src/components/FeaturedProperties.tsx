import { useEffect, useState } from "react"
import FeaturedCard from "./FeaturedCard"
import { listings } from "../assets/data/realEstateListings"
import { useNavigate } from "react-router-dom"
import Button from "./ui/Button"
import NavigationButtons from "./NavigationButtons"

const FeaturedProperties: React.FC = () => {

  type FeaturedCardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    bathrooms: number;
    bedrooms: number;
    type: string;
  
  }

  const [cards, setCards] = useState<FeaturedCardProps[]>([])
  const [display, setDisplay] = useState(0)
  const navigation = useNavigate()

  useEffect(() => {
    setCards(listings.slice(display * 3, (display * 3) + 3))
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
        key={index}
        link={`/properties/${card.id}`}
      />
    )
  })

  return (
    <div className="w-[80%] mx-[10%] flex flex-col">
        <h2 className="text-5xl text-white-0 font-semibold laptop:text-4xl tablet:text-3xl mobile:text-2xl">Featured Properties</h2>
        <div className="flex justify-between">
            <p className="text-grey-60 text-lg laptop:text-base">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
            <Button color="grey" text="View All Properties" onClick={() => navigation('/properties')} />
            
        </div>
        <div className="grid grid-cols-3 gap-6 my-12">
            {contentArray}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-white-0 laptop:text-base">{display + 1} <span className="text-grey-60">of {Math.ceil(listings.length / 3)}</span></p>
          <div>
          <NavigationButtons onClickLeft={() => setDisplay(display - 1)} disabledLeft={display === 0} onClickRight={() => setDisplay(display + 1)} disabledRight={display === Math.ceil(listings.length / 3) - 1} />
          </div>
        </div>
    </div>
  )
}

export default FeaturedProperties