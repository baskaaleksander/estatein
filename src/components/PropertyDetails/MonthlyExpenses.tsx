import Badge from "../ui/Badge";

interface MonthlyExpensesProps {
    propertytax: number;
    associationfee: number;
    propertyinsurance: number;
}

const MonthlyExpenses = ({propertytax, associationfee, propertyinsurance} : MonthlyExpensesProps) => {
  return (
    <div className="p-12 border border-solid border-grey-15 rounded-xl">
      <h3 className="pb-8 text-2xl font-semibold laptop:text-xl tablet:text-lg">Monthly Expenses</h3>
      <div className="grid grid-cols-2">
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Property Taxes</p>
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">${propertytax}</p>
        </div>
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Homeowners' Association Fee</p>
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">${associationfee}</p>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Mortgage Payment</p>
          <div className="flex items-center">
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">Varies based on terms and interest rate</p>
          <Badge text="If applicable" />
          </div>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60 text-lg laptop:text-base mobile:text-sm">Property Insurance</p>
          <div className="flex items-center">
          <p className="text-xl mr-3 text-white-0 laptop:text-lg mobile:text-base">${propertyinsurance}</p>
          <Badge text="Approximate monthly cost" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyExpenses