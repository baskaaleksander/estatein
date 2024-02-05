import Badge from "../Badge"

const MonthlyCost = ({propertytaxes, associationfee} : {propertytaxes: number, associationfee: number}) => {
  return (
    <div className="p-10 border border-solid border-grey-15 rounded-xl my-12">
        <h3 className="pb-8">Monthly Cost</h3>
        <div className="">
            <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60">Property Taxes</p>
            <div className="flex items-center">
                <p className="text-xl text-white-0 mr-3">{propertytaxes}</p>
                <Badge text="Approximate monthly property tax based on the sale price and local rates" />
            </div>
            </div>
            <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60">Association Fee</p>
            <div className="flex items-center">
                <p className="text-xl text-white-0 mr-3">{associationfee}</p>
                <Badge text="Monthly fee for common area maintenance and security" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default MonthlyCost