import { TopDeals } from "./TopDeals"
import { SourceLeads } from "./SourceLeads"
import { RevenueAnalytics } from "./RevenueAnalytics"
import TotalVisit from "./TotalVisit"
import ProfitsEarned from "./ProfitsEarned"
import TotalUsers from "./TotalUsers"
import TotalProducts from "./TotalProducts"
import TotalRatio from "./TotalRatio"
import TotalRevenue from "./TotalRevenue"
export default function Products() {
  return (
    <>
      <div className="sm:ml-20 w-[90%]">
      <div className="sm:flex pt-20">
        <div className='sm:w-1/4 p-4'><TopDeals /></div>

        <div className='sm:w-1/2 p-4 '>
          <div className=" sm:cols-span-6 min-h-[500px] ">
            <div className=" pr-4 pl-4 pb-4 gap-5 grid grid-cols-1 md:grid-cols-2 ">
              <div className=" row-span-3 col-span-2 sm:col-span-1 h-[15.5rem]  border border-gray-600  rounded-lg p-3 gap-6">
                <TotalUsers />
              </div>
              <div className=" row-span-3 col-span-2 sm:col-span-1 h-[15.5rem]  border border-gray-600  rounded-lg p-3 gap-6">
                <TotalProducts />
              </div>
              <div className="row-span-3 col-span-2 sm:col-span-1 h-[15.5rem]  border border-gray-600  rounded-lg p-3 gap-6">
                <TotalRatio />
              </div>
              <div className="row-span-3 col-span-2 sm:col-span-1 h-[15.5rem]  border border-gray-600  rounded-lg p-3 gap-6">
                <TotalRevenue />
              </div>
            </div>
          </div>
        </div>

        <div className='sm:w-1/4 p-4 border border-gray-600 rounded-lg '><SourceLeads /></div>
      </div>
      <div className="sm:flex gap-4 p-4">
        <div className='sm:w-1/4 p-4 border border-gray-600 rounded-lg'><TotalVisit /></div>

        <div className='sm:w-1/2 p-4 border border-gray-600 rounded-lg '><RevenueAnalytics /></div>

        <div className='sm:w-1/4 p-4 border border-gray-600 rounded-lg'><ProfitsEarned /></div>
      </div>
      </div>

    </>
  )
}