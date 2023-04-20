import React from "react";

function AdsOn() {
  return (
    <div>
      <div className="main-cont">
        <div className="">
          <div className="">
            <div className="">
              <h2 className="title">Pick add-ons</h2>
              <p className="sub-title">
                Add-ons help enhance your gaming experience.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#fef6fe] p-4 rounded-lg border mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-6">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="flex flex-col">
                    <div className="ads-on-header">Online Service</div>
                    <div className="ads-on-header_subheader">
                      Access to Multiple games
                    </div>
                  </div>
                </div>
                <div>
                  <span className="ads-on-plan">+$1/mo</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fef6fe] p-4 rounded-lg border mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-6">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="flex flex-col">
                    <div className="ads-on-header">Larger Storage</div>
                    <div className="ads-on-header_subheader">
                      Extra 1TB of cloud save
                    </div>
                  </div>
                </div>
                <div>
                  <span className="ads-on-plan">+$2/mo</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fef6fe] p-4 rounded-lg border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-6">
                  {" "}
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="flex flex-col">
                    <div className="ads-on-header">Customizable Profile</div>
                    <div className="ads-on-header_subheader">
                      Custom theme on your profile
                    </div>
                  </div>
                </div>
                <div>
                  <span className="ads-on-plan">+$2/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdsOn;
