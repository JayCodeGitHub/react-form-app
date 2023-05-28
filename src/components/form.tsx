import React, { useState } from "react";
import Indicator from "../assets/Indicator.svg";

function Form() {
  const [rangeValue, setRangeValue] = useState(0);
  const handleRangeChange = (event: any) => {
    setRangeValue(event.target.value);
  };
  return (
    <form className="flex flex-wrap w-full justify-end gap-6 p-6 md:w-[734px] md:bg-form-background md:rounded-2xl md:shadow-form-shadow md:pt-10 md:pb-12 md:px-12">
      {/* First Name Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-dark-blue text-base font-inter">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          required
          className="h-12 rounded-lg w-full bg-white hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple text-base pl-1"
        />
      </div>

      {/* Last Name Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-dark-blue text-base font-inter">Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          className="h-12 rounded-lg w-full bg-white hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple text-base pl-1"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-dark-blue text-base font-inter">
          Email Address
        </label>
        <input
          type="email"
          name="emailAddress"
          required
          className="h-12 rounded-lg w-full bg-white hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple text-base pl-1"
        />
      </div>

      {/* Phone Number Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-dark-blue text-base font-inter">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          required
          pattern="\+\[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{3}"
          className="h-12 rounded-lg w-full bg-white hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple text-base pl-1"
        />
      </div>

      {/* Photo Input */}
      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-dark-blue text-base font-inter">Photo</label>
        <label className="flex w-full cursor-pointer items-center justify-center rounded-md p-10 bg-white">
          <p className="text-purple underline text-base">Upload a file</p>
          <p className="hidden text-base md:block text-grey pl-1">
            or drag and drop here
          </p>
          <input type="file" name="photo" className="sr-only " />
        </label>
      </div>

      {/* Age Input */}
      <div className="flex flex-col items-start w-full">
        <label className="text-dark-blue text-base font-inter mb-2">Age</label>
        <span className="w-full flex justify-between text-dark-blue text-xs font-inter pl-1">
          <p>0</p>
          <p>100</p>
        </span>
        <input
          className="w-full accent-purple appearance-none h-1.5 mt-1.5 rounded-lg"
          type="range"
          name="age"
          min="0"
          max="100"
          defaultValue="0"
          step="1"
          required
          onChange={handleRangeChange}
        />
        <span
          className="relative h-8 m-auto md:h-6 "
          style={{ width: `calc(100% - 15px)` }}
        >
          <span
            className="absolute top-2"
            style={{ left: `calc(${rangeValue}% - 19px)` }}
          >
            <span className="relative">
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 text-purple text-xs">
                {rangeValue}
              </span>
              <img src={Indicator} className="max-w-none" />
            </span>
          </span>
        </span>
      </div>

      {/* Level Input */}
      <div className="w-full">
        <fieldset className="w-full flex flex-col gap-3 text-dark-blue">
          <legend className="mb-3 ">Level</legend>
          <label className="flex items-center gap-2 text-base">
            <input
              type="radio"
              name="level"
              value="Beginner"
              className=" w-5 h-5 bg-white hover:bg-white-hover hover:border-purple accent-purple"
            />
            Beginner
          </label>
          <label className="flex items-center gap-2 text-base">
            <input
              type="radio"
              name="level"
              value="Intermediate"
              className=" w-5 h-5 bg-white hover:bg-white-hover hover:border-purple accent-purple"
            />
            Intermediate
          </label>
          <label className="flex items-center gap-2 text-base ">
            <input
              type="radio"
              name="level"
              value="Advanced"
              className=" w-5 h-5 bg-white hover:bg-white-hover hover:border-purple accent-purple"
            />
            Advanced
          </label>
        </fieldset>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-purple py-4 w-full md:w-auto mt-6 px-8 text-white text-lg rounded hover:bg-purple-hover transition-all"
      >
        Send Application
      </button>
    </form>
  );
}

export default Form;
