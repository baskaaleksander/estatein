import { motion } from "framer-motion"
import star from "../assets/star.svg"

interface Testimonial {
    name: string;
    img: string;
    title: string;
    text: string;
    location: string;
    stars: number;
}

const TestimonialCard = ({name, img, title, text, location, stars} : Testimonial) => {

  const starsArray = [];
  for (let i = 0; i < stars; i++) {
    starsArray.push(<img src={star}className="p-3 bg-grey-10 border border-solid border-grey-15 rounded-full mr-2 mobile:p-2" alt="star"/>)
  }

  return (
      <motion.div
      whileInView="visible"
      initial="hidden"
      viewport={{once: true}}
      transition={{ duration: 0.5 }}
      variants={
        {
          hidden: {opacity: 0, x: 100},
          visible: {opacity: 1, x: 0}
        }
      }
      className="text-white-0 bg-grey-08 rounded-lg border border-solid border-grey-15 p-6 card-bp:justify-self-center card-bp:w-full">
          <div className="flex items-center">
            {starsArray}
          </div>
          <div className="my-10">
            <h3 className="font-semibold text-white-0 text-2xl laptop:text-xl tablet:text-lg">{title}</h3>
            <p className="text-lg laptop:text-base">{text}</p>
          </div>
          <div className="flex items-center">
            <img src={img} alt={name} className="w-16 h-16 mobile:w-12 mobile:h-12 rounded-full"/>
            <div className="ml-2">
              <p className="text-xl laptop:text-lg">{name}</p>
              <p className="text-lg text-grey-60">{location}</p>
            </div>
          </div>
      </motion.div>
  )
}

export default TestimonialCard