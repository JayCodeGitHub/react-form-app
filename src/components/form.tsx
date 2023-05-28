import React from "react";

function Form() {
  return (
    <form>
      {/* First Name Input */}

      <div>
        <label>First Name</label>
        <input type="text" id="firstName" required />
      </div>

      {/* Last Name Input */}
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" required />
      </div>

      {/* Email Input */}
      <div>
        <label>Email Address</label>
        <input type="email" name="emailAddress" required />
      </div>

      {/* Phone Number Input */}
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          required
          pattern="\+\[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{3}"
        />
      </div>

      {/* Photo Input */}
      <div>
        <label>Photo</label>
        <input type="file" name="photo" />
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
