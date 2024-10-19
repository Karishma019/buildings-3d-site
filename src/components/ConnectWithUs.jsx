import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import Footer from "./Footer";
import img from "../img/image.png";
import { BACKENDURL } from "../utils/utils";
import axios from "axios";
import Loader from "./Loader";

const ConnectWithUs = (props) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("API URL:", BACKENDURL);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
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
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredError = requiredFields();
    if (Object.keys(requiredError).length > 0) {
      setErrors(requiredError);
      return;
    }
    console.log(formData);
    setErrors(null);

    setLoading(true);
    try {
      const res = await axios.post(`${BACKENDURL}/prod/v1/public/contact`, {
        formData,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setFormData({ name: "", contact: "", email: "" });
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section
      className="relative lg:h-auto md:h-[690px] h-1/2"
      id="ConnectWithUs"
      ref={(el) => props.storeInputRef(el, 6)}
    >
      <h2 className="flex items-center gap-4  pt-32 text-2xl px-8">
        <IoCallOutline className="text-primary_500" />
        Connect With Us
      </h2>

      <div className="clipPath flex bg-gradient-to-t from-primary_100 -z-10 via-primary_50 to-white absolute h-full w-full lg:hidden"></div>
      <div className=" flex items-center px-8 lg:justify-between justify-center h-[80%]">
        <form
          className="bg-white flex rounded-xl flex-col items-center p-8 md:w-2/3 w-[90%] lg:w-1/4  gap-4 shadow-2xl lg:mt-0 mt-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="bg-[#D4D4D433] outline-none sm:text-lg text-sm w-full rounded-lg py-2 px-4"
            />
            {errors && (
              <p className=" text-xs text-red-500">{errors?.fullName}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              name="contact"
              value={formData.contact}
              placeholder="Enter your number"
              className="bg-[#D4D4D433] outline-none sm:text-lg text-sm w-full rounded-lg py-2 px-4"
              onChange={handleChange}
            />
            {errors && (
              <p className=" text-xs text-red-500">{errors?.phoneNumber}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email address"
              className="bg-[#D4D4D433] outline-none sm:text-lg text-sm  w-full rounded-lg py-2 px-4"
              onChange={handleChange}
            />
            {errors && <p className=" text-xs text-red-500">{errors?.email}</p>}
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-32 py-1 rounded-lg"
          >
            Submit
          </button>
        </form>
        <div className="lg:w-1/2 hidden lg:block pl-32">
          <img
            src={img}
            alt="building"
            className="w-[490px] h-[331px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
