import icon1 from "../assets/serviceicons/value1.svg"
import icon2 from "../assets/serviceicons/management4.svg"
import icon3 from "../assets/serviceicons/management3.svg"
import icon4 from "../assets/serviceicons/value3.svg"

const ServiceDecisions = () => {
  return (
    <div className="px-[10%] py-20 text-white-0 flex navbar:flex-col">
        <div>
            <h2 className="font-semibold text-5xl laptop:text-4xl tablet:text-3xl mobile:text-2xl">Smart Investments, Informed Decisions</h2>
            <p className="text-lg text-grey-60 laptop:text-base">Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
        </div>
        <div className="grid grid-cols-2 mobile:grid-cols-1 navbar:mt-20 p-3 gap-3 bg-grey-10 rounded-xl">
            <div className="border border-solid border-grey-15 bg-grey-08 rounded-xl p-12">
                <div className="mb-8 flex items-center">
                    <img src={icon1} alt="icon" className="w-12 h-12" />
                    <h3 className="font-semibold text-2xl ml-5 laptop:text-xl tablet:text-lg">Market Insight</h3>
                </div>
                <p className="text-lg text-grey-60 laptop:text-base tablet:text-sm">Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions</p>
            </div>
            <div className="border border-solid border-grey-15 bg-grey-08 rounded-xl p-12">
                <div className="mb-8 flex items-center">
                    <img src={icon4} alt="icon" className="w-12 h-12" />
                    <h3 className="font-semibold text-2xl ml-5 laptop:text-xl tablet:text-lg">ROI Assessment</h3>
                </div>
                <p className="text-lg text-grey-60 laptop:text-base tablet:text-sm">Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments</p>
            </div>
            <div className="border border-solid border-grey-15 bg-grey-08 rounded-xl p-12">
                <div className="mb-8 flex items-center">
                    <img src={icon3} alt="icon" className="w-12 h-12" />
                    <h3 className="font-semibold text-2xl ml-5 laptop:text-xl tablet:text-lg">Customized Strategies</h3>
                </div>
                <p className="text-lg text-grey-60 laptop:text-base tablet:text-sm">Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs</p>
            </div>
            <div className="border border-solid border-grey-15 bg-grey-08 rounded-xl p-12">
                <div className="mb-8 flex items-center">
                    <img src={icon2} alt="icon" className="w-12 h-12" />
                    <h3 className="font-semibold text-2xl ml-5 laptop:text-xl tablet:text-lg">Diversification Mastery</h3>
                </div>
                <p className="text-lg text-grey-60 laptop:text-base tablet:text-sm">Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceDecisions