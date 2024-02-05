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
        <h3 className="pb-8">Additional Fees</h3>
        <div className="grid grid-cols-2">
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60">Property Transfer Tax</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0">{transfertax}</p>
              <Badge text="Based on the sale price and local regulations" />
            </div>
          </div>
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60">Legal Fees</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0">{legalfees}</p>
              <Badge text="Approximate cost for legal services, including title transfer" />
            </div>
          </div>
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60">Home Inspection</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0">{homeinspection}</p>
              <Badge text="Recommended for due diligence" />
            </div>
          </div>
          <div className="py-8 border-t border-b border-solid border-grey-15">
            <p className="mb-3 text-grey-60">Property Insurance</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0">{insurance}</p>
              <Badge text="Based on the sale price and local regulations" />
            </div>
          </div>
          <div className="py-8 border-t border-solid border-grey-15">
            <p className="mb-3 text-grey-60">Mortgage Fees</p>
            <div className="flex items-center">
              <p className="text-xl mr-3 text-white-0">Varies</p>
              <Badge text="If applicable, consult with your lender for specific details" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdditionalFees