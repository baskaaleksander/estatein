import Badge from "../ui/Badge";

interface TotalInitialCostProps {
    listingprice: number;
    downpayment: number;
    additionalfees: number;
    mortgagefees: number;
}
const TotalInitialCost = ({listingprice, downpayment, additionalfees, mortgagefees} : TotalInitialCostProps) => {
  return (
    <div className="border border-solid border-grey-15 rounded-xl p-12 mb-12">
        <h3 className="pb-8 text-2xl font-semibold laptop:text-xl tablet:text-lg">Total Initial Cost</h3>
        <div className="grid grid-cols-2">
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Listing Price</p>
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">${listingprice}</p>
        </div>
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Additional Fees</p>
          <div className="flex items-center">
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">${additionalfees}</p>
          <Badge text="Property transfer tax, legal fees, inspection, insurance" />
          </div>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Down Payment</p>
          <div className="flex items-center">
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">{downpayment}</p>
          <Badge text="25%" />
          </div>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Mortgage Amount</p>
          <div className="flex items-center">
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">${mortgagefees}</p>
          <Badge text="If applicable" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalInitialCost