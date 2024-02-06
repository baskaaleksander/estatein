import { useEffect, useState } from "react";
import { testimonials } from "../assets/data/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import NavigationButtons from "./NavigationButtons";



interface Testimonial {
    name: string;
    img: string;
    text: string;
    location: string;
    stars: number;
    title: string;
}



const Testimonials = () => {
    const [cards, setCards] = useState<Testimonial[]>([])
const [display, setDisplay] = useState(0);

useEffect(() => {
    setCards(testimonials.slice(display * 3, (display * 3) + 3))
}, [display])

const contentArray = cards.map((card, index) => {
    return (
        <TestimonialCard
            key={index}
            title={card.title}
            name={card.name}
            img={card.img}
            text={card.text}
            location={card.location}
            stars={card.stars}
        />
    )
})
  return (
    <div className="w-[80%] mx-[10%] pb-24">
        <h2 className="text-white-0 text-5xl">What Our Clients Say</h2>
        <p className="text-lg text-grey-60">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
    <div className="grid grid-cols-3 gap-6 my-12">
        {contentArray}
    </div>
    <div className="flex justify-between items-center">
          <p className="text-lg text-white-0">{display + 1} <span className="text-grey-60">of {Math.ceil(testimonials.length / 3)}</span></p>
          <div>
            <NavigationButtons onClickLeft={() => setDisplay(display - 1)} disabledLeft={display === 0} onClickRight={() => setDisplay(display + 1)} disabledRight={display === Math.ceil(testimonials.length / 3) - 1} />
          </div>
        </div>

    </div>
  )
}

export default Testimonials