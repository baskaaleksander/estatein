import Badge from "../Badge";

interface MonthlyExpensesProps {
    propertytax: number;
    associationfee: number;
    propertyinsurance: number;
}

const MonthlyExpenses = ({propertytax, associationfee, propertyinsurance} : MonthlyExpensesProps) => {
  return (
    <div className="p-10 border border-solid border-grey-15 rounded-xl">
      <h3 className="text-white-0 pb-8">Monthly Expenses</h3>
      <div className="grid grid-cols-2">
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60">Property Taxes</p>
          <p className="text-lg text-white-0">${propertytax}</p>
        </div>
        <div className="border-t border-solid border-grey-15 py-8">
          <p className="mb-3 text-grey-60">Homeowners' Association Fee</p>
          <p className="text-lg text-white-0">${associationfee}</p>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60">Mortgage Payment</p>
          <div className="flex items-center">
          <p className="text-lg text-white-0 mr-3">Varies based on terms and interest rate</p>
          <Badge text="If applicable" />
          </div>
        </div>
        <div className="border-t border-solid border-grey-15 pt-8">
          <p className="mb-3 text-grey-60">Property Insurance</p>
          <div className="flex items-center">
          <p className="text-lg text-white-0 mr-3">${propertyinsurance}</p>
          <Badge text="Approximate monthly cost" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyExpenses