interface ServiceCardsInner {
    title: string;
    description: string;
    icon?: string;
}

interface ServiceCardsProps {
    title: string;
    description: string;
    cards: ServiceCardsInner[];
}

const ServiceCard = ({title, description, icon} : ServiceCardsInner) => {
    return (
        <div className="border border-solid border-grey-15 rounded-xl p-12">
            <div className="flex items-center pb-8">
                <img src={icon} alt={title} className="w-12 h-12"/>
                <h3 className="ml-3 text-2xl text-white-0 font-semibold">{title}</h3>
            </div>
            <p className="text-lg text-grey-60">{description}</p>
        </div>
    )
}

const ServiceCards = ({title, description, cards} : ServiceCardsProps) => {

    const everySmallCard = cards.map((card, index) => {
        return <ServiceCard title={card.title} description={card.description} icon={card.icon} key={index} />;
    })
    everySmallCard.pop();
  return (
    <div className="py-20">
        <div className="pb-20">
            <h2 className="text-white-0 text-5xl font-semibold pb-3">{title}</h2>
            <p className="text-lg text-grey-60">{description}</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
            {everySmallCard}
            <div className="bg-grey-10 border border-solid border-grey-15 col-span-2 rounded-xl p-12">
                <h3 className="text-white-0 font-bold text-3xl pb-8">{cards[cards.length - 1].title}</h3>
                <p className="text-grey-60 text-lg">{cards[cards.length - 1].description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCards