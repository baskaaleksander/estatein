import KeyFeaturesCard from "./KeyFeaturesCard"

const KeyFeatures = ({features} : {features: string[]}) => {

    const keyFeatures = features.map((feature, index) => {
        return <KeyFeaturesCard key={index} feature={feature} />
    })

  return (
    <div className="bg-grey-08 border border-solid border-grey-15 p-10 rounded-xl mt-8">
        <h3 className="text-xl text-white-0 font-semibold mb-10 laptop:text-lg tablet:text-base">Key Features</h3>
        {keyFeatures}
    </div>
  )
}

export default KeyFeatures