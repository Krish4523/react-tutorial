import { useState } from "react";

export function FormExample() {
  const [formData, setFromData] = useState({});

  function handleChange(e) {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password, msg, gender, city } = formData;
    alert(
      `Name: ${fname} ${lname}
Email: ${email}
Password: ${password}
Message: ${msg}
Gender: ${gender}
City: ${city}`,
    );
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center p-4 bg-slate-950 w-[20rem] rounded-md shadow-lg"
      >
        <fieldset className="flex flex-col gap-4 mb-4">
          <legend className="text-2xl mb-2">Sign In</legend>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="px-4 py-2 rounded-md w-full"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="px-4 py-2 rounded-md w-full"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md w-full"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-4 py-2 rounded-md w-full"
            onChange={handleChange}
            required
          />
          <textarea
            onChange={handleChange}
            name="msg"
            placeholder="Message"
            className="px-4 py-2 rounded-md w-full"
          ></textarea>

          <div className="flex items-start">
            <select
              onChange={handleChange}
              className="px-4 py-2 rounded-md"
              name="city"
            >
              <option selected disabled hidden>
                Select City
              </option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Baroda">Baroda</option>
              <option value="Morbi">Morbi</option>
            </select>
          </div>
          <div className="flex gap-2">
            <label>Branch: </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="femail"
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
          <div className="flex justify-center">
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
