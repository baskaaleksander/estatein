import Badge from "../ui/Badge";

interface TotalInitialCostProps {
    listingprice: number;
    downpayment: number;
    additionalfees: number;
    mortgagefees: number;
}
const TotalInitialCost = ({listingprice, downpayment, additionalfees, mortgagefees} : TotalInitialCostProps) => {
  return (
    <div className="border border-solid border-grey-15 rounded-xl p-10 mb-12">
        <h3>Total Initial Cost</h3>
        <div className="grid grid-cols-2">
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60">Listing Price</p>
          <p className="text-lg text-white-0">${listingprice}</p>
        </div>
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60">Additional Fees</p>
          <div className="flex items-center">
          <p className="text-lg text-white-0 mr-3">${additionalfees}</p>
          <Badge text="Property transfer tax, legal fees, inspection, insurance" />
          </div>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60">Down Payment</p>
          <div className="flex items-center">
          <p className="text-lg text-white-0 mr-3">{downpayment}</p>
          <Badge text="25%" />
          </div>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60">Mortgage Amount</p>
          <div className="flex items-center">
          <p className="text-lg text-white-0 mr-3">${mortgagefees}</p>
          <Badge text="If applicable" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalInitialCost