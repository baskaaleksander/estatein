import Badge from "../ui/Badge";

interface AdditionalFeesProps {
    transfertax: number;
    legalfees: number;
    homeinspection: number;
    insurance: number;
}
const AdditionalFees = ({transfertax, legalfees, homeinspection, insurance} : AdditionalFeesProps) => {
  return (
    <div className="p-12 border border-solid border-grey-15 rounded-xl">
        <h3 className="pb-8 text-2xl font-semibold laptop:text-xl tablet:text-lg">Additional Fees</h3>
        <div className="grid grid-cols-2">
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Property Transfer Tax</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">${transfertax}</p>
              <Badge text="Based on the sale price and local regulations" />
            </div>
          </div>
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Legal Fees</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">{legalfees}</p>
              <Badge text="Approximate cost for legal services, including title transfer" />
            </div>
          </div>
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Home Inspection</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">{homeinspection}</p>
              <Badge text="Recommended for due diligence" />
            </div>
          </div>
          <div className="py-8 border-t border-b border-solid border-grey-15">
            <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Property Insurance</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">{insurance}</p>
              <Badge text="Based on the sale price and local regulations" />
            </div>
          </div>
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Mortgage Fees</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">Varies</p>
              <Badge text="If applicable, consult with your lender for specific details" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdditionalFees