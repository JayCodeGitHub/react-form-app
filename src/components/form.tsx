import React, { useState } from "react";
import Indicator from "../assets/Indicator.svg";

function Form() {
  const [rangeValue, setRangeValue] = useState(0);
  const handleRangeChange = (event: any) => {
    setRangeValue(event.target.value);
  };
  const [image, setImage] = useState<boolean | null>(false);
  const handleImageSet = (event: any) => {
    if (event.target.files[0] === undefined) {
      setImage(false);
    } else {
      setImage(event.target.files[0].name);
    }
  };

  const handleImageRemove = () => {
    setImage(false);
  };

  return (
    <form
      className="flex flex-wrap w-full justify-end gap-6 p-6 md:w-[734px] md:bg-form-background md:rounded-2xl md:shadow-form-shadow md:pt-10 md:pb-12 md:px-12"
      method="post"
      action="http://marathon.pl/submit"
    >
      {/* First Name Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-base text-dark-blue font-inter">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          required
          className="w-full h-12 pl-1 text-base transition-all bg-white rounded-lg hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple"
        />
      </div>

      {/* Last Name Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-base text-dark-blue font-inter">Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          className="w-full h-12 pl-1 text-base transition-all bg-white rounded-lg hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-base text-dark-blue font-inter">
          Email Address
        </label>
        <input
          type="email"
          name="emailAddress"
          required
          className="w-full h-12 pl-1 text-base transition-all bg-white rounded-lg hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple"
        />
      </div>

      {/* Phone Number Input */}
      <div className="flex flex-col items-start w-full gap-2 md:w-[48%]">
        <label className="text-base text-dark-blue font-inter">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          required
          pattern="\+\[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{3}"
          className="w-full h-12 pl-1 text-base transition-all bg-white rounded-lg hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple"
        />
      </div>

      {/* Photo Input */}
      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-base text-dark-blue font-inter">Photo</label>
        <label className="relative flex items-center justify-center w-full h-24 bg-white rounded-md cursor-pointer">
          {image ? (
            <>
              <p className="text-dark-blue">{image}</p>
              <a
                onClick={handleImageRemove}
                className="relative z-10 w-5 h-5 ml-4 transition-all rounded-full bg-dark-blue hover:bg-red"
              >
                <span className="w-0.5 h-3 bg-white rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                <span className="w-0.5 h-3 bg-white -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </a>
            </>
          ) : (
            <>
              <p className="text-base underline cursor-pointer text-purple">
                Upload a file
              </p>
              <p className="hidden pl-1 text-base md:block text-grey">
                or drag and drop here
              </p>
            </>
          )}
          <input
            type="file"
            name="photo"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            required
            onChange={handleImageSet}
          />
        </label>
      </div>

      {/* Age Input */}
      <div className="flex flex-col items-start w-full">
        <label className="mb-2 text-base text-dark-blue font-inter">Age</label>
        <span className="flex justify-between w-full pl-1 text-xs text-dark-blue font-inter">
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
          className="relative h-8 m-auto mb-1.5 md:h-6"
          style={{ width: `calc(100% - 15px)` }}
        >
          <span
            className="absolute top-2"
            style={{ left: `calc(${rangeValue}% - 19px)` }}
          >
            <span className="relative">
              <span className="absolute z-10 text-xs transform -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/4 text-purple">
                {rangeValue}
              </span>
              <img src={Indicator} className="max-w-none" />
            </span>
          </span>
        </span>
      </div>

      {/* Level Input */}
      <div className="w-full">
        <fieldset className="flex flex-col w-full gap-3 text-dark-blue">
          <legend className="mb-3 ">Level</legend>
          <label className="flex items-center gap-2 text-base">
            <input
              type="radio"
              name="level"
              value="Beginner"
              required
              className="w-5 h-5 bg-white hover:bg-white-hover hover:border-purple accent-purple"
            />
            Beginner
          </label>
          <label className="flex items-center gap-2 text-base">
            <input
              type="radio"
              name="level"
              value="Intermediate"
              required
              className="w-5 h-5 bg-white hover:bg-white-hover hover:border-purple accent-purple"
            />
            Intermediate
          </label>
          <label className="flex items-center gap-2 text-base ">
            <input
              type="radio"
              name="level"
              value="Advanced"
              required
              className="w-5 h-5 bg-white hover:bg-white-hover hover:border-purple accent-purple"
            />
            Advanced
          </label>
        </fieldset>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full px-8 py-4 mt-6 text-lg text-white transition-all rounded bg-purple md:w-auto hover:bg-purple-hover"
      >
        Send Application
      </button>
    </form>
  );
}

export default Form;
