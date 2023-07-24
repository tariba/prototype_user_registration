import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import firebase from "../../../firebase/firebase.js"
import { app } from "../../../firebase/firebase.js";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Inputs = () => {
  // const auth = getAuth(app);
  const [user, loading, error] = useAuthState(firebase.auth());
  const email = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();
  const school = useRef();

  useEffect(() => {});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    school: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {user} = await firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      await axios.post("http://localhost:3001/users/", formData);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred. Please try again later.");
    }
  };
  console.log(formData);
  return (
    <div className="bg-gray-700 w-screen h-screen">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 col-span-2	 bg-green-500 rounded-lg p-8 sm:mx-5 md:mx-20 lg:ml-20 lg:mr-20 shadow-2xl"
        style={{
          height: "90vh",
          flex: 1,
          borderRadius: "20px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div ref={email} className="mt-10 col-span-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <label className="mb-20" ref={password} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label ref={firstName} htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label ref={lastName} htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label ref={address} htmlFor="address">
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label ref={school} htmlFor="school">
          School Name:
        </label>
        <input
          type="text"
          id="school"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        />

        <button className="bg-gray-700" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Inputs;
