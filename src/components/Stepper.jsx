import React, { useState } from 'react'

function Stepper() {
    const steps = ['YOUR INFO','SELECT PLAN', 'ADDS-ONS', 'SUMMARY']
    const [currentStep, setCurrentStep] = useState(1)
    const [complete, setComplete] = useState(false)
  return (
    <>
    <div className='flex md:flex-none md:gap-y-10 '>
      {
        steps?.map((step, i) => (
            <div className={`step-item ${currentStep === i + 1 && "active"} ${i + 1 < currentStep || complete && "complete"} `} key={i}>
                <div className='step'>{i + 1} </div>
                <p className='bg-red-500'>{step}</p>
            </div>
        ))
      }
      
    </div>
    <button onClick={() => {
        currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1)
    }}>{currentStep === steps.length ? "Confirm": "Next"} </button>
    </>
  )
}

export default Stepper
