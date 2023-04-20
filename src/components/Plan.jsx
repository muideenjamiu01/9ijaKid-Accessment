import React, { useState } from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";


function Plan() {
  const [toggle , setToggle ] = useState(true)
  const toggleClass = ' transform translate-x-6';
  return (
    <div className="main-cont">
      <div className="mb-14">
        <div className="">
          <h2 className="title">Select your plan</h2>
          <p className="sub-title">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 ">
          <div className="plan-container">
            <div className="flex justify-start md:mb-10">
              <img src={arcade} alt="" />
            </div>
            <div>
              <div className="plan-title">Arcade</div>
              <div>
                <span className="plan-title_amount">$90/yr</span>
              </div>
              <div>
                <span className="plan-title_duration">2 months free</span>
              </div>
            </div>
          </div>
          <div className="plan-container">
            <div className="flex justify-start md:mb-10">
              <img src={advanced} alt="" />
            </div>
            <div>
              <div className="plan-title">Advanced</div>
              <div>
                <span className="plan-title_amount">$90/yr</span>
              </div>
              <div>
                <span className="plan-title_duration">2 months free</span>
              </div>
            </div>
          </div>
          <div className="plan-container">
            <div className="flex justify-start md:mb-10">
              <img src={pro} alt="" />
            </div>
            <div>
              <div className="plan-title">Pro</div>
              <div>
                <span className="plan-title_amount">$90/yr</span>
              </div>
              <div>
                <span className="plan-title_duration">2 months free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fef6fe]  flex justify-center p-4 gap-x-4 rounded-md">
        <div>
          <span>Monthly</span>
        </div>
        <div onClick={() => {
        setToggle(!toggle);
      }} className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer">
          {/* Switch */}
          <div className =  {"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +  (toggle ? null : toggleClass)} ></div>
        </div>
        <div>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  );
}

export default Plan;
