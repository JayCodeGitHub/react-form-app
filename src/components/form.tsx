import React from "react";

function Form() {
  return (
    <form>
      {/* First Name Input */}
      <div className="flex flex-col items-start w-full gap-2">
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
      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-dark-blue text-base font-inter">Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          className="h-12 rounded-lg w-full bg-white hover:bg-hover-white focus:bg-white focus:outline-none focus:border-2 focus:border-purple text-base pl-1"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col items-start w-full gap-2">
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
      <div className="flex flex-col items-start w-full gap-2">
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
      <div>
        <label>Age</label>
        <input
          type="range"
          name="age"
          min="0"
          max="100"
          defaultValue="0"
          step="1"
          required
        />
      </div>

      {/* Level Input */}
      <div>
        <fieldset>
          <legend>Level</legend>
          <label>
            <input type="radio" name="level" value="Beginner" />
            Beginner
          </label>
          <label>
            <input type="radio" name="level" value="Intermediate" />
            Intermediate
          </label>
          <label>
            <input type="radio" name="level" value="Advanced" />
            Advanced
          </label>
        </fieldset>
      </div>

      {/* Submit */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
