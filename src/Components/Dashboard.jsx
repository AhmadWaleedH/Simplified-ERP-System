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
      {/* <div className='pt-20 grid grid-cols-1 sm:grid-cols-12'>
    
    <div className='sm:cols-span-3 min-h-[100px] p-4'><TopDeals/></div>
     
     <div className="sm:cols-span-6 min-h-[100px]">
    <div className="p-4 gap-2 grid grid-cols-1 md:grid-cols-2 "> 
        <div className=" row-span-3 col-span-2 sm:col-span-1 h-[11rem]  border border-white rounded-lg p-3"> 
          <TotalUsers /> 
        </div> 
        <div className=" row-span-3 col-span-2 sm:col-span-1 h-[11rem]  border border-white rounded-lg p-3"> 
          <TotalUsers /> 
        </div> 
        <div className="row-span-3 col-span-2 sm:col-span-1 h-[11rem]  border border-white rounded-lg p-3"> 
          <TotalUsers /> 
        </div> 
        <div className="row-span-3 col-span-2 sm:col-span-1 h-[11rem]  border border-white rounded-lg p-3"> 
          <TotalUsers /> 
        </div> 
      </div>
      </div>
    <div className='sm:cols-span-3 min-h-[100px] p-4'><SourceLeads/></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-12">
    <div className='sm:cols-span-3 min-h-[100px] p-4'><TotalVisit/></div>

    <div className='sm-cols-span-6 min-h-[100px] p-4'><RevenueAnalytw-1/2
    <div className='sm-cols-span-3 min-h-[100px] p-4'><ProfitsEarned/></div>
    </div>
     */}
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

{/* <div class="m-4 min-h-screen grid grid-cols-12 grid-rows-10 border gap-2 border-black p-2">
  <div class="col-span-3 row-span-6 border border-black p-2 text-center"><TopDeals /></div>
  <div class="col-span-3 border row-span-2 border-black p-2 text-center"><TotalUsers /></div>
  <div class="col-span-3 border row-span-2 border-black p-2 text-center"><TotalUsers /></div>
  <div class="col-span-3 border row-span-6 border-black p-2 text-center"><SourceLeads /></div>
  <div class="col-span-3 border row-span-2 border-black p-2 text-center"><TotalUsers /></div>
  <div class="col-span-3 border row-span-2 border-black p-2 text-center"><TotalUsers /></div>
  <div class="col-span-6 border row-span-6 border-black p-2 text-center"><RevenueAnalytics /></div>
  <div class="col-span-3 border row-span-4 border-black p-2 text-center"><TotalVisit /></div>
  <div class="col-span-3 border row-span-4 border-black p-2 text-center"><ProfitsEarned /></div>
</div> */}

    </>
  )
}