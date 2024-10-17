import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FormDetails = () => {
  const [verified, setVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [errors, setErrors] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectName: "",
    projectType: "",
    street: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const requiredFields = () => {
    const newErrors = {};

    if (formData.fullName === "") newErrors.fullName = "full name is Required";
    if (formData.phoneNumber === "")
      newErrors.phoneNumber = "Phone Number is Required";
    if (formData.email === "") newErrors.email = "Email is Required";
    if (formData.projectName === "")
      newErrors.projectName = "Project Name is Required";
    if (formData.projectType === "")
      newErrors.projectType = "Project Type is Required";
    if (formData.street === "") newErrors.street = "Street is Required";
    if (formData.city === "") newErrors.city = "City is Required";
    if (formData.state === "") newErrors.state = "State is Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredError = requiredFields();
    if (Object.keys(requiredError).length > 0) {
      setErrors(requiredError);
      setShowCaptcha(false);
      return;
    }
    setShowCaptcha(true);
    setErrors(null);
  };

  const onChange = (value) => {
    // console.log("Captcha value:", value);
    if (value) {
      setVerified(true);
      console.log("Submitted");
    }
    setShowCaptcha(false);

    toast("Form Submitted", { theme: "dark" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative mt-10">
      <div className="clipPath flex bg-gradient-to-t from-primary_100 -z-10 via-primary_50 to-white absolute h-full w-full"></div>

      <div className="text-center px-8">
        <h1 className="lg:text-[40px] md:text-[32px] text-[24px] font-semibold">
          Let Us Bring Your Vision to Life
        </h1>
        <p className="lg:text-2xl md:text-xl text-sm">
          Simply fill out the form to get AR App for your project
        </p>
      </div>
      <div className="w-full flex justify-center my-5 px-8">
        <form
          className="bg-white lg:w-2/3 w-full rounded-lg shadow-xl p-8"
          onSubmit={handleSubmit}
        >
          <p className="lg:text-lg text-sm font-semibold">Your Details</p>
          <div className="flex md:flex-row flex-col gap-5 my-5">
            <label
              htmlFor="fullName"
              className="flex flex-col gap-2 lg:text-sm text-[12px] md:w-1/3 w-full"
            >
              Full Name
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                id="fullName"
                className="outline-none border-b border-b-2 border-neutral_400 lg:text-lg text-sm"
                onChange={handleChange}
              />
              {errors && (
                <p className="text-xs text-red-500">{errors?.fullName}</p>
              )}
            </label>
            <label
              htmlFor="phoneNumber"
              className="flex flex-col gap-2 lg:text-sm text-[12px] md:w-1/3 w-full"
            >
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your number"
                id="phoneNumber"
                className="outline-none border-b border-b-2 border-neutral_400 lg:text-lg text-sm"
                onChange={handleChange}
              />
              {errors && (
                <p className=" text-xs text-red-500">{errors?.phoneNumber}</p>
              )}
            </label>
            <label
              htmlFor="email"
              className="flex flex-col gap-2 lg:text-sm text-[12px] md:w-1/3 w-full"
            >
              Email Address
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                id="email"
                className="outline-none border-b border-b-2 border-neutral_400 lg:text-lg text-sm"
                onChange={handleChange}
              />
              {errors && (
                <p className=" text-xs text-red-500">{errors?.email}</p>
              )}
            </label>
          </div>
          <p className="lg:text-lg text-sm font-semibold">Project Details</p>
          <div className="flex md:flex-row flex-col gap-5 my-5">
            <label
              htmlFor="projectName"
              className="flex flex-col gap-2 lg:text-sm text-[12px] md:w-1/2 w-full"
            >
              Project Name
              <input
                type="text"
                name="projectName"
                placeholder="Enter Project name"
                id="projectName"
                className="outline-none border-b border-b-2 border-neutral_400 lg:text-lg text-sm"
                onChange={handleChange}
              />
              {errors && (
                <p className="w-1/2 text-xs text-red-500">
                  {errors?.projectName}
                </p>
              )}
            </label>
            <label
              htmlFor="projectType"
              className="flex flex-col gap-2 lg:text-sm text-[12px] md:w-1/2 w-full"
            >
              Project Type
              <input
                type="text"
                name="projectType"
                placeholder="Select Project Type"
                id="projectType"
                className="outline-none border-b border-b-2 border-neutral_400 lg:text-lg text-sm"
                onChange={handleChange}
              />
              {errors && (
                <p className="w-1/2 text-xs text-red-500">
                  {errors?.projectType}
                </p>
              )}
            </label>
          </div>
          <div className="flex flex-col gap-2 my-5">
            <p className="lg:text-sm text-[12px] w-full">Project Address</p>
            <div className="flex md:flex-row flex-col gap-5">
              <div className="md:w-1/3 w-full">
                <input
                  type="text"
                  name="street"
                  placeholder="Enter Street"
                  id="street"
                  className="outline-none border-b border-b-2  w-full border-neutral_400 lg:text-lg text-sm"
                  onChange={handleChange}
                />
                {errors && (
                  <p className="text-xs text-red-500 mt-2">{errors?.street}</p>
                )}
              </div>
              <div className="md:w-2/3 w-full flex gap-5">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    id="city"
                    className="outline-none border-b border-b-2 border-neutral_400 w-full lg:text-lg text-sm"
                    onChange={handleChange}
                  />
                  {errors && (
                    <p className=" text-xs text-red-500 mt-2">{errors?.city}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    id="state"
                    className="outline-none border-b border-b-2 border-neutral_400  lg:text-lg text-sm"
                    onChange={handleChange}
                  />
                  {errors && (
                    <p className=" text-xs mt-2 text-red-500">
                      {errors?.state}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="lg:text-lg text-sm font-semibold mt-10">Payment</p>
          <div className="bg-neutral_100 h-56 mt-4 rounded"></div>
          {showCaptcha && (
            <div className="mt-5">
              <ReCAPTCHA
                sitekey="6LcWGmIqAAAAAAlypp4Qzszma3Vctbw2pBfVHL2b" // Replace with your site key
                onChange={onChange}
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-primary_500 text-neutral_0 rounded-lg px-4 py-2 mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormDetails;
