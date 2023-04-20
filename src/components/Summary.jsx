import React from 'react'
import circleCheck from "../assets/images/icon-thank-you.svg";

function Summary() {
  return (
    <div>
    <div className="main-cont">
        <div className="">
          <h2 className="title">Finishing up</h2>
          <p className="sub-title">
          Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="bg-[#f8f9fe] rounded-md p-4">
              <div className="flex justify-between mb-4">
                <div className="flex-col">
                    <div className="text-base font-bold text-[#001a4d]">Arcade Monthly </div>
                    <div className="cursor-pointer">Change</div>
                </div>
                <div className="text-base font-bold text-[#001a4d]">$9/mo</div>
              </div>
              <hr />
              <div className='flex justify-between items-center mb-3'>
                <div>Online service</div>
                <div>+$1/mo</div>
              </div>
              <div className='flex justify-between items-center mb-2'>
              <div>Larger Storage</div>
              <div>+$1/mo</div>
              </div>              
            </div>
            <div className='flex justify-between items-center mt-6'>
                <div>Total (per month)</div>
                <div className="text-base font-bold text-[#443cfc]">+$1/mo</div>
              </div>
      </div>
  </div>
  )
}

export default Summary
