import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { APIKEY, BACKENDURL } from "../utils/utils";
import axios from "axios";
import Loader from "../components/Loader";

const FormDetails = () => {
  const [verified, setVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    projectName: "",
    projectType: "",
    projectAddress: "",
    projectCity: "",
    projectState: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const requiredFields = () => {
    const newErrors = {};

    if (formData.name === "") newErrors.fullName = "full name is Required";
    const phoneNumberPattern = /^[0-9]{10}$/;
    if (formData.contact === "") {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!phoneNumberPattern.test(formData.contact)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    if (formData.email === "") newErrors.email = "Email is Required";
    if (formData.projectName === "")
      newErrors.projectName = "Project Name is Required";
    if (formData.projectType === "")
      newErrors.projectType = "Project Type is Required";
    if (formData.projectAddress === "") newErrors.street = "Street is Required";
    if (formData.projectCity === "") newErrors.city = "City is Required";
    if (formData.projectState === "") newErrors.state = "State is Required";
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

  const onChange = async (value) => {
    // console.log("Captcha value:", value);
    if (value) {
      setVerified(true);
      console.log("Submitted");
    }
    setShowCaptcha(false);
    console.log(formData);
    setLoading(true);
    try {
      const res = await axios.post(`${BACKENDURL}/prod/v1/public/request-app`, {
        formData,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setFormData({
        name: "",
        contact: "",
        email: "",
        projectName: "",
        projectType: "",
        projectAddress: "",
        projectCity: "",
        projectState: "",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header formPage={true} />
      <section className="relative mt-20">
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
                htmlFor="name"
                className="flex flex-col gap-2 lg:text-sm text-[12px] md:w-1/3 w-full"
              >
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  id="name"
                  className="outline-none border-b border-b-2 border-neutral_400 lg:text-lg text-sm"
                  onChange={handleChange}
                />
                {errors && (
                  <p className="text-xs text-red-500">{errors?.fullName}</p>
                )}
              </label>
              <label
                htmlFor="contact"
                className="flex flex-col gap-2 lg:text-sm text-[12px] md:w-1/3 w-full"
              >
                Phone Number
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  placeholder="Enter your number"
                  id="contact"
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
                  value={formData.email}
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
                  value={formData.projectName}
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
                <select
                  name="projectType"
                  value={formData.projectType}
                  id="projectType"
                  className={`outline-none border-b border-b-2 border-neutral_400 lg:text-lg text-sm ${
                    formData.projectType ? "text-black" : "text-gray-400"
                  }`}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>
                  <option value="Residential">Residential</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Other">Other</option>
                </select>
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
                    name="projectAddress"
                    value={formData.projectAddress}
                    placeholder="Enter Street"
                    id="projectAddress"
                    className="outline-none border-b border-b-2  w-full border-neutral_400 lg:text-lg text-sm"
                    onChange={handleChange}
                  />
                  {errors && (
                    <p className="text-xs text-red-500 mt-2">
                      {errors?.street}
                    </p>
                  )}
                </div>
                <div className="md:w-2/3 w-full flex gap-5">
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="projectCity"
                      value={formData.projectCity}
                      placeholder="Enter City"
                      id="projectCity"
                      className="outline-none border-b border-b-2 border-neutral_400 w-full lg:text-lg text-sm"
                      onChange={handleChange}
                    />
                    {errors && (
                      <p className=" text-xs text-red-500 mt-2">
                        {errors?.city}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="projectState"
                      value={formData.projectState}
                      placeholder="Enter State"
                      id="projectState"
                      className="outline-none border-b border-b-2 border-neutral_400 w-full lg:text-lg text-sm"
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
                <ReCAPTCHA sitekey={`${APIKEY}`} onChange={onChange} />
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
    </>
  );
};

export default FormDetails;
