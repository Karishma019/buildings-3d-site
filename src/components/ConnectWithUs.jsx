import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import Footer from "./Footer";
import img from "../img/image.png";
import { BACKENDURL } from "../utils/utils";
import axios from "axios";
import Loader from "./Loader";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { toast } from "react-toastify";

const ConnectWithUs = (props) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); 


  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    id: id
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
    setErrors(null);

    // setLoading(true);
    try {
      const res = await axios.post(`${BACKENDURL}/public/contact`, formData);
      toast("Form Submitted Successfully", { type: "success" });
    } catch (err) {
      toast("Error while submitting from", { type: "error" });
    } finally {
      setFormData({ name: "", contact: "", email: "", id: id });
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section
      className="relative lg:h-auto md:h-[690px] h-[570px]"
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
      <div
        className="flex absolute  -bottom-10 pt-5 left-1/2 -translate-x-1/2 flex-col items-center cursor-pointer "
        onClick={() => scrollToBottom()}
      >
        <div className="rounded text-white bg-black bg-opacity-35 px-1 rounded overflow-hidden">
          <MdKeyboardDoubleArrowDown className="text-2xl rounded  cursor-pointer animate-bounce" />
        </div>
        <p className="text-gray-400 text-sm font-semibold">Scroll Down</p>
      </div>
    </section>
  );
};

export default ConnectWithUs;
