import "./index.css";
import PersonalInfo from "./components/PersonalInfo";
import FinishingUp from "./components/FinishingUp";
import Plan from "./components/Plan";
import AdsOn from "./components/AdsOn";
import Stepper from "./components/Stepper";
import Summary from "./components/Summary";
import Confirm from "./views/Confirm";
import { useState } from "react";
import { store } from './store/store'
import { Provider } from 'react-redux'


function App() {
  const steps = [
    {
      name: "YOUR INFO",
      level: "STEP 1",
    },
    {
      name: "SELECT PLAN",
      level: "STEP 2",
    },
    {
      name: "ADDS-ONS",
      level: "STEP 3",
    },
    {
      name: "SUMMARY",
      level: "STEP 4",
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <Provider store={store}>
    <div className="">
      {/*  */}
      <div className="global-cont">
        <div className="md:flex md:p-2 box-shadow-2xl bg-white rounded-lg relative">
          <div className="flex justify-center">
            <div className="sidebar">
              <>
                <div className="md:mt-6 flex md:flex-col md:gap-y-10w-full">
                  {steps?.map((step, i) => (
                    <div
                      className={`step-item ${
                        currentStep === i + 1 && "active"
                      } ${i + 1 < currentStep || (complete && "complete")} `}
                      key={i}
                    >
                      <div className="flex items-center gap-x-6 mb-4">
                        <div className="step">{i + 1} </div>
                        <div className=" hidden md:block flex flex-col"  >
                          <div className="text-sm text-gray-400">
                            {step.level}
                          </div>
                          <div className="text-white text-xs">{step.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
          <div className="main">
            {currentStep === 1 && <PersonalInfo />}
            {currentStep === 2 && <Plan />}
            {currentStep === 3 && <AdsOn />}
            {currentStep === 4 && <Summary />}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                }}
              >
                {currentStep === steps.length ? "Confirm" : "Next"}{" "}
              </button>
            </div>

            {/* <Confirm /> */}
          </div>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
