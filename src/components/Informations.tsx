import InformationsCard from "./InformationsCard"

interface InformationsInterface {
    title: string
    text: string
}

const InformationsCardData : InformationsInterface[] = [
    {
        title: "200+",
        text: "Happy Customers"
    },
    {
        title: "10k+",
        text: "Properties For Clients"
    },
    {
        title: "16+",
        text: "Years of Experience"
    }
]

const informationsCard = InformationsCardData.map((card, index) => {
        return (
        <InformationsCard key={index} title={card.title} text={card.text} />
        )
})

const Informations = () => {
    return (
        <>
        {informationsCard}
        </>
    )
}

export default Informations