import AdditionalFees from "./PropertyDetails/AdditionalFees";
import MonthlyCost from "./PropertyDetails/MonthlyCost";
import MonthlyExpenses from "./PropertyDetails/MonthlyExpenses";
import TotalInitialCost from "./PropertyDetails/TotalInitialCost";

interface PricingDetailsProps {
    transfertax: number;
    legalfees: number;
    homeinspection: number;
    insurance: number;
    propertytax: number;
    associationfee: number;
    propertyinsurance: number;
    listingprice: number;
    downpayment: number;
    additionalfees: number;
    mortgagefees: number;
}

const PricingDetails = ({transfertax, legalfees, homeinspection, insurance, propertytax, associationfee, propertyinsurance, listingprice, downpayment, additionalfees, mortgagefees} : PricingDetailsProps) => {
  return (
    <div className="pt-20">
        <AdditionalFees transfertax={transfertax} legalfees={legalfees} homeinspection={homeinspection} insurance={insurance} />
        <MonthlyCost propertytaxes={propertytax} associationfee={associationfee} />
        <TotalInitialCost listingprice={listingprice} downpayment={downpayment} additionalfees={additionalfees} mortgagefees={mortgagefees} />
        <MonthlyExpenses propertytax={propertytax} associationfee={associationfee} propertyinsurance={propertyinsurance} />
    </div>
  )
}

export default PricingDetails