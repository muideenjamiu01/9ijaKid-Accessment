import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { personalInfo } from "../store/formSlice";

function PersonalInfo() {
  // redux
  const dispatch = useDispatch();
  const getFormName = useSelector((state) => state.personalInfo.name);
  const getFormEmail = useSelector((state) => state.personalInfo.email);
  const getFormPhone = useSelector((state) => state.personalInfo.phone);

  // state for sent status
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({}) 
  const [values, setValues] = useState({
    name: getFormName || "",
    email: getFormEmail || "",
    phone: getFormPhone || "",
  });

  // for form Validation
  const validate = (values) => {
    // name
    if (!values.name) {
      return toast.warning("Name required");
    }
    // email
    const emailRegex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!values.email || !emailRegex.test(values.email)) {
      return toast.warning("Valid Email required");
    }

    // phone number
    if (values.phone.length !== 11) {
      return toast.warning("Phone Number Must Be 11 digits");    
  };
}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //
    setErrors(validate(values));
    setIsSubmitted(true) // update submit status
  };

  useEffect(() => {
    if ( isSubmitted) { // check if any form errors

        // update Redux Slice
        // dispatch(
        //   formStage(2) // update formStage
        // )
        dispatch(
          personalInfo({ // update formSignup
            name: values.name,            
            email: values.email,
            phone: values.phone
          })
        );
    }

  }, [values, isSubmitted, dispatch])
  console.log(values)

  return (
    <div className="">
      <ToastContainer />
      <div className="main-cont">
        <div className="">
          <h2 className="title">Personal Info </h2>
          <p className="sub-title">
            Please provide your name, email address, and phone number.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="relative">
              <div className="label">
                <label htmlFor="name">Name</label>
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleInputChange}
                autoFocus
                autoComplete="name"
                placeholder="e.g. Stephen King"
                className="input"
              />
            </div>

            <div className="relative">
              <div className="label">
                <label htmlFor="email">Email Address</label>
              </div>
              <input
                type="email"
                id="email"
                autoComplete="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="  e.g. stephenking@lorem.com"
                className="input"
              />
            </div>

            <div className="relative">
              <div className="label">
                <label htmlFor="phone">Phone Number</label>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="e.g. +1 234 567 890"
                value={values.phone}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            <div className="flex justify-end">
              <Button type="button" text="Testing submit" className="next-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo
