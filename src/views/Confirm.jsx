import React from "react";
import circleCheck from "../assets/images/icon-thank-you.svg";

function Confirm() {
  return (
    <div>
      <div className="main-cont">
        <div className="">
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mb-6">
                <img src={circleCheck} alt="" />
              </div>
              <h1 className="title">Thank you!</h1>
              <div className="w-full text-base ">
                Thanks for confirming your subscription!
                 We hope you have fun using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
